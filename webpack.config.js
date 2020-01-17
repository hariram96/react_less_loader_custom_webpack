const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const settings = {
    distPath: path.join(__dirname, "dist"),
    srcPath: path.join(__dirname, "src")
};

function srcPathExtend(subpath) {
    return path.join(settings.srcPath, subpath)
}

module.exports = (env, options) => {
    
    const isDevMode = options.mode === "development";

    return {
        entry: { main: './src/index.js' },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        devtool: isDevMode ? "source-map" : false,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },          
                {
                    test: /\.less$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                javascriptEnabled: true,
                                sourceMap: isDevMode,
                                importLoaders:1,
                                modules:true,
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("autoprefixer")()
                                ],
                                javascriptEnabled: true,
                                sourceMap: isDevMode
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: isDevMode,
                                javascriptEnabled: true
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader']
                },
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]",
                        },
                    },
                },
                {
                    test: /\.(jpe?g|png|gif|svg|ico)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "assets/"
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        plugins: [
            new CleanWebpackPlugin([settings.distPath], {
                verbose: true
            }),
            new HtmlWebpackPlugin({
                template: srcPathExtend("../public/index.html")
            })
        ]
    };
};
