// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_map = require('../../../../src/php/array/array_map.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_map.js', function () {
  it('should pass example 1', function (done) {
    array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )
    var expected = [ 1, 8, 27, 64, 125 ]
    var result = array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] )
    expect(result).to.deep.equal(expected)
    done()
  })
})