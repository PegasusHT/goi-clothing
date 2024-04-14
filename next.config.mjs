/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: '**goi.com',
            port: '',
            },
        ],
    },
};

export default nextConfig;
