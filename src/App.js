import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './logo.svg';
import './App.css';

import { Nav, NavItem } from 'react-bootstrap';

import News from './News';
import Comments from './Comments';

class App extends Component {
  handleSelect(selectedKey) {
    console.log(`selected ${selectedKey}`);
  }

  //  onSelect={this.handleSelect}

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-menu">
            <Nav bsStyle="pills" stacked>
              <LinkContainer to="/news"><NavItem>News</NavItem></LinkContainer>
              <LinkContainer to="/comments"><NavItem>Comments</NavItem></LinkContainer>
              <NavItem disabled>
                NavItem 3 content
              </NavItem>
            </Nav>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path="/" component={News} />
              <Route path="/news" component={News} />
              <Route path="/comments" component={Comments} />
              <Route path="*" render={() => <Redirect to="/" />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
