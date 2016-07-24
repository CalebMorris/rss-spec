'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.missingRequiredDataError = missingRequiredDataError;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function missingRequiredDataError(content) {
  return new Error('Missing required data to create a ' + this.contructor.name + ':[' + JSON.stringify(content || this) + ']');
}

var ContentChild = function ContentChild(content) {
  _classCallCheck(this, ContentChild);

  this.content = content;

  if (typeof content === 'undefined') {
    throw missingRequiredDataError.call(this);
  }
};

exports.default = ContentChild;