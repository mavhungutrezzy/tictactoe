import React, { useState } from "react";


import Board from './components/Board.js';
import History from './components/History.js';

import { calculateWinner } from './helpers';

import './styles/root.scss'

const App = () => {

	const [ history, setHistory ] = useState([ 

		{board: Array(9).fill(null), nextPlayer: true } 

		]);

	const [ currentMove, setCurrentMove ] = useState(0);
	const current = history[currentMove];
	// const [ nextPlayer, setNextPlayer ] = useState(false)

	const winner = calculateWinner(current.board);
	const message = winner ? `Winner is ${winner}` : `Next player is ${ current.nextPlayer ? 'X' : 'O'}` 
	
	const handleSquareClick = (position) => {

		if( current.board[position] || winner ) return;
		
		setHistory((previous) => {

			const last = previous[previous.length - 1];

			const newBoard = last.board.map((square, pos) => {
				if(pos ===position) {
					return last.nextPlayer ? 'X' : 'O';
				}
				return square;
			})

			return previous.concat({ board: newBoard, nextPlayer: !last.nextPlayer})

		})

		setCurrentMove(previous => previous + 1)
	};


	const moveTo = (move) => {
		setCurrentMove(move)
	}


    return (

        <div className="app">

            <h1> TIC TAC TOE </h1>
            <h2> { message } </h2>
            <Board board={ current.board } handleSquareClick={ handleSquareClick } />
            <History history={ history } moveTo={ moveTo } currentMove={ currentMove } />
        </div>
    );
}


export default App;
