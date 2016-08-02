import React from 'react';


export default class NoMatch extends React.Component {

  render() {
    return (
      <div>
        <h1>Doh!</h1>
        <img src="http://yiyinglu.com/failwhale/images/Homer_the_New_Fail_Whale_by_edwheeler.jpg" alt="fail homer" />
        <div>We couldn't find what you were looking for. You probably want to <a href="/">start over</a>.</div>
      </div>    );
  }
}
