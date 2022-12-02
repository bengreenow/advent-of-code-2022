import fs from "fs";

enum Move {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}

enum Outcome {
    Loss = 0,
    Draw = 3,
    Win = 6,
}

const convertToMove = (move: string): Move => {
    switch (move) {
        case "A":
            return Move.Rock;
        case "B":
            return Move.Paper;
        case "C":
            return Move.Scissors;
        default:
            throw new Error("Invalid move");
    }
};

const convertToOutcome = (outcome: string): Outcome => {
    switch (outcome) {
        case "X":
            return Outcome.Loss;
        case "Y":
            return Outcome.Draw;
        case "Z":
            return Outcome.Win;
        default:
            throw new Error("Invalid outcome");
    }
};

const getWinningMove = (move: Move) => {
    switch (move) {
        case Move.Rock:
            return Move.Paper;
        case Move.Paper:
            return Move.Scissors;
        case Move.Scissors:
            return Move.Rock;
        default:
            throw new Error("Invalid move");
    }
};

const getLosingMove = (move: Move) => {
    switch (move) {
        case Move.Rock:
            return Move.Scissors;
        case Move.Paper:
            return Move.Rock;
        case Move.Scissors:
            return Move.Paper;
        default:
            throw new Error("Invalid move");
    }
};

const getMyMove = (move: Move, outcome: Outcome) => {
    if (outcome === Outcome.Draw) {
        return move;
    }
    if (outcome === Outcome.Win) {
        return getWinningMove(move);
    }
    return getLosingMove(move);
};

let totalScore = 0;
fs.readFile("input.txt", "utf-8", (_, data) => {
    const lines = data.split("\n");
    lines.forEach((input) => {
        const [elf, outcome] = input.split(" ");
        const elfMove = convertToMove(elf);
        const desiredOutcome = convertToOutcome(outcome);

        const myMove = getMyMove(elfMove, desiredOutcome);
        totalScore += desiredOutcome + myMove;
    });
    console.log(totalScore);
});
