import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';

class App extends Component {

  state = {
    lists: [],
    activeList: {}
  }

  componentDidMount() {
    this.callApi()
    .then(res => {
      const sortedLists = res.sort(sortAlphabetically("name")) //sort lists alphabetically
      // console.log(sortedLists);
      this.setState({
        lists: sortedLists,
        activeList: sortedLists[0]
      })
    })
    .catch(err => console.log(err));
  }

  getActiveList = (listId) => {
    console.log(listId)
    this.setState({
      activeList: listId
    })
  }

  callApi = async () => {
    const response = await fetch('/lists');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  render(){
    return (
      <>
      <Navbar lists={this.state.lists}/>
      <BrowserRouter>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(routeProps) => (
              <Home {...routeProps} getActiveList={this.getActiveList} lists={this.state.lists} activeList={this.state.activeList}/>
            )}/>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;

// #region Functions

const sortAlphabetically = (property) => {
  let sortOrder = 1;

  if(property[0] === '-'){
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a,b) {
    if(sortOrder === -1){
        return b[property].localeCompare(a[property]);
    }else{
        return a[property].localeCompare(b[property]);
    }        
  }
}

// #endregion
