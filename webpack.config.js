module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              // ident: 'postcss',
              // syntax: 'postcss-scss',
              postcssOptions: {
                plugins: [
                  'postcss-import',
                  'tailwindcss',
                  'autoprefixer',
                ]
              }
            }
          }
        ],
      }
    ]
  }
};
