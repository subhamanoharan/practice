import Square from '@/components/Square'

export default function Board({squares, xIsNext, onPlay}) {
  function handleClick(index: number) {
    if(squares[index] || calculateWinner(squares)) return;
    onPlay(index)
  }

  const winningLines = calculateWinner(squares) || []
  const winner = winningLines[0] && squares[winningLines[0]]
  const isDraw = !winner && isSquareFull(squares)
  const status = winner ? 'Winner: ' + winner :
    (isDraw ? 'Draw' : 'Next player: ' + (xIsNext ? 'X' : 'O'))

  return (
    <>
      <div className="status">{status}</div>
      <div className="w-36 grid grid-cols-3">
          {squares.map((s, i) => (
            <Square
              key={i}
              value={s}
              onSquareClick={() => handleClick(i)}
              isWinningSquare={winningLines.includes(i)}
            />
          ))}
      </div>
    </>
  )
}

function isSquareFull(squares: Array<string>) {
  return squares.every(i => i)
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}
