import React from 'react';
import 'antd/dist/antd.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './Pages/Index'
import Buy from './Pages/Buy'
import Sell from './Pages/Sell'
import XQ from './Pages/XQ'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index}></Route>
      <Route path="/buy" component={Buy}></Route>
      <Route path="/sell" component={Sell}></Route>
      <Route path="/xq/:id" component={XQ}></Route>
    </Router>
  );
}

export default App;
