const path = require('path');
const webpack = require('webpack');
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
        fallback:{
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify"),
            "fs":false

        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};

