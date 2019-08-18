"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _factory = _interopRequireDefault(require("../models/factory"));

var _dom = _interopRequireDefault(require("./dom"));

var _side = _interopRequireDefault(require("./side"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secondClick = false;

class ArenaController extends _dom.default {
  constructor() {
    super('body');
    this.up = new _side.default(".side.opponent", this);
    this.down = new _side.default(".side.player", this);
    this.game = _factory.default.get('game', {
      'up': _factory.default.get('player', {
        type: 'computer'
      }),
      'down': _factory.default.get('player', {
        type: 'human'
      })
    });
    this.on('clickDeck', this.onClickDeck.bind(this));
    this.on('clickHand', this.onClickHand.bind(this));
    this.on('clickBoard', this.onClickBoard.bind(this));
    this.on('targetHand', this.onTargetHand.bind(this));
    this.on('clickEndTurn', this.onClickEndTurn.bind(this));
  }

  onClickDeck(deck) {
    var s = deck.getSide();
    var self = this;
    var cardState = this.game[s].draw();

    cardState.getSide = function () {
      return s;
    };

    self.trigger('drawCard', cardState);

    if (self.game[s].deck.getCardsCount() === 0) {
      self.trigger('emptyDeck');
    }
  }

  onClickHand(card) {
    // api call then
    this.trigger('playCard', card);
  }

  onClickBoard(card) {
    var self = this;

    if (!secondClick) {
      this.trigger('activateCard', card);
      secondClick = true;
    } else {
      this.trigger('targetCard', card);
      setTimeout(function () {
        self.trigger('discardCard', card);
      }, 4000);
      secondClick = false;
    }
  }

  onTargetHand(hand) {
    if (secondClick) {
      this.trigger('attackHand', hand);
    }
  }

  onClickEndTurn() {
    var self = this;
    this.trigger('endTurn', {
      getSide: () => {
        return 'down';
      }
    });
    console.log('end turn');
    setTimeout(function () {
      self.trigger('yourTurn', {
        getSide: () => {
          return 'down';
        }
      });
      console.log('your turn');
    }, 5000);
  }

}

exports.default = ArenaController;