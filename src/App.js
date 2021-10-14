import React from "react";
import Board from './components/Board.js';


import './styles/root.scss'

const App = () => {
    return (

        <div className="app">
            <p> TIC TAC TOE </p>
            <Board />
        </div>
    );
}


export default App;
