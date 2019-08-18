"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _factory = _interopRequireDefault(require("./factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Player {
  constructor(config) {
    this.type = config.type;
    this.deck = _factory.default.get('deck');
  }

  draw() {
    return this.deck.draw();
  }

}

exports.default = Player;