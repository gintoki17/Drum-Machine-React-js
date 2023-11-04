import React from 'react'
import "./styles.css"
import Pads from './Pads'
import Controls from './controls'
export default function App() {
  const [power,setPower]=React.useState(true)

  const [bank,setBank]=React.useState(true)

  const [selectedPad,setSelectedPad]=React.useState("")
  
  const [volume,setVolume]=React.useState('0.3')

  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     if (power) {
  //       const key = event.key.toUpperCase();
  //       const drumPad = drumsPadsData.find((pad) => pad.key === key);
  //       if (drumPad) {
  //         playAudio(drumPad.id, volume);
  //         setSelectedPad(drumPad.id);
  //       }
  //     }
  //   };
  
  //   document.addEventListener('keydown', handleKeyPress);
  
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [power, volume, drumsPadsData]);

  console.log(bank)
  console.log(power)
  console.log(volume)
  function turnPower(){
    setPower(!power)
  }

function turnBank(){
  setBank(!bank)
}

  function display(id){
    setSelectedPad(id)
 }

 function volumeChange(event){
  setVolume(event.target.value)
 }
  return (
    <div className='drum-machine' id='drum-machine'>
      <div className="logo">
        FCC&nbsp;
        <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
      </div>
      <div className="container">
       <Pads display={display} volume={volume} power={power} bank={bank}/>
       <Controls power={power} turnPower={turnPower} selectedPad={selectedPad}
       volumeChange={volumeChange}
       volume={volume}
       turnBank={turnBank}
       bank={bank}
       />
      </div>
    </div>
  )
}
