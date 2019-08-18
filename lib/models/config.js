"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _game = _interopRequireDefault(require("./game"));

var _deck = _interopRequireDefault(require("./deck"));

var _player = _interopRequireDefault(require("./player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  "game": {
    "class": _game.default,
    "param": '{}'
  },
  "deck": {
    "class": _deck.default,
    "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
  },
  "player": {
    "class": _player.default,
    "param": '{}'
  }
};
exports.default = _default;