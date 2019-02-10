import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sessionToken: undefined
    }
  }

  viewConductor = () => {
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={this.storeSessionToken}/>
  }

  storeSessionToken = (token) => {
    this.setState({sessionToken: token})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        {this.viewConductor()}
      </React.Fragment>
    );
  }
}

export default App;
