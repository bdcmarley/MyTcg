"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dom = _interopRequireDefault(require("./dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CardController extends _dom.default {
  constructor(parent) {
    super('<div></div>', parent);
    this.$dom.append('<div></div>').find('div:first-child').addClass('card-front');
    this.$dom.append('<div></div>').find('div:last-child').addClass('card-back');
    this.$dom.addClass('card');
    this.$dom.hover(this.onOver.bind(this), this.onOut.bind(this));
    this.$dom.on("click", this.onClick.bind(this));
    this.$dom.appendTo(parent.getDom());
  }

  setState(state) {
    super.setState(state);
    this.$dom.find('div:first-child').addClass(state.face);
  }

  setParent(parent) {
    super.setParent(parent);
  }

  onOver() {
    if (this.$dom.hasClass('hand')) {
      var top = this.getSide() === "down" ? this.root.getDom().height() / 2 - 70 - 30 : -70 + 30;
      this.$dom.css('top', top);
    }
  }

  onOut() {
    if (this.$dom.hasClass('hand')) {
      var top = this.getSide() === "down" ? this.root.getDom().height() / 2 - 70 : -70;
      this.$dom.css('top', top);
    }
  }

  onClick() {
    this.parent.trigger('clickCard', this);
  }

}

exports.default = CardController;