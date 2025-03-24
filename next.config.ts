import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'i.ibb.co',
  //       port: '',
  //       pathname: '/23j7pS6g/*',
  //       search: '',
  //     },
  //   ],
  // },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig
