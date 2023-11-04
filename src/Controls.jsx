import React from 'react'
export default function Controls(props) {
  return (
    <div className="controls">
      <div className="power">
        Power
      
    <label className="switch" htmlFor='toggle-switch1'>
      <input type="checkbox" checked={props.power} onClick={props.turnPower} id='toggle-switch1'/>
      <span className="slider"></span>
    </label>
    </div>
    <p id='display'>{props.power ? props.selectedPad:""}</p>
    <div className="volume-slider">
    <input max="1" min="0" step="0.01" type="range" value={props.volume} onChange={props.volumeChange}>
    </input>
    </div>
<div className="bank">Bank
    <label className="switch bank" htmlFor='toggle-switch2'>
      <input type="checkbox" checked={props.bank} onClick={props.turnBank} id='toggle-switch2'disabled={!props.power}/>
      <span className="slider"></span>
    </label>
    </div>
  </div>
  )
}

