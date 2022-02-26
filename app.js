const goal = {
    desc: "20 이상의 수를 만드세요",
    check: x => x >= 20
};

const deck = [[-5, 3], ['x'], [4, -6]]

class Game {
    constructor(deck) {
        this.deck = deck;
        this.round_num = len(deck);
        this.round_idx = 0;
        this.status = "running";
    }

    getField() {
        if (this.round_idx < this.round_num) {
            return this.deck[this.round_idx];
        } else {
            return null;
        }
    }

    chooseCard(card_idx) {
        card = this.deck[this.round_idx][card_idx];
    }
}

console.log(goal.check(30));