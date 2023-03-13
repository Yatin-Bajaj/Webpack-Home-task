const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",

    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings

                    {
                        loader: "style-loader",
                    },

                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },

                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

});
