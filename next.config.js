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
            {
                protocol: 'https',
                hostname: 'www.gymnasium-feuerbach.de',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'tonimarino.co.uk',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'yvlgmxrunsfqgobqceqr.supabase.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'yvlgmxrunsfqgobqceqr.supabase.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'kgdrkbjwy8qctruc.public.blob.vercel-storage.com',
                port: '',
            },
        ],
    },

}

module.exports = nextConfig
