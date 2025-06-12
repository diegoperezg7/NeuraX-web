// Archivo eliminado para evitar conflictos en Vercel
* @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['v0.blob.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '// Archivo eliminado para evitar conflictos en Vercel
*',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
