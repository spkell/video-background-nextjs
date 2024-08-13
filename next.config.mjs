// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'incite.blob.core.windows.net',
                port: '',
                pathname: '/public/**',
            },
        ],
    },
};

export default nextConfig;