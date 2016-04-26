// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var preg_quote = require('../../../../src/php/pcre/preg_quote.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/pcre/preg_quote.js', function () {
  it('should pass example 1', function (done) {
    preg_quote("$40")
    var expected = '\\$40'
    var result = preg_quote("$40")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    preg_quote("*RRRING* Hello?")
    var expected = '\\*RRRING\\* Hello\\?'
    var result = preg_quote("*RRRING* Hello?")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    preg_quote("\\.+*?[^]$(){}=!<>|:")
    var expected = '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'
    var result = preg_quote("\\.+*?[^]$(){}=!<>|:")
    expect(result).to.deep.equal(expected)
    done()
  })
})