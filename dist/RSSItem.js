'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base RSS feed item specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt
 * Validation Note: at least one of title or description must exist. All else optional.
 */

var RSSItem = function () {
  function RSSItem(title, description) {
    var link = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var author = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var category = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
    var comments = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];
    var enclosure = arguments.length <= 6 || arguments[6] === undefined ? null : arguments[6];
    var guid = arguments.length <= 7 || arguments[7] === undefined ? null : arguments[7];
    var pubDate = arguments.length <= 8 || arguments[8] === undefined ? null : arguments[8];
    var source = arguments.length <= 9 || arguments[9] === undefined ? null : arguments[9];

    _classCallCheck(this, RSSItem);

    this.title = title;
    this.description = description;
    this.link = link;
    this.author = author;
    this.category = category;
    this.comments = comments;
    this.enclosure = enclosure;
    this.guid = guid;
    this.pubDate = pubDate;
    this.source = source;
  }

  _createClass(RSSItem, null, [{
    key: 'fromObject',
    // url
    value: function fromObject(data) {
      if (data && (data.title || data.description)) {
        return new RSSItem(data.title, data.description, data.link, data.author, data.category, data.comments, data.enclosure, data.guid, data.pubDate, data.source);
      }
      throw new Error('Missing required data to create a RSSItem:[' + JSON.stringify(data) + ']');
    } // URL
    // Email
    // URL
    // GUID

  }]);

  return RSSItem;
}();

exports.default = RSSItem;

var RSSEnclosure = exports.RSSEnclosure = function () {
  function RSSEnclosure(url, length, type) {
    _classCallCheck(this, RSSEnclosure);

    this.url = url;
    this.length = length;
    this.type = type;
  }

  _createClass(RSSEnclosure, null, [{
    key: 'fromObject',
    // mime-type
    value: function fromObject(data) {
      if (data && data.url && data.length && data.type) {
        return new RSSEnclosure(data.url, data.length, data.type);
      }
      throw new Error('Missing required data to create a RSSEnclosure:[' + JSON.stringify(data) + ']');
    } // URL
    // integer

  }]);

  return RSSEnclosure;
}();

var RSSCategory = exports.RSSCategory = function () {
  function RSSCategory(content) {
    var domain = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    _classCallCheck(this, RSSCategory);

    this.content = content;
    this.domain = domain;
  }

  _createClass(RSSCategory, null, [{
    key: 'fromObject',
    // URL
    value: function fromObject(data) {
      if (data && data.content) {
        return new RSSCategory(data.content, data.domain);
      }
      throw new Error('Missing required data to create a RSSEnclosure:[' + JSON.stringify(data) + ']');
    }
  }]);

  return RSSCategory;
}();