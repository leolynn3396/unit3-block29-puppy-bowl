import { useState, useEffect } from 'react'
import { getPlayers } from './api';
import Player from './components/Player';
import { PlayerDetails } from './components/PlayerDetails';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [player, setPlayers] = useState({});
  const [filter, setFilter] = useState("")

  // async function getAllPlayers(){
  //   const playuers= await.getPlayers() 
  //.then means wait for the problem to resolve
  useEffect(() => {
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  function handlePlayerDelete(playerId) {
    deletePlayer(playerId).then(() => {
      setPlayers(players);
    });
  });
}
function handleSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);


  console.log(FormData);
  createPlayer(formData).then(() => {
    getPlayers
  }
}

return (
  <div onClick={() => setPlayer({})}>
    <h1>Puppy Bowl</h1>
    <PlayerDetails player={player} />
    <form onSubmit={handleSubmit}> </form>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" />
    <label htmlFor="breed">Breed:</label>
    <input type="text" name="breed" />
    <label htmlFor="status">Status:</label>
    <input type="text" name="status" />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     
        {players.map((player) => {
          return (
            <Player
              key={player.id}
          

        )
        })}
      </tbody>
    </table>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div>
)
}


export default App
