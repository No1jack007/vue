const webpackMerge=require('webpack-merge')
const baseConfig=require('./base.config.js')

module.exprots=webpackMerge(baseConfig,{
    devServer: {
        contentBase: './dist',
        inline: true
    }
})


