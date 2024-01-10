import React, { useState } from 'react'
import Square from '../square/Square'
import './board.css'



const Board = () => {
    // const [value, setValue] = useState(null);
    const [isNext, setIsNext] = useState(false);
    const [square, setSquare] = useState(Array(0).fill(null))

    const handleClick = (i) => {
        if (square[i]) {
            return;
        }
        const nextSquares = square.slice();
        if (isNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquare(nextSquares);
        setIsNext(!isNext);
    }

    const winner = calculateWinner(square);
    let status;
    if (winner) {
        status = 'Winner is : ' + winner;
    } else {
        status = 'Next turn : ' + (isNext ? 'X' : 'O');
    }


    function calculateWinner(square) {
        const winnerArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [0, 4, 8],
            [2, 5, 8],
            [2, 4, 6],
            [1, 4, 7]
        ];

        for (let i = 0; i < winnerArray.length; i++) {
            const [a, b, c] = winnerArray[i];
            if (square[a]  === square[b] && square[a] === square[c]) {
                return square[a];
            }

        }
        return null;

    }


    return (
        <>

            <h2 className="status">{status}</h2>
           
            <div className="row">
                <Square value={square[0]} onSquareClick={() => handleClick(0)} />
                <Square value={square[1]} onSquareClick={() => handleClick(1)} />
                <Square value={square[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={square[3]} onSquareClick={() => handleClick(3)} />
                <Square value={square[4]} onSquareClick={() => handleClick(4)} />
                <Square value={square[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={square[6]} onSquareClick={() => handleClick(6)} />
                <Square value={square[7]} onSquareClick={() => handleClick(7)} />
                <Square value={square[8]} onSquareClick={() => handleClick(8)} />
          </div>

        </>
    )
}

export default Board
