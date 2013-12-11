module.exports = function (factory, broccoli) {
  var fs = require('fs')
  var path = require('path')

  var pkg = factory.makePackage()
    .map({
      'packages': '/'
    })

  return [pkg]

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
