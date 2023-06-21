let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget())

const compareGuesses = (human, computer, target) => {
    const humanDiff = Math.abs(human - target);
    const computerDiff = Math.abs(computer - target);
    if (humanDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
};
//return humanDiff <= computerDiff shorthand for the If statement
console.log(compareGuesses())

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};