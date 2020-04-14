# Set up React app from scrach

1. Babel

   - npm i -D @babel/core @babel/preset-env @babel/preset-react
   - npm i -D @babel/plugin-proposal-class-properties @babel/plugin-syntax-dynamic-import
   - npm i @babel/polyfill
   - touch .babelrc

2. ESLint

   - npm i -D babel-eslint eslint-config-airbnb
   - npx install-peerdeps --dev eslint-config-airbnb
   - touch .eslintrc

3. Prettier

   - npm i -D prettier eslint-config-prettier pretty-quick husky
   - touch .prettierrc

4. Webpack

   - npm i -D webpack webpack-cli
   - npm i -D webpack-dev-server webpack-bundle-analyzer html-webpack-plugin clean-webpack-plugin friendly-errors-webpack-plugin
   - npm i -D babel-loader eslint-loader css-loader style-loader url-loader file-loader sass-loader node-sass
   - touch webpack.config.js

5. React

   - npm i react react-dom prop-types react-router-dom redux react-redux redux-saga react-hot-loader @hot-loader/react-dom

6. Testing
   - npm i -D jest enzyme enzyme-adapter-react-16 sinon
