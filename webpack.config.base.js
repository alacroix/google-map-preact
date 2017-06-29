var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

var reactDomExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
};

module.exports = {
  output: {
    library: 'GoogleMapReact',
    libraryTarget: 'umd',
  },
  externals: {
    react: reactExternal,
    'react-dom': reactDomExternal,
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' }],
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      // Not necessary unless you consume a module using `createClass`
      'create-react-class': 'preact-compat/lib/create-react-class',
    },
  },
};
