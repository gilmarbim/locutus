// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_buffer = require('../../../../src/php/var/is_buffer.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_buffer.js', function () {
  it('should pass example 1', function (done) {
    is_buffer('This could be binary or a regular string as far as JavaScript knows...')
    var expected = true
    var result = is_buffer('This could be binary or a regular string as far as JavaScript knows...')
    expect(result).to.deep.equal(expected)
    done()
  })
})