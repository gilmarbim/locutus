// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sprintf = require('../../../../src/php/strings/sprintf.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/sprintf.js', function () {
  it('should pass example 1', function (done) {
    sprintf("%01.2f", 123.1)
    var expected = '123.10'
    var result = sprintf("%01.2f", 123.1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    sprintf("[%10s]", 'monkey')
    var expected = '[    monkey]'
    var result = sprintf("[%10s]", 'monkey')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    sprintf("[%'#10s]", 'monkey')
    var expected = '[####monkey]'
    var result = sprintf("[%'#10s]", 'monkey')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    sprintf("%d", 123456789012345)
    var expected = '123456789012345'
    var result = sprintf("%d", 123456789012345)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    sprintf('%-03s', 'E')
    var expected = 'E00'
    var result = sprintf('%-03s', 'E')
    expect(result).to.deep.equal(expected)
    done()
  })
})