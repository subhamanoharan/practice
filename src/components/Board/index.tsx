'use client'

import {useState} from 'react'

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
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={i => handleClick(0)}
          isWinningSquare={winningLines.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={i => handleClick(1)}
          isWinningSquare={winningLines.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={i => handleClick(2)}
          isWinningSquare={winningLines.includes(2)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={i => handleClick(3)}
          isWinningSquare={winningLines.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={i => handleClick(4)}
          isWinningSquare={winningLines.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={i => handleClick(5)}
          isWinningSquare={winningLines.includes(5)}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={i => handleClick(6)}
          isWinningSquare={winningLines.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={i => handleClick(7)}
          isWinningSquare={winningLines.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={i => handleClick(8)}
          isWinningSquare={winningLines.includes(8)}
        />
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
