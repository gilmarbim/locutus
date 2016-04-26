// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var money_format = require('../../../../src/php/strings/money_format.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/money_format.js', function () {
  it('should pass example 1', function (done) {
    money_format('%i', 1234.56)
    var expected = ' USD 1,234.56'
    var result = money_format('%i', 1234.56)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    money_format('%14#8.2n', 1234.5678)
    var expected = ' $     1,234.57'
    var result = money_format('%14#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    money_format('%14#8.2n', -1234.5678)
    var expected = '-$     1,234.57'
    var result = money_format('%14#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    money_format('%(14#8.2n', 1234.5678)
    var expected = ' $     1,234.57 '
    var result = money_format('%(14#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    money_format('%(14#8.2n', -1234.5678)
    var expected = '($     1,234.57)'
    var result = money_format('%(14#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    money_format('%=014#8.2n', 1234.5678)
    var expected = ' $000001,234.57'
    var result = money_format('%=014#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    money_format('%=014#8.2n', -1234.5678)
    var expected = '-$000001,234.57'
    var result = money_format('%=014#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    money_format('%=*14#8.2n', 1234.5678)
    var expected = ' $*****1,234.57'
    var result = money_format('%=*14#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    money_format('%=*14#8.2n', -1234.5678)
    var expected = '-$*****1,234.57'
    var result = money_format('%=*14#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 10', function (done) {
    money_format('%=*^14#8.2n', 1234.5678)
    var expected = '  $****1234.57'
    var result = money_format('%=*^14#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 11', function (done) {
    money_format('%=*^14#8.2n', -1234.5678)
    var expected = ' -$****1234.57'
    var result = money_format('%=*^14#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 12', function (done) {
    money_format('%=*!14#8.2n', 1234.5678)
    var expected = ' *****1,234.57'
    var result = money_format('%=*!14#8.2n', 1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 13', function (done) {
    money_format('%=*!14#8.2n', -1234.5678)
    var expected = '-*****1,234.57'
    var result = money_format('%=*!14#8.2n', -1234.5678)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 14', function (done) {
    money_format('%i', 3590)
    var expected = ' USD 3,590.00'
    var result = money_format('%i', 3590)
    expect(result).to.deep.equal(expected)
    done()
  })
})