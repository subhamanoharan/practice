'use client'
import {useState} from 'react'

import Board from '@/components/Board'

export default function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const noOfMoves = history.length
  const currentSquares = history[history.length - 1];
  const xIsNext = noOfMoves % 2 != 0

  function handlePlay(index: number) {
    setHistory([
      ...history,
      currentSquares.map((s, i) => i === index ? xIsNext? 'X' : 'O' : s)
    ])
  }

  function handleJumpToMove(index: number) {
    setHistory(history.filter((s, i) => i <= index))
  }

  const moves = history.map((squares, i) => {
    const desc = i === 0 ?
      'Go to Start' : `Go to Move ${i}`
    const isCurrentMove = i + 1 === noOfMoves
    return (
      <li key={i}>
        {isCurrentMove ?
          <p>  {`${(i+1)}. You are at move ${(i+1)}`}</p>
          :
          <button
          className="border border-black p-1"
          onClick={() => handleJumpToMove(i)}>
          {`${(i+1)}. ${desc}`}
          </button>
        }

      </li>
    )
  })

  return (
    <div className="m-2">
      <Board
        squares={currentSquares}
        xIsNext={xIsNext}
        onPlay={handlePlay}
      />
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
