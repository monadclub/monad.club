const { PHASE_PRODUCTION_SERVER } =
	process.env.NODE_ENV === 'development'
		? {}
		: !process.env.NOW_REGION ? require('next/constants') : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		// Config used to run in production.
		return {
			webpack(config, options) {
				config.module.rules.push({
					test: /\.mjs$/,
					include: /node_modules/,
					type: 'javascript/auto'
				});
				return config;
			}
		};
	}
	const withTypescript = require('@zeit/next-typescript');
	const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
	return withTypescript({
		webpack(config, options) {
			if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
			return config;
		}
	});
};
