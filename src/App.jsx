
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import globalStyles from './assets/styles/global.css';
import CommentList from './CommentList.jsx';


const todo = [

]

  /**
  * A stateful component to store our app
  */
  class App extends Component {
    render() {
      return (
        <div>
        <h1>Medallian Hunt Chat</h1>
        <CommentList />


        </div>
      );
    }
  }

ReactDOM.render(
 <Router history={browserHistory}>
   <Route path="/" component={App}>
   </Route>
 </Router>,
 document.getElementById('root')
);
