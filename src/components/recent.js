import React, { Component } from 'react';

// get the data
const urlForRecent = recent => `https://fcctop100.herokuapp.com/api/fccusers/top/recent`

// start recent fetch data

class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForRecent(this.props.recent))
      .then(response => {
        if (!response.ok) {
          throw Error("Network Request Failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          recentData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }


  render() {
    if (this.state.requestFailed) return <p>Failed</p>
    if (!this.state.recentData) return <p>Loading...</p>
    return (
      <div>
        <table>
          <tbody>
   
              {this.state.recentData.map(function(camper) {
                return (
                      <tr key={camper.username}>
                    <td></td><td><img src={camper.img} width="50px" /><a href={"https://www.freecodecamp.com/"+camper.username} target="_blank">{camper.username}</a></td><td>{camper.recent}</td><td>{camper.alltime}</td>
                      </tr>             
                    );
                   })}
          </tbody>
         </table>
               
     </div>
    )
  }
}

// end getting data

export default Recent;