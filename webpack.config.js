var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src"),
				],
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				include: [
					path.resolve(__dirname, "src"),
				],
				exclude: /node_modules/,
				query: {
		        	presets: [ "es2015", "stage-0", "react", "react-hmre" ]
		      	},
				plugins: ['transform-runtime'],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
		        test: /\.scss$/,
		        loaders: ['style', 'css', 'sass']
		      }
		]
	},
	postcss: function() {
		return [autoprefixer, precss]
	},
	sassLoader: {
    	includePaths: [path.resolve(__dirname, "./src")]
  	}
}
