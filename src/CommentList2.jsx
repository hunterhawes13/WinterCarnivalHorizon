import _ from 'lodash'; 
import React from 'react';
import ChatHeader from './ChatHeader.jsx';
import Comment from './Comment.jsx';

export default class CommentList2 extends React.Component {
	renderItems() {
		return _.map(this.props.chats, (chat, index) => <Comment key ={index
		} {...chat} />);
	}

  render() {
    return (
   			<table>
   			<ChatHeader />
   			<tbody>
   				{this.renderItems()}
   			</tbody>
   			</table>
    );
  }
}
