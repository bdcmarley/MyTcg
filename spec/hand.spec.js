import Hand from '../src/models/hand';

describe("Hand constructor limit", function() {

  let decktest = new Hand({
    cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}],
    limit: 5
  });

  it("Constructor opérationnel", function() {
    expect(decktest).toEqual(jasmine.objectContaining({
      cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}]
    }));
  });

  it("Constructor Boards opérationnel", function() {
    expect(decktest.limit).toEqual(decktest.cards.length);
  });
});

describe("Hand constructor no limit", function() {

  let decktest = new Hand({
    cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}, {"face":"card-6"}, {"face":"card-7"}]
  });

  it("Constructor opérationnel", function() {
    expect(decktest).toEqual(jasmine.objectContaining({
      cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}, {"face":"card-6"}, {"face":"card-7"}]
    }));
  });

  it("Constructor default limit", function() {
    expect(decktest.limit).toEqual(7);
  })

  it("Constructor Boards opérationnel", function() {
    expect(decktest.limit).toEqual(decktest.cards.length);
  });
});


describe("Hand function", function() {

  let decktest = new Hand({
    cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}],
    limit: 5
  });

  let count = decktest.cards.length;
  let card = {"face":"card-9"};
  let rmcard = {"face":"card-3"};

  if(count < decktest.limit) {
    it("addCard true", function() {
      expect(true).toEqual(decktest.addCard(card));
    });

    it("addCard card", function() {
      expect(decktest.card).toContain(card)
    });

    it("addCard end", function() {
      expect(end(decktest.card)).toEqual(card);
    });
  } else {
    it("addCard false", function() {
      expect(false).toEqual(decktest.addCard(card));
    });
  }

  it("removeCard true", function() {
    expect(rmcard).toEqual(decktest.removeCard(3));
  });

  it("removeCard false", function() {
    let rmfalse = {"face":"card-666"}
    expect(false).toEqual(decktest.removeCard(666));
  });

  it("getAllCards cards", function() {
    expect(decktest.cards).toEqual(decktest.getAllCards());
  });

  it("getAllCards array", function() {
    expect(true).toEqual(Array.isArray(decktest.getAllCards()));
  });

  it("getCardsCount int", function() {
    expect(true).toEqual(Number.isInteger(decktest.getCardsCount()));
  });

  it("getCardsCount true", function() {
    let recount = decktest.cards.length;
    expect(recount).toEqual(decktest.getCardsCount());
  });

})
