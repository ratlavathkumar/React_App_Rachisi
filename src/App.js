// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div>
//       {/*<div className='backgroundColor'>
//         <h1>Rachisi Solutions Pvt Ltd</h1>
//       </div>*/}
//       <div className='backgroundImage'>
//         <h1>Rachisi Solutions</h1>
//       </div>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('');
  const ALAN_Key = `Your ALAN AI KEY`
  useEffect(() => {
    alanBtn({
        key: ALAN_Key,
        onCommand: (commandData) => {
          if(commandData.command === 'name'){
            setName(commandData.data)
          }
          if(commandData.command === 'phone'){
            setPhone(commandData.data)
          }
          if(commandData.command === 'address'){
            setAddress(commandData.data)
          }
        }
    });
  }, []);
  return (
    <div className='form-fields'>
      <input
        placeholder='Name'
        name='name'
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
      />
      <input
        placeholder='Phone'
        name='phone'
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
        type='text'
      />
      <input
        placeholder='Address'
        name='address'
        onChange={(event) => setAddress(event.target.value)}
        value={address}
        type='text'
      />

      <button className='submit-btn'>Submit</button>
    </div>
  );
}

export default App;