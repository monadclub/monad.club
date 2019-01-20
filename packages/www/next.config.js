const { PHASE_PRODUCTION_SERVER } =
  // eslint-disable-next-line no-nested-ternary
  process.env.NODE_ENV === "development"
    ? {}
    : !process.env.NOW_REGION
    ? require("next/constants")
    : // eslint-disable-next-line import/no-unresolved
      require("next-server/constants");

module.exports = phase => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      webpack(config) {
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        });
        return config;
      }
    };
  }
  // eslint-disable-next-line global-require
  const withTypescript = require("@zeit/next-typescript");
  // eslint-disable-next-line global-require
  const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
  return withTypescript({
    webpack(config, options) {
      if (options.isServer)
        config.plugins.push(new ForkTsCheckerWebpackPlugin());
      return config;
    }
  });
};
