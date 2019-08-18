export default class Deck {
    constructor (config) {
      this.cards = config.cards;
    }

    shuffle () {
      if(this.getCardsCount() >= 2) {
        var j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
        return this.cards;
      } else {
        return false;
      }
    }

    draw () {
      if(this.cards.length > 0) {
        this.first = this.cards.shift();
        return this.first;
      } else {
        return false;
      }
    }

    getCardsCount () {
      return this.cards.length;
    }
}
