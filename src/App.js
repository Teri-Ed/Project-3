import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import TodoApp from './components/TodoApp';
import MyForm from './components/MyForm';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

library.add(faTrash);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path = '/' exact component = {Home} />
          <Route path = '/TodoApp' component = {TodoApp} />
          <Route path = '/MyForm' component = {MyForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
