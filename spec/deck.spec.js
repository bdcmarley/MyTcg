import Deck from '../src/models/deck';

describe("Deck constructor", function() {

  let decktest = new Deck({cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}]});

  it("Constructor opérationnel", function() {
    expect(decktest).toEqual(jasmine.objectContaining({
      cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}]
    }));
  });
});

describe("Deck function", function() {

  // Boucle to change value and do all tests
  for (var i = 0; i < 2; i++) {
    // Necessary variale
    let decktest = new Deck({cards: []});
    let count = decktest.cards.length;

    if(i == 0) {
      decktest = new Deck({cards: []});
      count = decktest.cards.length;
    } else {
      decktest = new Deck({cards: [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-3"}, {"face":"card-4"}, {"face":"card-5"}]});
      count = decktest.cards.length;
    }

    // Shuffle section
    if(count >= 2) {

      it("Shuffle contain", function() {
       expect(decktest.cards).toEqual(jasmine.arrayContaining(decktest.shuffle()));
     });

     it("Shuffle ok", function() {
       let decktest2 = decktest.shuffle();
       expect(decktest.cards).not.toEqual(decktest2.cards);
     });
   } else {
     it('Shuffle false', function() {
       expect(false).toEqual(decktest.shuffle())
     })
     it('Shuffle count', function() {
       expect(2).toBeGreaterThan(decktest.getCardsCount())
     });
   }

   // Draw section
   if(count > 0) {

     it("Draw card", function() {
       let cardtest = decktest.cards[0];
       let decktestdraw = decktest;
       decktestdraw = decktestdraw.draw();
       expect(cardtest).toEqual(decktestdraw);
     });

     it("Draw board", function() {
       let decktest1 = decktest;
       let decktest2 = decktest;
       decktest1.cards.shift();
       decktest2.draw();
       expect(decktest1.cards.length).toEqual(decktest2.cards.length);
     });
   } else {
     it("Draw false", function() {
       expect(false).toEqual(decktest.draw());
     });

     it("Draw zero", function() {
       expect(0).toEqual(decktest.cards.length);
     })
   }

   // getCountCards section
   it("getCountCards", function() {
     let recount = decktest.cards.length;
     expect(recount).toEqual(decktest.getCardsCount());
   })
 }

})
