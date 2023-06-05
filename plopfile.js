const _plop = require('./plop-templates/_plop')

module.exports = function (plop) {
  // controller generator
  plop.setGenerator('plop', _plop)
}
