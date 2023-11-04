import React from 'react'
import $ from 'jquery';
const drumPadsData1 = [
  { id: 'heater1', key: 'Q' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    { id: 'heater3', key: 'W' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    { id: 'heater2', key: 'E' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    { id: 'heater4', key: 'A' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    { id: 'clap', key: 'S' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    { id: 'open-hh', key: 'D' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    { id: "kick-n'-hat", key: 'Z' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    { id: 'kick', key: 'X',src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { id: 'closed-hh', key: 'C' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ];
  const drumPadsData2 = [
    { id: 'Chord', key: 'Q' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'},
    { id: 'Chord 2', key: 'W' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
    { id: 'Chord 3', key: 'E' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
    { id: 'Shaker', key: 'A' ,src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},
    { id: 'Open HH', key: 'S' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'},
    { id: 'Closed-hh', key: 'D' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'},
    { id: "Punchy Kick", key: 'Z' ,src:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
    { id: 'Side Stick', key: 'X',src:'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
    { id: 'snare', key: 'C' ,src:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'}
  ];
  
  // const drumPads = drumPadsData1.map(padData=>(
  //   <div className='drum-pad' 
  //   id={padData.id} 
  //   key={padData.id}
  //   onClick={()=>props}>
  //       {padData.key} 
  //   </div>
  // ));
  export default function Pads(props) {
    const playAudio = (audioId, volume) => {
      const audioElement = document.getElementById(audioId);
      if (audioElement) {
        audioElement.currentTime = 0; // Rewind audio to the beginning
        audioElement.volume = volume;
        audioElement.play();
      }
    };
  
    const drumsPadsData = props.bank ? drumPadsData1 : drumPadsData2;
  
    const handleKeyPress = (event) => {
      // Check if power is on and the key is one of the trigger keys (e.g., Q, W, E, etc.)
      if (props.power) {
        const key = event.key.toUpperCase();
        const padData = drumsPadsData.find((data) => data.key === key);
        if (padData) {
          props.display(padData.id);
          playAudio(key, props.volume);
        }
      }
    };
  
    // Attach the keydown event listener to the document
    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        // Cleanup the event listener when the component unmounts
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [props.power, props.display, props.volume]);
  
    return (
      <div className="pads">
        {drumsPadsData.map((padData) => (
          <div
            className="drum-pad"
            id={padData.id}
            key={padData.id}
            onClick={() => {
              if (props.power) {
                props.display(padData.id);
                playAudio(padData.key, props.volume);
              }
            }}
          >
            <audio className="clip" id={padData.key} src={padData.src}></audio>
            {padData.key}
          </div>
        ))}
      </div>
    );
  }
















// export default function Pads(props) {
//   const playAudio = (audioId,volume) => {
//     const audioElement = document.getElementById(audioId);
//     if (audioElement) {
//       audioElement.currentTime = 0; // Rewind audio to the beginning
//       audioElement.volume=volume
//       audioElement.play();
//     }
//   };

// const drumsPadsData= props.bank? drumPadsData1 : drumPadsData2;

//   return (
//     <div className='pads'>
//     {
//     drumsPadsData.map(padData => (
//       <div
//         className='drum-pad'
//         id={padData.id}
//         key={padData.id}
//         onClick={() => {
//           if(props.power){
//           props.display(padData.id);playAudio(padData.key,props.volume)}}}
//       >
//         <audio className="clip" id={padData.key} src={padData.src}>
          
//         </audio>
//         {padData.key}
        
//       </div>
//     ))}
//   </div>
//   );
// }
//     <div className="pads">
// <div className="drum-pad" id='heater1'>Q</div>
// <div className="drum-pad" id='heater2'>W</div>
// <div className="drum-pad" id='heater3'>E</div>
// <div className="drum-pad" id='heater4'>A</div>
// <div className="drum-pad" id='clap'>S</div>
// <div className="drum-pad" id='open-hh'>D</div>
// <div className="drum-pad" id="kick-n'-hat">Z</div>
// <div className="drum-pad" id='kick'>X</div>
// <div className="drum-pad" id='closed-hh'>C</div>
// </div>