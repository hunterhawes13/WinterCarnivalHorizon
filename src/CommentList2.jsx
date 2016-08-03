import _ from 'lodash'; 
import React from 'react';
import ChatHeader from './ChatHeader.jsx';
import Comment from './Comment.jsx';

export default class CommentList2 extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'chats');

		return _.map(this.props.chats, (comment, index) => <Comment key ={index
		} {...comment} {...props}  />);
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
