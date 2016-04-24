XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var html_entity_decode = require('/Users/kvz/code/phpjs/src/php/strings/html_entity_decode.js')

describe('php.strings.html_entity_decode.js', function () {
  it('should pass example 1', function (done) {
    html_entity_decode('Kevin &amp; van Zonneveld')
    var expected = 'Kevin & van Zonneveld'
    var result = html_entity_decode('Kevin &amp; van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    html_entity_decode('&amp;lt;')
    var expected = '&lt;'
    var result = html_entity_decode('&amp;lt;')
    expect(result).to.deep.equal(expected)
    done()
  })
})