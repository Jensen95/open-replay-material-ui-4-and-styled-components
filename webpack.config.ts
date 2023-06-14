require('dotenv').config()
import HtmlWebPackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import Dotenv from 'dotenv-webpack'

import TerserPlugin from 'terser-webpack-plugin'
import { Configuration } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const isDevelopment = process.env.NODE_ENV !== 'production'
const config: Configuration & { devServer: DevServerConfiguration } = {
	entry: {
		main: './src/index.tsx',
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		allowedHosts: 'all',
		host: '0.0.0.0',
		port: 3000,
		client: {
			webSocketURL: {
				hostname: 'localhost',
			},
		},
	},

	output: {
		filename: '[name].[contenthash].bundle.js',
		path: __dirname + '/dist',
		pathinfo: false,
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
	cache: {
		type: 'filesystem',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'swc-loader',
					options: {
						jsc: {
							parser: {
								syntax: 'typescript',
								tsx: true,
								decorators: false,
								dynamicImport: true,
								exportDefaultFrom: true,
							},
							externalHelpers: true,
							transform: {
								react: {
									refresh: isDevelopment,
								},
							},
						},
						sourceMaps: true,
						env: {
							targets: isDevelopment
								? 'last 1 chrome version, last 1 firefox version, last 1 safari version'
								: 'defaults, not IE 11',
							mode: 'entry',
							coreJs: 3,
						},
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
		minimize: !isDevelopment,
		minimizer: [
			new TerserPlugin({
				minify: TerserPlugin.swcMinify,
				// `terserOptions` options will be passed to `swc` (`@swc/core`)
				// Link to options - https://swc.rs/docs/config-js-minify
				terserOptions: {},
			}),
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			publicPath: '/',
		}),
		new Dotenv(),
		new ForkTsCheckerWebpackPlugin({
			async: isDevelopment,
		}),
		isDevelopment && new ReactRefreshWebpackPlugin({ overlay: false }),
	].filter(Boolean),
}

export default config
