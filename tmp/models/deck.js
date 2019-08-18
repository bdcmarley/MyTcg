"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
  function Deck(config) {
    _classCallCheck(this, Deck);

    this.cards = config.cards;
  }

  _createClass(Deck, [{
    key: "shuffle",
    value: function shuffle() {
      var j, x, i;
      for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
      }
      return this.cards;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.first = this.cards.shift();
      return this.first;
    }
  }, {
    key: "getCardsCount",
    value: function getCardsCount() {
      return this.cards.length;
    }
  }]);

  return Deck;
}();

exports.default = Deck;