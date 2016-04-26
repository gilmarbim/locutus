// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var prev = require('../../../../src/php/array/prev.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/prev.js', function () {
  it('should pass example 1', function (done) {
    var $transport = ['foot', 'bike', 'car', 'plane']
    prev($transport)
    var expected = false
    var $transport = ['foot', 'bike', 'car', 'plane']
    var result = prev($transport)
    expect(result).to.deep.equal(expected)
    done()
  })
})