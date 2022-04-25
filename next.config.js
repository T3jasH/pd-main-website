const path = require("path")

module.exports = {
    reactStrictMode: true,
    output: { path: path.resolve(__dirname, "static") },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: "asset/resource",
            generator: {
                filename: "static/[name]_[hash][ext]",
            },
        })

        return config
    },
}
