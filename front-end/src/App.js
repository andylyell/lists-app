import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

class App extends Component {

  state = {
    response: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => {
      console.log(res)
      this.setState({response: res})
    })
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/lists');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
