import React, { useState, useEffect } from 'react';
import { Enc, Dec } from './EncryptDecrypt';

function App(props) {
  const data = [];
  var obj = {
    name: 'manjunath',
    age: 23,
  };
  var encrypted = Enc(obj);
  var dec = Dec(encrypted);
  data.push(dec);
  let names = data.map((val) => {
    return val;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>Encrypt Data {encrypted}</div>
        <br />
        <br />
        <div>
          DecRypt Data
          <br /> {names[0].name} {names[0].age}
        </div>
      </header>
    </div>
  );
}
export default App;
