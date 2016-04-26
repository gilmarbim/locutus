// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_shift = require('../../../../src/php/array/array_shift.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_shift.js', function () {
  it('should pass example 1', function (done) {
    array_shift(['Kevin', 'van', 'Zonneveld'])
    var expected = 'Kevin'
    var result = array_shift(['Kevin', 'van', 'Zonneveld'])
    expect(result).to.deep.equal(expected)
    done()
  })
})