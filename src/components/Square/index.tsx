export default function Square({value, onSquareClick, isWinningSquare}: {value: number, onSquareClick: (i: number) => void, isWinningSquare: boolean}) {
  return (
    <button
      className={`square ${isWinningSquare ? ' bg-green-400' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}
