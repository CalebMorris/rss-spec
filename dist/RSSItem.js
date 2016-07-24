'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RSSSource = exports.RSSGuid = exports.RSSCategory = exports.RSSEnclosure = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RSSCore = require('./RSSCore');

var _RSSCore2 = _interopRequireDefault(_RSSCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base RSS feed item specifications
 * Spec: http://cyber.law.harvard.edu/rss/rss.html#hrelementsOfLtitemgt
 * Validation Note: at least one of title or description must exist. All else optional.
 */
var RSSItem = function () {
  function RSSItem(title, description, link, author, category, comments, enclosure, guid, pubDate, source) {
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

    if (!title || !description) {
      throw _RSSCore.missingRequiredDataError.call(this);
    }
  }

  _createClass(RSSItem, null, [{
    key: 'fromObject',
    // url
    value: function fromObject(data) {
      if (data) {
        return new RSSItem(data.title, data.description, data.link, data.author, data.category, data.comments, data.enclosure, data.guid, data.pubDate, data.source);
      }

      throw _RSSCore.missingRequiredDataError.call(this, data);
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

    if (!url || !length || !type) {
      throw _RSSCore.missingRequiredDataError.call(this);
    }
  }

  _createClass(RSSEnclosure, null, [{
    key: 'fromObject',
    // mime-type
    value: function fromObject(data) {
      if (data) {
        return new RSSEnclosure(data.url, data.length, data.type);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
    } // URL
    // integer

  }]);

  return RSSEnclosure;
}();

var RSSCategory = exports.RSSCategory = function (_ContentChild) {
  _inherits(RSSCategory, _ContentChild);

  function RSSCategory(content) {
    var domain = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    _classCallCheck(this, RSSCategory);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RSSCategory).call(this, content));

    _this.domain = domain;
    return _this;
  }

  _createClass(RSSCategory, null, [{
    key: 'fromObject',
    // URL
    value: function fromObject(data) {
      if (data) {
        return new RSSCategory(data.content, data.domain);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
    }
  }]);

  return RSSCategory;
}(_RSSCore2.default);

var RSSGuid = exports.RSSGuid = function (_ContentChild2) {
  _inherits(RSSGuid, _ContentChild2);

  function RSSGuid(content, isPermaLink) {
    _classCallCheck(this, RSSGuid);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RSSGuid).call(this, content));

    _this2.isPermaLink = isPermaLink;
    return _this2;
  }

  _createClass(RSSGuid, null, [{
    key: 'fromObject',
    value: function fromObject(data) {
      if (data) {
        return new RSSGuid(data.content, data.isPermaLink);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
    }
  }]);

  return RSSGuid;
}(_RSSCore2.default);

var RSSSource = exports.RSSSource = function (_ContentChild3) {
  _inherits(RSSSource, _ContentChild3);

  function RSSSource(content, url) {
    _classCallCheck(this, RSSSource);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(RSSSource).call(this, content));

    _this3.url = url;

    if (!url) {
      throw _RSSCore.missingRequiredDataError.call(_this3);
    }
    return _this3;
  }

  _createClass(RSSSource, null, [{
    key: 'fromObject',
    value: function fromObject(data) {
      if (data) {
        return new RSSSource(data.content, data.url);
      }
      throw _RSSCore.missingRequiredDataError.call(this, data);
    }
  }]);

  return RSSSource;
}(_RSSCore2.default);