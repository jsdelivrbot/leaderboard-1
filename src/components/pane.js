import React, { Component } from 'react';

// start child pane
class Pane extends Component {
    constructor() {
      super();
    };

    render() {
      return (
        <div>
        {this.props.children}
       </div>
      );
    }
  }
  // end child pane

export default Pane;