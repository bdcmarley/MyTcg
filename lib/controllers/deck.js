"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _factory = _interopRequireDefault(require("../models/factory"));

var _dom = _interopRequireDefault(require("./dom"));

var _card = _interopRequireDefault(require("./card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeckController extends _dom.default {
  constructor(selector, parent) {
    super(selector, parent);
    this.$dom.on('click', this.onClick.bind(this));
    this.parent.on('drawCard', this.onDrawCard.bind(this));
    this.parent.on('emptyDeck', this.onEmpty.bind(this));
  }

  onClick() {
    this.parent.trigger('clickDeck', this);
  }

  onDrawCard(cardState) {
    var self = this,
        cardCtrl,
        card;

    if (cardState !== undefined) {
      cardCtrl = new _card.default(self.parent), cardCtrl.setState(cardState);
      card = cardCtrl.getDom();
      card.offset(self.$dom.offset());
      card.on('transitionend', function te() {
        card.off('transitionend', te);
        self.parent.trigger('newCard', cardCtrl);
      });
      setTimeout(function () {
        cardCtrl.setParent(this);
        card.addClass('draw');
        card.offset({
          "left": self.parent.getDom().width() / 2 - card.width() / 2,
          "top": card.offset().top + (self.parent.side === "up" ? 1 : -1) * 100
        });
      }, 10);

      if (self.getSide() === 'down') {
        setTimeout(function () {
          card.addClass('flip');
          card.offset({
            "left": self.parent.getDom().width() / 2 - card.width() / 2,
            "top": card.offset().top + (self.parent.side === "up" ? 1 : -1) * 100
          });
        }, 200);
      }
    }
  }

  onEmpty() {
    this.$dom.addClass('empty');
  }

}

exports.default = DeckController;