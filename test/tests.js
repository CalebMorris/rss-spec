var expect = require('chai').expect;

var rssSpec = require('../src');

describe('Load', function() {
  it('should contain all expected types', function() {
    expect(rssSpec).to.be.an('object');
    ['RSSItem', 'RSSEnclosure', 'RSSCategory', 'RSSFeed', 'RSSCloud', 'RSSImage']
      .forEach(function(prop) {
        expect(rssSpec).to.have.a.property(prop).that.is.a('function');
      });
  });
});
