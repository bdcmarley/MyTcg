"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jqueryBrowserify = _interopRequireDefault(require("jquery-browserify"));

var _eventManager = _interopRequireDefault(require("../eventManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Dom extends _eventManager.default {
  constructor(selector) {
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    super();
    this.$dom = (0, _jqueryBrowserify.default)(selector);
    this.parent = parent;

    if (parent) {
      var p = parent;

      while (p.parent !== null) {
        p = p.parent;
      }

      this.root = p;
    } else {
      this.root = this;
    }

    this.mState;
    this.side = "";
  }

  getSide() {
    if (this.side === "") {
      return this.parent.getSide();
    } else {
      return this.side;
    }
  }

  setState(state) {
    this.mState = state;
  }

  getState() {
    return this.mState;
  }

  setParent(parent) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  setDom(selector) {
    this.$dom = (0, _jqueryBrowserify.default)(selector);
  }

  getDom() {
    return this.$dom;
  }

}

var _default = Dom;
exports.default = _default;