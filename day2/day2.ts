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
        case "X":
            return Move.Rock;
        case "Y":
            return Move.Paper;
        case "Z":
            return Move.Scissors;
        default:
            throw new Error("Invalid move");
    }
};

const getOutcome = (player1: Move, player2: Move) => {
    if (player1 === player2) {
        return Outcome.Draw;
    }
    if (player1 === Move.Rock && player2 === Move.Scissors) {
        return Outcome.Win;
    }
    if (player1 === Move.Paper && player2 === Move.Rock) {
        return Outcome.Win;
    }
    if (player1 === Move.Scissors && player2 === Move.Paper) {
        return Outcome.Win;
    }
    return Outcome.Loss;
};
let totalScore = 0;
fs.readFile("input.txt", "utf-8", (_, data) => {
    const lines = data.split("\n");
    lines.forEach((input) => {
        const [elf, me] = input.split(" ");
        const [elfMove, myMove] = [elf, me].map(convertToMove);

        const outcome = getOutcome(myMove, elfMove);
        totalScore += myMove + outcome;
    });
    console.log(totalScore);
});
