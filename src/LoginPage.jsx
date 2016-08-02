import React from 'react';
import LoginForum from './LoginForum.jsx';

export default class LoginPage extends React.Component {

  render() {
    return (
  <div class="wrapper">
      <div id="box">
        <img src="http://i.imgur.com/7MObd1y.png" />
        <h3>Please sign in</h3>
        <form>
          <input type="text" placeholder="USERNAME" />
          <input type="text" placeholder="PASSWORD" />
        </form>
         <a href="#">Sign in as guest</a>
         <input onclick="this.style.backgroundColor = '#69c061';" type="submit" value="Start Hunting!"/>
        
        <div class="signup">
          <p>not a member ? <a href="#">sign up</a></p>
        </div>
      </div>
    </div>
    );
  }
}
