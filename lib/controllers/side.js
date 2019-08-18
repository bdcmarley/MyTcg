"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = _interopRequireDefault(require("./dom"));

var _deck = _interopRequireDefault(require("./deck"));

var _hand = _interopRequireDefault(require("./hand"));

var _board = _interopRequireDefault(require("./board"));

var _cemetary = _interopRequireDefault(require("./cemetary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SideController extends _dom.default {
  constructor(selector, parent) {
    super(selector, parent);
    this.side = this.$dom.offset().top === 0 ? "up" : "down";
    this.mDeck = new _deck.default(selector + ' > .deck', this);
    this.mHand = new _hand.default(selector + ' > .hand-area', this);
    this.mBoard = new _board.default(selector + ' > .board', this);
    this.mCemetary = new _cemetary.default(selector + ' > .cemetary', this);
    this.on('clickDeck', this.fwdToParent.bind(this, 'clickDeck'));
    this.on('clickHand', this.fwdToParent.bind(this, 'clickHand'));
    this.on('clickBoard', this.fwdToParent.bind(this, 'clickBoard'));
    this.on('targetHand', this.fwdToParent.bind(this, 'targetHand'));
    this.on('clickEndTurn', this.fwdToParent.bind(this, 'clickEndTurn'));
    this.parent.on('drawCard', this.fwdToChild.bind(this, 'drawCard'));
    this.parent.on('playCard', this.fwdToChild.bind(this, 'playCard'));
    this.parent.on('activateCard', this.fwdToChild.bind(this, 'activateCard'));
    this.parent.on('targetCard', this.fwdToChild.bind(this, 'targetCard', 'attackCard'));
    this.parent.on('discardCard', this.fwdToChild.bind(this, 'activateCard'));
    this.parent.on('attackHand', this.fwdToChild.bind(this, false, 'attackHand'));

    if (this.side === 'down') {
      this.parent.on('endTurn', this.fwdToChild.bind(this, 'endTurn'));
      this.parent.on('yourTurn', this.fwdToChild.bind(this, 'yourTurn'));
    }
  }

  fwdToParent(event, p) {
    this.parent.trigger(event, p);
  }

  fwdToChild(sameSide, oppositeSide, payload) {
    payload = payload || oppositeSide;

    if (payload.getSide() === this.getSide()) {
      if (sameSide !== false) {
        this.trigger(sameSide, payload);
      }
    } else {
      if (typeof oppositeSide === "string") {
        this.trigger(oppositeSide, payload);
      }
    }
  }

}

exports.default = SideController;