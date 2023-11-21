/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'howtoabroad.com',
                port: '',
            },
        ],
    },

}

module.exports = nextConfig
