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



// some example of module pattern

// private function to store global variables and cache DOM elements
(function() {
    let players = {
        player1: ['X', token = 1],
        player2: ['O', token = 2],
        init: function() {
            this.cacheDOM();
        },
        cacheDOM: function() {
            this.$el = $('#playersModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#player-template').html();
        },

        // a method to add and delete players to the game
        bindEvents: function() {
            // this method will make so addPlayer will always run in the context of the players object
            this.$button.on('click', this.addPlayer.bind(this)); // bind the this keyword to the addPlayer function
            
            this.$ul.delegate('i.del', 'click', this.deletePlayer.bind(this));
        },

        // this method will take the current state of whole function
        // and render it to the html DOM file
        render: function() {
            let data = {
                players: this.player1,
                players: this.player2
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        addPlayer: function() {
            // adding players to the array
            this.player1.push(this.$input.val());
            this.render();
            this.$input.val('');
        },
        deletePlayer: function(event) {
            let $remove = $(event.target).closest('li');
            let i = this.$ul.find('li').index($remove);

            this.player1.splice(i, 1);
            this.render();
        }
    };
    players.init();

})(); // the function is called immediately with the () at the end