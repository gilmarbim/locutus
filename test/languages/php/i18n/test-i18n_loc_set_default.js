// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var i18n_loc_set_default = require('../../../../src/php/i18n/i18n_loc_set_default.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/i18n/i18n_loc_set_default.js', function () {
  it('should pass example 1', function (done) {
    i18n_loc_set_default('pt_PT')
    var expected = true
    var result = i18n_loc_set_default('pt_PT')
    expect(result).to.deep.equal(expected)
    done()
  })
})