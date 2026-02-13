/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@react-three/fiber', '@react-three/drei', 'three'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.siddiquico.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
