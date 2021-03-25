import React, { Component } from 'react'
import { BrowserRouter , Route ,Switch} from 'react-router-dom';
import Home from '/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Post from './component/post'
import Routes from './pages/Routes';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
     
      <Switch>
      <Route exact path='/home' component={Routes} />
      
      <Route path="/:post_id" component={Post} />
      </Switch>
      </BrowserRouter>
      </div>
    )
  }
}
