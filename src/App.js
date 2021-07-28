
import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Ajay from "./CustomerSearch/Form/Ajay"
function App() {
 

  return (
    <BrowserRouter>
    <div>
      <Switch>

      <Route path="/" component={Home}>
        <Home />
      </Route>

      <Route path="/ajay" component={Ajay}>
      </Route>

      </Switch>
    </div>
    </BrowserRouter>
   
  )}
export default App;
