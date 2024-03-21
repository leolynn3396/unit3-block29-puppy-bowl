/*
Player List - 
User can see a list of each player competing in the bowl

Details- 
The user can click a details button (or something similar) on each puppy that will lead them to another page view with specific details on that puppy, such as owner and team name.

Search Bar- 
Users can search for a specific player in a search bar and see a new list of players with names matching the text in the search bar.

Create Player Form - 
Somewhere in the application, there is a form to create a new player and it gets added to the all players list without refreshing the page
*/

import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import Navbar from "./components/Navbar";

function App() {

  return ( 
  //Nav component responsible for rendering navigation links
  //The first <Route> has a path of "/", which means it matches the root URL. It renders the AllPlayers component.
  // The second <Route> has a dynamic path "/:id", where :id represents a parameter in the URL. It renders the SinglePlayer component.

    <div className="App">
      <h1>Puppy Bowl</h1> 
      {/* renders Navbar component inside className App */}
      <Navbar />  
      <Routes> 
        {/*    { // Individual Routes go here }     */}
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} /> 

        {/* This <Route> component defines a dynamic route with a parameter id. When the URL matches "/someId", it renders the <SinglePlayer /> component. Here, someId can be any value, as it acts as a placeholder for the id parameter. */}
      </Routes>
    </div>
  )
}

export default App
