import React from 'react';
import players from "../players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', gap:'1rem'}}>
        {players.map((player)=>{
            return(
                <Player key={player.id} player={player}/>
            )
        })}
    </div>
  )
}

export default PlayersList