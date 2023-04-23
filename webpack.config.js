module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|gltf)$/i,
                use: [
                    {
                        loader: "asset/resource",
                    },
                ],
            },
        ],
    },
};
