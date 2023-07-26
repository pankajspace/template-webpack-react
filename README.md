# React + Webpack

## Instructions

1. Initializing npm project
   1. npm init -y
2. Setting up webpack
   1. npm i --save-dev webpack webpack-cli
3. Setting up Html Webpack Plugin
   1. npm i --save-dev html-webpack-plugin
4. Setting up Webpack Dev Server
   1. npm i --save-dev webpack-dev-server
   2. It appears that webpack-dev-server doesn't serve the content from the dist folder
5. Configuring css loaders in webpack
   1. npm i --save-dev style-loader css-loader
      1. In this way css is inserted in the bundle.js
   2. npm i --save-dev mini-css-extract-plugin
      1. Using this plugin we are extracting css files from bundle.js
6. Adding jQuery using webpack
   1. npm i jquery
7. Adding PostCSS using webpack
   1. npm i --save-dev postcss-loader postcss
   2. npm i --save-dev postcss-preset-env
   3. npm i --save-dev autoprefixer
8. Adding ESLint
   1. npm i --save-dev eslint
   2. touch .eslintrc.js

## Links

1. [Webpack Asset Management](https://webpack.js.org/guides/asset-management/)
2. [Configuring CSS and CSS Modules](https://blog.jakoblind.no/css-modules-webpack/)
3. [CSS loader](https://github.com/webpack-contrib/css-loader#recommend)
4. [CSS Modules](https://css-tricks.com/css-modules-part-1-need/)
5. [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
6. [jQuery](https://jquery.com/)
7. [PostCSS Loader](https://webpack.js.org/loaders/postcss-loader/)
8. [PostCSS Preset Env](https://www.npmjs.com/package/postcss-preset-env)
   1. PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
9. [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
   1. PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
