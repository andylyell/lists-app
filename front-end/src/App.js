import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';

class App extends Component {

  state = {
    lists: []
  }

  componentDidMount() {
    this.callApi()
    .then(res => {
      console.log(res)
      this.setState({
        lists: res
      })
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
        <Navbar lists={this.state.lists}/>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(routeProps) => (
              <Home {...routeProps} lists={this.state.lists}/>
            )}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
