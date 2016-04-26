// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strpbrk = require('../../../../src/php/strings/strpbrk.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strpbrk.js', function () {
  it('should pass example 1', function (done) {
    strpbrk('This is a Simple text.', 'is')
    var expected = 'is is a Simple text.'
    var result = strpbrk('This is a Simple text.', 'is')
    expect(result).to.deep.equal(expected)
    done()
  })
})