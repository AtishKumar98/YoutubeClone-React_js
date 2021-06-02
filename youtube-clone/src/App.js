import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import RECOMMENDED_VIDEOS from './RECOMMENDED_VIDEOS';
import SearchPage from './searchpage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app">

      <Router>
      <Header />
      <Switch>
        <Route path="/search/:searchTerm">
        <div className="app_page">
        <SideBar />
        <SearchPage />
        </div>
        </Route>
        <Route path="/">

        
        <div className="app_page">
        <SideBar />
        <RECOMMENDED_VIDEOS />
        </div>
        </Route>
        </Switch>
        </Router>
        </div>
  );
}

export default App;
