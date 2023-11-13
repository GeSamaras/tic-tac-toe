// setting up all the object modules and factories for the game
// need players, gameboard, display, and game logic
Gameboard();

function Gameboard() {
    //this board array will draw and handle the gameboard
    const board = [];
    console.log('gameboard created');
    const rows = 3;
    const columns = 3;
    // creating a 3x3 2d array to represent the gameboard
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            document.createElement('<div class="cell" data-cell></div>');
            board[i][j] = '';// creating empty spaces for the rows and columns
            console.log(board.values)
        }
    }
    // method that will get the entire board for the UI to render
    const getBoard = () => board;

    // need a function that will listen to the player's
    // choice, and then draw it to the correct row and column
    const drawSymbols = (userPlayer, row, column) => {
        const availableSpace = board.filter((row, column) => board[row][column] === '');
        if (!availableSpace) return;      
        board[row][column] = player.getSymbol(); // create a getSymbol method for the player later
        // function that will handle click only once
        board.addEventListener('click', handleClick, { once: true })
    }

    // printing the board to the console
    const printBoard = () => {
        const boardWithSymbols = board.map(row => row.map(column => column || ' '));
        console.log("board with symbols");

    }
    return { getBoard, drawSymbols, printBoard };
}



const userPlayer = {
}

const computerPlayer = {

}

const gameEvents = (() => {
    // checking whose turn it is
    const cell = e.target;
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

    function swapTurns() {
        circleTurn = !circleTurn
    }
    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }
})();