// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ctype_upper = require('../../../../src/php/ctype/ctype_upper.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/ctype/ctype_upper.js', function () {
  it('should pass example 1', function (done) {
    ctype_upper('AZ')
    var expected = true
    var result = ctype_upper('AZ')
    expect(result).to.deep.equal(expected)
    done()
  })
})