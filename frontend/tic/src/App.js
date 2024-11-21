
import React, { useEffect, useState } from 'react';
import './App.css';
import { addUser, getAllUsers } from './service/user-service';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);


  const[users, setUsers] = useState([]);

  const[userName , setUserName] = useState();

 

  useEffect(() => {
    getAllUsers().then((resp) => {
      setUsers(resp);  
    });
  }, []);  
  
  useEffect(() => {
    console.log(users); 
  }, [users]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return; // If the square is already filled or there's a winner
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const currentWinner = calculateWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const handleChange= (event)=>{
    setUserName(event.target.value);
  }


  const handleAddButton = () =>{
    addUser(userName).then((resp)=>console.log(resp))
  }

  return (
    <div className='container'>
      <div className="navbar">
        <h1 className="navbar-title">TIC TAC TOE</h1>
        <div className="username-form">
          <input
            type="text"
            placeholder="ADD User"
            className="username-input"
            onChange={(e)=> handleChange(e)}
          />
          <button className='add-button' onClick={handleAddButton}>Add</button>
        </div>
      </div>
      <div className="games">
        <div className="game">
          <div className="board">
            {board.map((_, index) => renderSquare(index))}
          </div>
          {winner && <div className="winner-message">{`Winner: ${winner}`}</div>}
          <button className="reset-button" onClick={handleReset}>Reset Game</button>
          <div className="status">{`Player Turn: ${isXNext ? 'X' : 'O'}`}</div>
        </div>

        <div className='info'>
          <form>
          <select id="user1" name="User1">
      {users.map((user) => (
        <option key={user} value={user}>
          {user}
        </option>
      ))}
    </select>
    <select id="user2" name="User2">
      {users.map((user) => (
        <option key={user} value={user}>
          {user}
        </option>
      ))}
      </select>
          </form>
          <div className='turn'>
            <h1>Turn : jarvis </h1>
          </div>
          
        </div>
      </div>
      <div className='foot'>
        <table className='tableok'>
          <tr>
            <th>Names</th>
            <th>Win</th>
            <th>lost</th>
            <th>draw</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </div>

  );
}

export default App;
