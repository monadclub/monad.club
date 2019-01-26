module.exports = {
  webpack: (config, options, webpack) => {
    // eslint-disable-next-line
    config.entry.main = ["./lib/api.ts"];

    // eslint-disable-next-line
    config.resolve = {
      extensions: [".ts", ".js", ".json", ".graphql"]
    };

    config.module.rules.push({
      test: /\.ts$/,
      loader: "ts-loader"
    });

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });

    return config;
  }
};
