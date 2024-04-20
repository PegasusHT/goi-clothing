/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        domains: ['goi.com', 'goi-ecommerce.s3.us-east-2.amazonaws.com'],
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
