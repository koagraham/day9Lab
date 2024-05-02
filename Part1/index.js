console.log("HELLO WORLD WE MADE IT WOOO HOOOOOO")

let player = 'X'
const squares = document.querySelectorAll('.square')

function isBoardFull() {
for (const square of squares) {
        if (square.innerText === '') {
            return false;
        }
    }
    return true;
}

function checkVictory() {
    const lines = [
        // Horizontal lines
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical lines
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal lines
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const line of lines) {
        const [a, b, c] = line;
        const squareAText = squares[a].innerText;
        const squareBText = squares[b].innerText;
        const squareCText = squares[c].innerText;
        if (squareAText !== '' && squareAText === squareBText && squareAText === squareCText) {
          return squareAText;
        }
      }
      return undefined;
}

function play(evt) {
    evt.target.innerText = player
    player === 'X' ? player = 'O' : player = 'X'
    const span = document.querySelector('#current-player')
    span.innerText = player
    const winner = checkVictory();
    if (winner) {
      alert(`${winner} is the winner!`);
    } else if (isBoardFull()) {
      alert('Game is a tie!');
    }
}

for (const square of squares) {
    square.addEventListener('click', play)
}