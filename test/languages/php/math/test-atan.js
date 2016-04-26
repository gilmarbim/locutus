// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var atan = require('../../../../src/php/math/atan.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/atan.js', function () {
  it('should pass example 1', function (done) {
    atan(8723321.4)
    var expected = 1.5707962121596615
    var result = atan(8723321.4)
    expect(result).to.deep.equal(expected)
    done()
  })
})