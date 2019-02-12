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
    return this.state.sessionToken !== undefined ? <Pies/> : <Auth storeSessionToken={this.storeSessionToken}/>
  }

  storeSessionToken = (token) => {
    this.setState({sessionToken: token})
  }

  removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  render() {
    return (
      <React.Fragment>
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </React.Fragment>
    );
  }
}

export default App;
