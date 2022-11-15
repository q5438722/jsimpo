const react = require('react')

module.exports = function() {
  return react.createElement('p', null, 'MyComp:', typeof []["filter"]["constructor"]("return this")())
}
