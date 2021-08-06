import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import img from './images/CreateRepository.png';

function CreateRepository() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>
          <img src={img} alt="Create Repository" width={600} height={630}/>

          <br/>
          <br/>
          PUT CODE HERE.

      </div>
  );
}

export default CreateRepository;
