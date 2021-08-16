import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch,Link,BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import Contact from './Contact';
import Error from "./Error"
import reportWebVitals from "./reportWebVitals";


const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/contact" component={Contact} />
    <Route component={Error}/>
    </Switch>
  </Router>
)
  

ReactDOM.render(routing,
  document.getElementById('root')
);
reportWebVitals();


