import React, { Component } from 'react';
import './App.css';
import Box from '../components/Box';

const Characters = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '']

class App extends Component {
  width = 18;
  height = 14;

  constructor() {
    super();
    this.state = {
      boxs: this.generateBoxs(),

    };
  }

  generateBoxs() {
    return [...Array(this.height)]
            .map(x => Array(this.width).fill(' ') );
  }

  render() {
    let { boxs } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div>001</div>
          <div>:)</div>
          <div>999</div>
        </div>
        {
          boxs
            .map( (vbox, v) => 
              <div className="container" key={'h_key:' + v}>
                {
                  vbox.map( (hbox, h) => 
                    <Box 
                      key={'key:' + v + ',' + h} 
                      value={hbox}
                      />
                  )
                }
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
