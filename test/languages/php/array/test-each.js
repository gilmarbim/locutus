// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var each = require('../../../../src/php/array/each.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/each.js', function () {
  it('should pass example 1', function (done) {
    each({a: "apple", b: "balloon"})
    var expected = {0: "a", 1: "apple", key: "a", value: "apple"}
    var result = each({a: "apple", b: "balloon"})
    expect(result).to.deep.equal(expected)
    done()
  })
})