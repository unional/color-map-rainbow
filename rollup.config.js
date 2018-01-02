import paramCase from 'param-case'
import pascalCase from 'pascal-case'
import commonjs from 'rollup-plugin-commonjs'
import nodeBuiltins from 'rollup-plugin-node-builtins'
import nodeGlobals from 'rollup-plugin-node-globals'
import nodeResolve from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'

const pkg = require('./package')

const moduleName = pascalCase(pkg.name)

export default {
  input: 'dist-es2015/index.js',
  output: {
    file:`dist/${paramCase(pkg.name)}.es2015.js`,
    format: 'iife',
    name: moduleName,
    exports: 'named',
    sourcemap: true
  },
  plugins: [
    sourcemaps(),
    nodeResolve({
      jsnext: true
    }),
    nodeGlobals(),
    nodeBuiltins(),
    commonjs()
  ]
}
