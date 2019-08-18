"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _arena = _interopRequireDefault(require("./controllers/arena"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class main {
  constructor() {
    new _arena.default();
  }

}

var _default = new main();

exports.default = _default;