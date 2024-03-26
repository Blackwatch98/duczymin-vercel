/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  defaultLocale: 'pl-PL',
    async redirects() {
      return [
        {
            source: '/o-nas',
            destination: '/o-firmie',
            permanent: true,
        },
        {
            source: '/bramy',
            destination: '/produkty/bramy-garazowe',
            permanent: true,
        },
        {
            source: '/bramy/bramy-segmentowe/:path*',
            destination: '/produkty/bramy-garazowe',
            permanent: true,
        },
        {
            source: '/bramy/bramy-uchylne',
            destination: '/produkty/bramy-garazowe',
            permanent: true,
        },
        {
            source: '/bramy/bramy-dwuskrzydlowe',
            destination: '/produkty/bramy-garazowe',
            permanent: true,
        },
        {
            source: '/bramy/bramy-przemyslowe/:path*',
            destination: '/produkty/bramy-przemyslowe',
            permanent: true,
        },
        {
            source: '/bramy/bramy-rolowane/:path*',
            destination: '/produkty/bramy-rolowane',
            permanent: true,
        },
        {
            source: '/okna/:path*',
            destination: '/produkty/okna-pcv',
            permanent: true,
        },
        {
            source: '/parapety/:path*',
            destination: '/produkty/parapety',
            permanent: true,
        },
        {
            source: '/rolety/:path*',
            destination: '/produkty/rolety-zewnetrzne',
            permanent: true,
        },
        {
            source: '/markizy/:path*',
            destination: '/produkty/rolety-zewnetrzne',
            permanent: true,
        },
        {
            source: '/rolety-wewnetrzne/:path*',
            destination: '/produkty/oslony-wewnetrzne',
            permanent: true,
        },
        {
            source: '/automatyka/:path*',
            destination: '/produkty/automatyka',
            permanent: true,
        },
        {
            source: '/drzwi/:path*',
            destination: '/produkty/drzwi-zewnetrzne',
            permanent: true,
        },
        {
            source: '/szlabany',
            destination: '/produkty/bramy-przemyslowe',
            permanent: true,
        },
        {
            source: '/zaluzje-fasadowe',
            destination: '/produkty/zaluzje-fasadowe',
            permanent: true,
        }
      ]
    },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "https://duczymin.pl/" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
}

module.exports = nextConfig
