import React, { Component } from 'react';
import './app.scss';
import Button from './button';

class App extends Component {
  render() {
    console.log('render...')
    return (
      <>
        <div className="box">
          reactB
          <Button />
        </div>
      </>
    );
  }
}

export default App;