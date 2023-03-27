export const module = {
    rules: [
        {
            test: /\.sass$/i,
            loader: "css-loader",
            options: {
                url: false,
            },
        },
    ],
};