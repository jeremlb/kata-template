/*
- A Game could have less than two players - make sure it always has at least two. 🟢
    - Use a compiled language or a static type checker like flowtype 
- A Game could have 7 players, make it have at most 6. 🟢
    - or slightly easier allow for 7 players or more
- A player that get’s into prison always stays there
    - Other than just fixing the bug, try to understand what’s wrong with the design and fix the root cause
- The deck could run out of questions
    - Make sure that can’t happen (a deck with 1 billion questions is cheating :)
- Introducing new categories of questions seems like tricky business.
    - Could you make sure all places have the “right” question and that the distribution is always correct?
- Similarly changing the board size greatly affects the questions distribution
*/



const { Game, MinPlayerException } = require('../src/game');
const { gameRunner } = require('../src/game-runner');


const _ = require('lodash');
const { getRandom } = require('./rands');

describe("The game", function () {
    xit("should work ;-)", function () {

        const loggedLines = [];
        const oldLog = console.log;
        console.log = function (arg: any) {
            loggedLines.push(arg);
        }

        _.range(15).forEach(() => {
            gameRunner(getRandom)
        });

        console.log = oldLog;

        this.verifyAsJSON(loggedLines)

    });

    it('when one player should throw an error', () => {
        const game = new Game();

        game.add("Miche");

        expect(() => game.roll(3)).toThrow(new Error('Minimum 2 players required'));
    });

    it('when 2 players should roll', () => {
        const game = new Game();

        game.add("Miche");
        game.add("Udon");

        expect(() => game.roll(3)).not.toThrow(new Error('Minimum 2 players required'));
    });

    it("the max number of players is 6", () => {
        const game = new Game();

        game.add("Miche");
        game.add("Udon");
        game.add("Miche");
        game.add("Udon");
        game.add("Miche");
        game.add("Udon");

        expect(() => game.add("Miche")).toThrow(new Error('Maximum 6 players'));
    });

    it('should not let player out of prison', () => {
        const game = new Game();

        game.add("Miche");
        game.add("Udon");

        game.roll(2);
        game.wrongAnswer(); // prison
        game.roll(2);
        game.wasCorrectlyAnswered();

        expect(() => game.roll(2)).toThrow(new Error('Player in prison'));
    })


});
