'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RSSImage = exports.RSSCloud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RSSItem = require('./RSSItem');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base RSS feed specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html
 */

var RSSFeed = function () {
  function RSSFeed(title, link, description) {
    var version = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var items = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
    var language = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];
    var copyright = arguments.length <= 6 || arguments[6] === undefined ? null : arguments[6];
    var managingEditor = arguments.length <= 7 || arguments[7] === undefined ? null : arguments[7];
    var webMaster = arguments.length <= 8 || arguments[8] === undefined ? null : arguments[8];
    var pubDate = arguments.length <= 9 || arguments[9] === undefined ? null : arguments[9];
    var lastBuildDate = arguments.length <= 10 || arguments[10] === undefined ? null : arguments[10];
    var category = arguments.length <= 11 || arguments[11] === undefined ? null : arguments[11];
    var generator = arguments.length <= 12 || arguments[12] === undefined ? null : arguments[12];
    var docs = arguments.length <= 13 || arguments[13] === undefined ? null : arguments[13];
    var cloud = arguments.length <= 14 || arguments[14] === undefined ? null : arguments[14];
    var ttl = arguments.length <= 15 || arguments[15] === undefined ? null : arguments[15];
    var image = arguments.length <= 16 || arguments[16] === undefined ? null : arguments[16];
    var skipHours = arguments.length <= 17 || arguments[17] === undefined ? null : arguments[17];
    var skipDays = arguments.length <= 18 || arguments[18] === undefined ? null : arguments[18];

    _classCallCheck(this, RSSFeed);

    this.title = title;
    this.link = link;
    this.description = description;
    this.version = version;
    this.items = items;
    this.language = language;
    this.copyright = copyright;
    this.managingEditor = managingEditor;
    this.webMaster = webMaster;
    this.pubDate = pubDate;
    this.lastBuildDate = lastBuildDate;
    this.category = category;
    this.generator = generator;
    this.docs = docs;
    this.cloud = cloud;
    this.ttl = ttl;
    this.image = image;
    this.skipHours = skipHours;
    this.skipDays = skipDays;
  }

  _createClass(RSSFeed, null, [{
    key: 'fromObject',
    // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

    // rating: any; // Not supported
    // textInput: obj; // Not supported
    value: function fromObject(data) {
      if (data && data.title && data.link && data.description) {
        return new RSSFeed(data.title, data.link, data.description, data.version, data.items, data.language, data.copyright, data.managingEditor, data.webMaster, data.pubDate, data.lastBuildDate, data.category, data.generator, data.docs, data.cloud, data.ttl, data.image, data.skipHours, data.skipDays);
      }
      throw new Error('Missing required data to create a RSSItem:[' + JSON.stringify(data) + ']');
    }

    // Required
    // URL


    // Optional
    // WC3 spec: en-us
    // Email
    // Email
    // URL
    // integer 0-23, 0 is midnight

  }]);

  return RSSFeed;
}();

exports.default = RSSFeed;

var RSSCloud = exports.RSSCloud = function () {
  function RSSCloud(domain, port, path, registerProcedure, protocol) {
    _classCallCheck(this, RSSCloud);

    this.domain = domain;
    this.port = port;
    this.path = path;
    this.registerProcedure = registerProcedure;
    this.protocol = protocol;
  }

  _createClass(RSSCloud, null, [{
    key: 'fromObject',
    value: function fromObject(data) {
      if (data && data.domain && data.port && data.path && data.registerProcedure && data.protocol) {
        return new RSSCloud(data.domain, data.port, data.path, data.registerProcedure, data.protocol);
      }
      throw new Error('Missing required data to create a RSSCloud:[' + JSON.stringify(data) + ']');
    } // URL
    // URI path

  }]);

  return RSSCloud;
}();

var RSSImage = exports.RSSImage = function () {
  function RSSImage(url, title, link) {
    var width = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
    var height = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
    var description = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];

    _classCallCheck(this, RSSImage);

    this.url = url;
    this.title = title;
    this.link = link;
    this.width = width;
    this.height = height;
    this.description = description;
  }

  _createClass(RSSImage, null, [{
    key: 'fromObject',
    value: function fromObject(data) {
      if (data && data.content) {
        return new RSSImage(data.url, data.title, data.link, data.width, data.height, data.description);
      }
      throw new Error('Missing required data to create a RSSImage:[' + JSON.stringify(data) + ']');
    }

    // Required
    // URL
    // URL

    // Optional
    // Max: 144, Default: 88
    // Max: 400, Default: 31

  }]);

  return RSSImage;
}();