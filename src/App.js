import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './logo.svg';
import './App.css';

import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';

import News from './News';
import Comments from './Comments';

class App extends Component {
  handleSelect(selectedKey) {
    console.log(`selected ${selectedKey}`);
  }

  //  onSelect={this.handleSelect}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
        <Grid>
          <Row>
            <Col xs={12} md={4}>
              <Nav bsStyle="pills" stacked>
                <LinkContainer to="/news"><NavItem>News</NavItem></LinkContainer>
                <LinkContainer to="/comments"><NavItem>Comments</NavItem></LinkContainer>
                <NavItem disabled>
                  NavItem 3 content
                </NavItem>
              </Nav>
            </Col>
            <Col xs={12} md={8}>
              
                <Switch>
                  <Route exact path="/" component={News}/>
                  <Route path="/news" component={News} />   
                  <Route path="/comments" component={Comments} />                      
                  <Route path="*" render={() => <Redirect to="/" />} />
                </Switch>
              
            </Col>
          </Row>
        </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
