"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = _interopRequireDefault(require("./dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CemeteryController extends _dom.default {
  constructor(selector, parent) {
    super(selector, parent);
    this.parent.on('discardCard', this.onDiscardCard.bind(this));
  }

  onDiscardCard(card) {
    card.getDom().offset(this.$dom.offset());
    card.setParent(this);
    card.getDom().removeClass('flip');
  }

}

exports.default = CemeteryController;