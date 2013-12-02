module.exports = function (pkg, broccoli) {
  var fs = require('fs')
  var path = require('path')

  pkg.setAssetDirectory('packages')

  // // Ember and Broccoli disagree about the terminology
  // var emberPackage = new broccoli.readers.Package('packages', new broccoli.transformers.preprocessors.PreprocessorPipeline([
  //   // defeaturify
  // ]))

  // return {
  //   package: emberPackage
  // }

  // just say no
  // pkg.getPossibleFileNames = function (moduleName) {
  //   return [
  //     path.join('packages', moduleName + '.js'),
  //     path.join('packages', moduleName, 'main.js')
  //   ]
  // }
}
