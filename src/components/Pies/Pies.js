import React from 'react';

import './Pies.css';
import Pie from './Pie/Pie';

class Pies extends React.Component {
  constructor(){
    super();
    this.state = {
      pies: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => this.setState({pies: json}))
  }

  render(){
    let pieRows = this.state.pies.map((pie, i) => {
      return (
        <Pie key={i} pie={pie} />
      )
    })
    return(
      <table>
        <tbody>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;