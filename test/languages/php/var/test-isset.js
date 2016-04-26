// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var isset = require('../../../../src/php/var/isset.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/isset.js', function () {
  it('should pass example 1', function (done) {
    isset( undefined, true)
    var expected = false
    var result = isset( undefined, true)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    isset( 'Kevin van Zonneveld' )
    var expected = true
    var result = isset( 'Kevin van Zonneveld' )
    expect(result).to.deep.equal(expected)
    done()
  })
})