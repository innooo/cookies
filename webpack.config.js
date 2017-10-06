const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//以下配置为基础配置
module.exports = {
    entry: {
        index: process.cwd() + '/www/src/entry/app.js', //__dirname是当前被执行文件的目录地址  process.cwd() 是当前执行node命令的目录地址
        //process模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。
        //这里的process.cwd() (cwd: Current Word Direction)
        //表示返回运行当前脚本的工作目录的路径 可以使用 node 进入命令行, 后输入process.cwd()打印确定
    },
    output: {
        filename: 'js/bundle.app.js',
        path: process.cwd() + '/www'
    },
    devServer: {
        historyApiFallback: true,
        // hot: true,
        // open: true,
        inline: true,
        port: 8888
    },
    module: {

        rules: [
            //处理css
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: false
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            //处理scss
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: false
                            }
                        },
                        'postcss-loader',
                        'sass-loader'
                    ],

                })
            },
            //处理ES2015
            // {
            //     test: /\.js$/,
            //     exclude: [/node_modules/],
            //     loader: 'babel-loader'
            // },
            // 处理html模版
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader',
            //     options: {
            //         minimize: false
            //     }
            // },
            // 处理图片
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash].[ext]',
                        publicPath: '../'
                    }
                }]
            },
            // 处理字体
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[hash].[ext]',
                        // publicPath: '../'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            src: path.resolve(__dirname, './../src')
        }
    },
    plugins: [
        //分离css文件
        new ExtractTextPlugin({
            filename: 'css/bundle.[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: process.cwd() + '/www/temp.html',
            inject: 'head',
            // favicon: process.cwd() + '/src/pages/index.html', //有疑惑
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'common/about.html',
        //     template: process.cwd() + '/www/src/aboutPage/about.html',
        //     inject: false,
        //     // favicon: process.cwd() + '/src/pages/index.html', //有疑惑
        //     chunks: []
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'views/page1.html',
        //     template: process.cwd() + '/src/pages/page1/page.html',
        //     chunks: ['page1']
        // }),
    ]
};