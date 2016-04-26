// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var usort = require('../../../../src/php/array/usort.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/usort.js', function () {
  it('should pass example 1', function (done) {
    var $stuff = {d: '3', a: '1', b: '11', c: '4'}
    usort($stuff, function (a, b) { return (a - b) })
    var $result = $stuff
    var expected = {0: '1', 1: '3', 2: '4', 3: '11'}
    var $stuff = {d: '3', a: '1', b: '11', c: '4'}
    usort($stuff, function (a, b) { return (a - b) })
    var result = $stuff
    expect(result).to.deep.equal(expected)
    done()
  })
})