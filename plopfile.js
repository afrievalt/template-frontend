const _plop = require('./plop-templates/_plop')
const _table = require('./plop-templates/_table')

module.exports = function (plop) {
  // controller generator
plop.setGenerator('table', _table)
  plop.setGenerator('plop', _plop)
}
