import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import CreateRepository from "./CreateRepository";
import SearchResults from "./SearchResults";

function App() {
  return (
      <div style={{padding: '10px'}}>
          <CssBaseline/>

          <BrowserRouter>

              <h1>
                  Let's implement the following components:
              </h1>


              <Button  variant="contained" color="primary" component={RouterLink} to="/create-repository">
                  Create Repository
              </Button>

              <Button  variant="contained" color="primary" component={RouterLink} to="/search-results">
                  Search Results
              </Button>

              <Switch>

                  <Route exact path="/create-repository">
                      <CreateRepository/>
                  </Route>

                  <Route exact path="/search-results">
                      <SearchResults/>
                  </Route>

              </Switch>
          </BrowserRouter>

      </div>
  );
}

export default App;
