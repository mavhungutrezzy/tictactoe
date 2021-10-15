import React, { useState } from "react";
import Board from './components/Board.js';
import { calculateWinner } from './helpers';

import './styles/root.scss'

const App = () => {

	const [ board, setBoard ] = useState(Array(9).fill(null))
	const [ nextPlayer, setNextPlayer ] = useState(false)

	const winner = calculateWinner(board);

	const message = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer ? 'X' : 'O'}` 

	const handleSquareClick = (position) => {

		if( board[position] || winner ) return;
		
		setBoard((previous) => {

			return previous.map((square, pos) => {
				if(pos ===position) {
					return nextPlayer ? 'X' : 'O';
				}

				return square;
			})
			
		})

		setNextPlayer((previous) => !previous);

	};


    return (

        <div className="app">
            <h1> TIC TAC TOE </h1>
            <h2> { message } </h2>
            <Board board={ board } handleSquareClick={ handleSquareClick } />
        </div>
    );
}


export default App;
