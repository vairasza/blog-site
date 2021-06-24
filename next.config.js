module.exports = ({
  async redirects() {
    return [
      {
        source: '/apps',
        destination: '/apps/page/1',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/posts/page/1',
        permanent: true,
      }
    ]
  },
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ]
    );
    return config;
  },
});
