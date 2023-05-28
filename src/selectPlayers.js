import React from 'react'
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import './App.css';
import "./selectPlayers.css";
import amy from './icons/amy.png'
import ben from './icons/ben.png'
import mike from './icons/mike.png'
import chris from './icons/chris.png'
import add from './icons/add.png'

export default function SelectPlayers() {
  return (
    <div className="App">
      <h1 className="title" >SELECT PLAYERS</h1>
        <div id="grid">
            <div id="areaChris"> <img src={chris} height="150" /> </div>
            <div id="areaBen"> <img src={ben} height="150" /> <h1>hello</h1><h1>hello</h1></div>
            <div id="areaAmy"> <img src={amy} height="150" /> </div>
            <div id="areaMike"> <img src={mike} height="150" /> </div>
            <div id="areaNew"><img src={add} height="150" /></div>
        </div>
        <h1 className="settings" >GAME SETTINGS</h1>
    </div>
  )
}