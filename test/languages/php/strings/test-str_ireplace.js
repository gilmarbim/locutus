// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var str_ireplace = require('../../../../src/php/strings/str_ireplace.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/str_ireplace.js', function () {
  it('should pass example 1', function (done) {
    str_ireplace('M', 'e', 'name')
    var expected = 'naee'
    var result = str_ireplace('M', 'e', 'name')
    expect(result).to.deep.equal(expected)
    done()
  })
})