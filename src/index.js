import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/tabs';
import Pane from './components/pane';
import Alltime from './components/alltime';
import Recent from './components/recent';

// main app
class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <div>
         <h1>Leaderboard</h1>
        </div>
        <Tabs selected={0}>
          <Pane label="Campers">
            <div><p>Info on <a href="https://www.quora.com/How-many-points-are-there-in-FreeCodeCamp" target="_blank">earning FreeCodeCamp points</a></p><p>More about <a href="https://www.freecodecamp.com/about/" target="_blank">freecodecamp.com</a></p>
            </div>
          </Pane>
          <Pane label="Points in Last 30 Days">
            <div><Recent /></div> 
          </Pane>
          <Pane label="All Time Points">
            <div><Alltime /></div>
          </Pane>
        </Tabs>
      </div>
    );
  }
}

// final render app
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);