var toFunction = require('to-function')

module.exports = function nestBy (object, fn) {
  fn = toFunction(fn)

  var otherKeys = Array.prototype.slice.call(arguments, 2)

  var result = Array.isArray(object)
    ? groupByArray(object, fn)
    : groupByObject(object, fn)

  if (otherKeys.length > 0) {
    var keys = Object.keys(result)
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i]
      result[key] = nestBy.apply(this, [ result[key] ].concat(otherKeys))
    }
  }

  return result
}

function groupByArray (object, fn) {
  var result = {}
  for (var i = 0, len = object.length; i < len; i++) {
    var prop = fn(object[i], i, i)
    if (!result[prop]) result[prop] = []
    result[prop].push(object[i])
  }
  return result
}

function groupByObject (object, fn) {
  var result = {}
  var keys = Object.keys(object)
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i]
    var prop = fn(object[key], key, i)
    if (!result[prop]) result[prop] = {}
    result[prop][key] = object[key]
  }
  return result
}
