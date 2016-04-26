// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var preg_grep = require('../../../../src/php/pcre/preg_grep.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/pcre/preg_grep.js', function () {
  it('should pass example 1', function (done) {
    var arr = [1, 4, 4.5, 3, 'a', 4.4]
    preg_grep("/^(\\d+)?\\.\\d+$/", arr)
    var expected = {2: 4.5, 5: 4.4}
    var arr = [1, 4, 4.5, 3, 'a', 4.4]
    var result = preg_grep("/^(\\d+)?\\.\\d+$/", arr)
    expect(result).to.deep.equal(expected)
    done()
  })
})