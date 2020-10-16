const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
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
                            limit: 13000
                        }
                    }
                ]
            }
        ]
    }
}