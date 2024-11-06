// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 4. Determine if the user won or lost
// 5. If the user won, calculate the amount won
// 6. Play again or cash out


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

// object with keys mapped to different values, left side keys, right side values
const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
};

const SYMBOL_VAlUES={
    A:5,
    B:4,
    C:3,
    D:2
};




const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        }
        else {
            return depositAmount;
        }

    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines)

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines>3) {
            console.log("Invalid deposit amount, try again.");
        }
        else {
            return numberOfLines;
        }

    }
};

const getBet = (balance, numberOfLines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet)

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/numberOfLines) {
            console.log("Invalid bet, try again.");
        }
        else {
            return numberBet;
        }

    }

};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i<count;i++){
            symbols.push(symbol);
        }
    }
const reels = [];
    for (let i = 0; i< COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);


        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++ ){
        rows.push([]);
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i])
        }
    }


};



let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
spin();
console.log(spin())