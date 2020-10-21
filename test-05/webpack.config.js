const path = require('path'); //调用node.js中的路径
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js', //需要打包的文件
    output: {
        path: path.resolve(__dirname, 'dist'), //指定生成的文件目录
        filename: 'bundle.js',    //输入的文件名是什么，生成的文件名也是什么
    },
    module: {
        rules: [
            //加载css组件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //加载图片组件
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 13000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        //别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('author zhang'),
        new HtmlWebPackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }

}
