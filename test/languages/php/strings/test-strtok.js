// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var strtok = require('../../../../src/php/strings/strtok.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/strtok.js', function () {
  it('should pass example 1', function (done) {
    var $string = "\t\t\t\nThis is\tan example\nstring\n"
    var $tok = strtok($string, " \n\t")
    var $b = ''
    while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
    var $result = $b
    var expected = "Word=This\nWord=is\nWord=an\nWord=example\nWord=string\n"
    var $string = "\t\t\t\nThis is\tan example\nstring\n"
    var $tok = strtok($string, " \n\t")
    var $b = ''
    while ($tok !== false) {$b += "Word="+$tok+"\n"; $tok = strtok(" \n\t");}
    var result = $b
    expect(result).to.deep.equal(expected)
    done()
  })
})