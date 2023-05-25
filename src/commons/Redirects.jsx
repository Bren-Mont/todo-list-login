import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React from 'react'

const Redirects = () => {
  return (
    <Router>
      <Route path="/home" component={Home} />
     
    </Router>
  );
}

export default Redirects
