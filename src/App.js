import React from 'react';
import './App.css';
import { Navbar } from './components/layout/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Favorites from './components/notes/Favorites';
import NotesDetail from './components/notes/NotesDetail';
import EditForm from './components/notes/EditForm';

function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorite-notes' component={Favorites} />
          <Route exact path='/note/:id' component={NotesDetail} />
          <Route exact path='/edit-form/:id' component={EditForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
