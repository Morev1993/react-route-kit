var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/static/'
	},
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
		        	presets: [ "es2015", "react", "react-hmre" ]
		      	}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
		        test: /\.scss$/,
		        loaders: ['style', 'css', 'sass']
	      	}/*,
	      	{
	      		test: /\.scss$/, 
	      		loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
	      	}*/
		]
	},
	postcss: function() {
		return [autoprefixer, precss]
	},
	sassLoader: {
    	includePaths: [path.resolve(__dirname, "./src")]
  	},
  	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin("app.css")
	]
}
