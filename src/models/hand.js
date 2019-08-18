export default class Hand {
    constructor (config) {
      this.cards = config.cards;
      if(config.limit) {
        this.limit = config.limit;
      } else {
        this.limit = 7;
      }
    }

    addCard(card) {
      if(this.cards.length < this.limit) {
        this.cards.push(card);
        return true;
      } else {
        return false;
      }
    }

    removeCard(index) {
      let value = this.cards[index];
      if(this.cards.length > 0 && value != null) {
        let card = this.cards.splice(index - 1, 1);
        return card[0];
      } else {
        return false;
      }
    }

    getAllCards() {
      return this.cards;
    }

    getCardsCount() {
      return this.cards.length;
    }

  }
