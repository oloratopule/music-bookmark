import React, { useState } from "react";

function DisplayList (props){
  function handleDelete (song){
    props.Delete(song)
  }
  return (
    <div className="container">
      <ul className="list-group w-75 mt-3"> 

      {props.data.map(item=>(
        <div className="col-sm-mt-4 mb-4">
        <div className="card">
          <div className="card-body">
            <li className="list-group-item">
              <h4  key={item.song}>Song: {item.song}</h4>
              <h4  key={item.artiist}>Artist:{item.artist}</h4>
              <h4  key={item.album}>Album: {item.album}</h4>
              <h4  key={item.year}>Year Released:{item.year}</h4>
              <h4  key={item.link}>Link:{item.link}</h4>
              <button>Play</button>
              <button
              onClick = {() => handleDelete (item.song)}
              type="button"
              className="button ml-10">
                Delete
                </button>
          </li>
          </div>
        </div>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default DisplayList ;