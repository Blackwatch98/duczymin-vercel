//  node url-check.js xml-sitemap.xml localhost:3000    
const fs = require('fs');
const xml2js = require('xml2js');
const axios = require('axios');
const parser = new xml2js.Parser();

// Check if the user provided the required arguments
if (process.argv.length < 4) {
    console.log('Usage: node script.js <inputFile> <newHostName>');
    process.exit(1);
}

const inputFile = process.argv[2];
const newHostName = process.argv[3];

// Read the XML sitemap file
fs.readFile(inputFile, (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the XML
    parser.parseString(data, async (err, result) => {
        if (err) {
            console.error('Error parsing XML:', err);
            return;
        }

        if (!result.urlset || !result.urlset.url) {
            console.log('No URLs found in the XML sitemap.');
            return;
        }

        for (const urlElement of result.urlset.url) {
            const originalUrl = urlElement.loc[0];
            const originalUrlObj = new URL(originalUrl);
            const modifiedUrl = new URL(originalUrlObj.pathname + originalUrlObj.search, `http://${newHostName}`);

            try {
                const response = await axios.get(modifiedUrl.href);
                console.log(`${modifiedUrl.href} - Status Code: ${response.status}`);
            } catch (error) {
                if (error.response) {
                    console.log(`${modifiedUrl.href} - Status Code: ${error.response.status}`);
                } else if (error.request) {
                    console.log(`${modifiedUrl.href} - No response received`);
                } else {
                    console.log(`${modifiedUrl.href} - Error: ${error.message}`);
                }
            }
        }
    });
});
