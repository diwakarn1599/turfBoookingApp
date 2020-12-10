import React from "react";
import './App.css';
import Box from './Box';
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
                <Route path="/morning">
                   <Box value="morning" time={12} />
                </Route>
                <Route path="/noon">
                <Box value="noon" time={6} />
                </Route>
                <Route path="/evening">
                <Box value="evening" time={12} />
                </Route>
                <Route path="/night">
                <Box value="night" time={6} />
                </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
