XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var sha1_file = require('/Users/kvz/code/phpjs/src/php/strings/sha1_file.js')

describe.skip('php.strings.sha1_file.js', function () {
  it('should pass example 1', function (done) {
    sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm')
    var expected = '40bd001563085fc35165329ea1ff5c5ecbdbbeef'
    var result = sha1_file('http://kevin.vanzonneveld.net/pj_test_supportfile_1.htm')
    expect(result).to.deep.equal(expected)
    done()
  })
})