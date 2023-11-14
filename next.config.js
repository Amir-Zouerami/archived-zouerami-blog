/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{ protocol: 'http', hostname: '127.0.0.1', port: '8090' }],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // TODO: SET THIS IN PRODUCTION
          // {
          // key: 'Content-Security-Policy',
          // value: "default-src 'self';",

          // EXAMPLE VALUE HERE:
          // value:
          // "base-uri 'self'; default-src 'self'; form-action 'self'; child-src 'self'; frame-ancestors 'self';",
          // },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3000',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, User-Agent, Accept',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // More Here --> https://nextjs.org/docs/app/api-reference/next-config-js/headers#x-content-type-options
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // { THIS IS THE DEFAULT (NO NEED TO SET) --> https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#strict-origin-when-cross-origin
          //   key: 'referrer-policy',
          //   value: 'strict-origin-when-cross-origin',
          // },
        ],
      },
    ];
  },
  // experimental: {
  //   serverActions: true,
  //   serverActionsBodySizeLimit: '3mb',
  // },
};

module.exports = nextConfig;
