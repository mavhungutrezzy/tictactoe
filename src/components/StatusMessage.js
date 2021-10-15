import React from 'react'


const StatusMessage = ({ winner, current }) => {

	const noMoveLeft = current.board.every((item) => item !== null)

	return (
		<div className="status-message">
			{winner && <>
				Winner is <span className={ winner === 'X' ? 'text-green' : 'text-orange' }> 
					{ winner } 
				</span>
			</> }
			{!winner && !noMoveLeft && 
				<> 
					Next player is <span className={current.nextPlayer === 'X' ? 'text-green' : 'text-orange'}> {current.nextPlayer ? 'X' : 'O'} </span> 
				</>
			}
			{!winner && noMoveLeft && 
				<>
					<span className="text-green"> x </span> and 
					<span className="text-orange"> O </span> tied

			 	</>
			}
		</div>
	);
}d


export default StatusMessage;