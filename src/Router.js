import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from'./Pages/HomePage';
import HomePage2 from'./Pages/sanpham1';

class Router extends React.Component {
    render() {
      return (
          <BrowserRouter>
          <div>
          <Route exact path="/" component={HomePage}/>
          <Route  path="/homepage2" component={HomePage2}/>
          </div>
          </BrowserRouter>
        
      );
    }
  }
  
  export default Router;
  