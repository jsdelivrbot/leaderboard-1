import React, { Component } from 'react';

// start parent tab
class Tabs extends Component {
    constructor(props) {
      super(props);
      this.state = {
  //        selector: 0
        selected: 1
        }
        //   console.log(props);
        //   console.log(this.state);
    }

    handleClick(index, event) {
      event.preventDefault();
      this.setState({
        selected: index
      });
    }

    __renderTitles() {
      function labels(child, index) {
        let activeClass = (this.state.selected === index ? 'active' : '');
        return (
          <li key={index}>
          <a href="#" 
            className = {activeClass}
            onClick={this.handleClick.bind(this, index)}>
            {child.props.label}
          </a>
         </li>
        );
      }
      return (
        <ul className="tabs__labels">
        {this.props.children.map(labels.bind(this))}
      </ul>
      );
    }

    __renderContent() {
      return (
        <div className="tabs__content">
        {this.props.children[this.state.selected]}
       </div>
      );
    }

    render() {
      return (
        <div className="tabs">
        {this.__renderTitles()}
        {this.__renderContent()}
      </div>
      );
    }
  }
  // end tabs

export default Tabs;