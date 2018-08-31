"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = exports.PraiseButton = function () {
  function PraiseButton(num) {
    _classCallCheck(this, PraiseButton);

    this.num = num;
  }

  _createClass(PraiseButton, [{
    key: "addLikeNum",
    value: function addLikeNum() {
      this.num += 1;
      return this.num;
    }
  }, {
    key: "subLikeNum",
    value: function subLikeNum() {
      return this.num -= 1;
    }
  }]);

  return PraiseButton;
}();
//# sourceMappingURL=pariseButton.js.map