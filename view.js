'use strict';

const level = {
    title: "2. 음수 곱하기 음수",
    deck: [[-5, 3], ['*'], [4, -6], ['=']],
    goal: {
        description: "20 이상의 수를 만드세요",
        check: x => x >= 20
    },
};

class View {
    constructor() {
        this.title = document.getElementById('title');
        this.objective = document.getElementById('objective');
        this.cards = document.getElementById('cards');
        this.equation = document.getElementById('equation');
    }

    loadLevel(level) {
        this.game = new Game(level.deck, level.goal);
        this.title.innerHTML = level.title;
        this.objective.innerHTML = level.goal.description;
        this.updateStep();
    }

    updateStep() {
        if (this.game.status === Running) {
            this.drawCards(this.game.field);
            this.equation.innerHTML = this.game.equation;
        } else if (this.game.status === Won) {
            this.equation.innerHTML = '이겼습니다!';
        } else if (this.game.status === Lost) {
            this.equation.innerHTML = '졌습니다!';
        }
    }

    selectCard(i) {
        this.game.chooseCard(i);
        this.updateStep();
    }

    drawCards(cards) {
        this.cards.innerHTML = "";
        cards.forEach((c, i) => {
            const flexbox = document.createElement('div');
            flexbox.className = "flexbox";
            const card = document.createElement('div');
            card.className = "card";
            card.innerHTML = c
            flexbox.appendChild(card);
            this.cards.appendChild(flexbox);
            const cardOnclick = this.selectCard.bind(this);
            card.onclick = function() {
                cardOnclick(i);
            }
        });
    }
}

const view = new View();
view.loadLevel(level);