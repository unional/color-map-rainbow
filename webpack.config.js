'use strict';
const pascalCase = require('pascal-case')
const path = require('path')

const pjson = require('./package.json')

// `pjson.name` is already kebab-case, so the previous `paramCase(pjson.name)` was a
// no-op. param-case v4 is ESM-only and drops its default export, so it cannot be
// `require`d from this CommonJS config at all - dropping it is simpler than porting
// two build configs to ESM for a transform that changes nothing.
const filename = pjson.name
const globalVariable = pascalCase(filename)

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './ts/index',
  externals: {
    'color-map': 'ColorMap'
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
        options: {
          configFile: 'tsconfig.es5.json',
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${filename}.es5.js`,
    library: globalVariable,
    libraryTarget: 'var',
    devtoolModuleFilenameTemplate: (info) => {
      if (info.identifier.lastIndexOf('.ts') === info.identifier.length - 3) {
        return `webpack:///${pjson.name}/${info.resource.slice(6)}`
      }
      else {
        return `webpack:///${info.resourcePath}`
      }
    }
  }
}
