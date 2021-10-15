import React from 'react'


const StatusMessage = ({ winner, current }) => {

	const noMoveLeft = current.board.every((item) => item !== null)

	return (
		<h2>
			{winner && `Winner is ${winner}`}
			{!winner && !noMoveLeft && `Next player is ${current.nextPlayer ? 'X' : 'O'}`}
			{!winner && noMoveLeft && 'X and O tied'}
		</h2>
	);
}


export default StatusMessage;