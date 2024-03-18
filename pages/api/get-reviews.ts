import type { NextApiRequest, NextApiResponse } from 'next';


export type Review = {
	profile_photo_url: string;
	rating: number;
	text: string;
	author_name: string;
};


export const getStaticProps = async () => {
	const placeId = 'ChIJZxew_ym1G0cRIvXyf4AV-AQ';
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY //process.env.PLACES_KEY;
	const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&reviews_no_translations=true&key=${apiKey}`;

	const details = await fetch(url);
	const result = await details.json();

	return {
		props: {data: result}
	}
}



const getReviews = (data
	//req: Request,
	//res: NextApiResponse<Review[]>,
) => {
	getStaticProps();
	console.log(data);
	//const { result: { reviews } } = await details.json();

	//res.status(200).json(reviews);
}

export default getReviews;