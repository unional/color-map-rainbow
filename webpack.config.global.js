'use strict';
const paramCase = require('param-case')
const pascalCase = require('pascal-case')
const path = require('path')
const webpack = require('webpack')

const pjson = require('./package.json')

const packageName = pjson.name
const version = pjson.version
const filename = paramCase(packageName)
const globalVariable = pascalCase(filename)

module.exports = {
  devtool: 'source-map',
  entry: {
    [filename]: './dist/commonjs/index'
  },
  externals: {
    'color-map': 'ColorMap'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: "source-map-loader",
        test: /\.js?$/
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${filename}.js`,
    library: globalVariable,
    libraryTarget: 'var'
  }
}
