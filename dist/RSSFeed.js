'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RSSImage = exports.RSSCloud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RSSItem = require('./RSSItem');

var _RSSItem2 = _interopRequireDefault(_RSSItem);

var _RSSCore = require('./RSSCore');

var _RSSCore2 = _interopRequireDefault(_RSSCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base RSS feed specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html
 */
var RSSFeed = function () {
  function RSSFeed(title, link, description) {
    var items = arguments.length <= 3 || arguments[3] === undefined ? new Set([]) : arguments[3];
    var version = arguments[4];
    var language = arguments[5];
    var copyright = arguments[6];
    var managingEditor = arguments[7];
    var webMaster = arguments[8];
    var pubDate = arguments[9];
    var lastBuildDate = arguments[10];
    var category = arguments[11];
    var generator = arguments[12];
    var docs = arguments[13];
    var cloud = arguments[14];
    var ttl = arguments[15];
    var image = arguments[16];
    var skipHours = arguments.length <= 17 || arguments[17] === undefined ? new Set([]) : arguments[17];
    var skipDays = arguments.length <= 18 || arguments[18] === undefined ? new Set([]) : arguments[18];

    _classCallCheck(this, RSSFeed);

    this.title = title;
    this.link = link;
    this.description = description;
    this.items = items;
    this.version = version;
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

    if (!title || !link || !description) {
      throw _RSSCore.missingRequiredDataError.call(this);
    }
  }

  _createClass(RSSFeed, null, [{
    key: 'fromObject',
    // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

    // rating: any; // Not supported
    // textInput: obj; // Not supported
    value: function fromObject(data) {
      if (data) {
        return new RSSFeed(data.title, data.link, data.description, data.items, data.version, data.language, data.copyright, data.managingEditor, data.webMaster, data.pubDate, data.lastBuildDate, data.category, data.generator, data.docs, data.cloud, data.ttl, data.image, data.skipHours, data.skipDays);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
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
  function RSSImage(url, title, link, width, height, description) {
    _classCallCheck(this, RSSImage);

    this.url = url;
    this.title = title;
    this.link = link;
    this.width = width;
    this.height = height;
    this.description = description;

    if (!url || !title || !width) {
      throw _RSSCore.missingRequiredDataError.call(this);
    }
  }

  _createClass(RSSImage, null, [{
    key: 'fromObject',
    value: function fromObject(data) {
      if (data) {
        return new RSSImage(data.url, data.title, data.link, data.width, data.height, data.description);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
    }

    // Required
    // URL of image to render (GIF, JPEG or PNG)
    // URL of website

    // Optional
    // Max: 144, Default: 88
    // Max: 400, Default: 31

  }]);

  return RSSImage;
}();