import './App.css'

import Message from "./components/Message";
import React, { useState, useEffect } from "react"; 
import axios from "axios";
let res
function App(){

  let [pokemons, setPokemons] = useState([]); 

  useEffect(() => {
    async function loadUrls(){
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    
      let map
      if(response["data"]){
        map=response["data"]["results"].map((pet)=>axios.get(pet["url"]))
      }
      console.log(map)
      const res = await axios.all(map);
      setPokemons(res);
    };
        
    loadUrls();
  }, [])

  
  console.log(pokemons,"ee")
  
  if(pokemons==undefined){
    console.log(urls,"bad")
    return Message("404(")
  }
  else{
    localStorage.setItem("pokemons",JSON.stringify(pokemons))
    return(
      <>
        {
          pokemons.map((pokemon) =>
            <>{Message(
              pokemon["data"]["name"],//name
              pokemon["data"]["sprites"]["front_default"],//url
              "",//info
              pokemon["data"]["id"])}</>
          )
        }
      </>
    )
  }
}


export default App
