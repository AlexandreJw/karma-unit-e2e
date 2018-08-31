'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = exports.twoWaryLikeNum = exports.subLikeNum = exports.addLikeNum = exports.initial = exports.Thumb = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pariseButton = require('./pariseButton.js');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumb = function (_PraiseButton) {
  _inherits(Thumb, _PraiseButton);

  function Thumb(num) {
    _classCallCheck(this, Thumb);

    return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num));
  }

  _createClass(Thumb, [{
    key: 'map',
    value: function map(f) {
      return Thumb.of(f());
    }
  }, {
    key: 'addStyle',
    value: function addStyle(num) {
      this.addClass('active').find('span').html(num);
    }
  }, {
    key: 'removeStyle',
    value: function removeStyle(num) {
      this.removeClass('active').find('span').html(num);
    }
  }], [{
    key: 'of',
    value: function of(num) {
      return new Thumb(num);
    }
  }]);

  return Thumb;
}(_pariseButton.PraiseButton);

var initial = function initial(num) {
  var thumb = Thumb.of(num);
  this._thumb = thumb;
  return this;
};
var addLikeNum = function addLikeNum() {
  this._thumb.addStyle && this._thumb.addStyle.call(this, this._thumb.addLikeNum());
  return this;
};
var subLikeNum = function subLikeNum() {
  this._thumb.removeStyle && this._thumb.removeStyle.call(this, this._thumb.subLikeNum());
  return this;
};
var twoWaryLikeNum = function twoWaryLikeNum(flag) {
  flag ? addLikeNum.call(this) : subLikeNum.call(this);
  return this;
};
var $ = _jquery2.default;
exports.Thumb = Thumb;
exports.initial = initial;
exports.addLikeNum = addLikeNum;
exports.subLikeNum = subLikeNum;
exports.twoWaryLikeNum = twoWaryLikeNum;
exports.$ = $;
//# sourceMappingURL=index.js.map