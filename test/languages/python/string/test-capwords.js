// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var capwords = require('../../../../src/python/string/capwords.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/python/string/capwords.js', function () {
  it('should pass example 1', function (done) {
    capwords('kevin van  zonneveld')
    var expected = 'Kevin Van  Zonneveld'
    var result = capwords('kevin van  zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    capwords('HELLO WORLD')
    var expected = 'HELLO WORLD'
    var result = capwords('HELLO WORLD')
    expect(result).to.deep.equal(expected)
    done()
  })
})