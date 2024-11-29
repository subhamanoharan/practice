interface SquareProps {
  value: string;
  onSquareClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isWinningSquare: boolean;
}
export default function Square({value, onSquareClick, isWinningSquare}: SquareProps) {
  return (
    <button
      className={`square ${isWinningSquare ? ' bg-green-400' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}
