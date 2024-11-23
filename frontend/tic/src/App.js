
import React, { useEffect, useState } from 'react';
import './App.css';
import { addUser, getAllUsers, getUserDetail } from './service/user-service';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);


  const[users, setUsers] = useState([]);

  const[userName , setUserName] = useState();

  const[userDetail1, setUserDetail1] = useState({});
 
  const[userDetail2 , setUserDetail2] = useState({});

  useEffect(() => {
    getAllUsers().then((resp) => {
      setUsers(resp);  
    });
  }, []);  
  
  useEffect(() => {
    console.log(userDetail1);
  }, [userDetail1]);

  useEffect(() => {
    console.log(userDetail2);
  }, [userDetail2]);

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

  const handleSelect1=(event) =>{
    getUserDetail(event.target.value).then((resp)=>{
      setUserDetail1(resp);
    })
  }

  const handleSelect2=(event) =>{
    getUserDetail(event.target.value).then((resp)=>{
      setUserDetail2(resp);
    })
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
          <select id="user1" name="User1" onChange={(e)=>handleSelect1(e)}>
          <option > select player</option>
      {users.map((user) => (
        <option key={user} value={user}>
          {user}
        </option>
      ))}
    </select>
    <select id="user2" name="User2" onChange={(e)=>handleSelect2(e)}>
    <option > select player</option>
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
        <td>{userDetail1?.name || 'Player 1'}</td>
        <td>{userDetail1?.winCount || 0}</td>
        <td>{userDetail1?.lossCount || 0}</td>
        <td>{userDetail1?.drawCount || 0}</td>
      </tr>
      <tr>
        <td>{userDetail2?.name || 'Player 2'}</td>
        <td>{userDetail2?.winCount || 0}</td>
        <td>{userDetail2?.lossCount || 0}</td>
        <td>{userDetail2?.drawCount || 0}</td>
      </tr>
        </table>
      </div>
    </div>

  );
}

export default App;
