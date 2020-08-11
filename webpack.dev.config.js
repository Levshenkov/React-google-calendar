const resolve = require('path')

const config = {
    entry: './client/main.js',
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    }

}

module.exports = config