import React from 'react';
import CreateComment from './CreateComment.jsx';
import CommentList2 from './CommentList2.jsx';


const chats = [
{
	chat: "it is here",
	isCompleted: false
},
{
	chat: "no its at como",
	isCompleted: true
},
]


export default class CommentList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chats
		};
	}
  render() {
    return (
      <div>
      	<img src="http://i.imgur.com/7MObd1y.png" />
      	<CreateComment createChat={this.createChat.bind(this)} />
      	<CommentList2 
      		chats={this.state.chats}
      		toggleComment={this.toggleComment.bind(this)}
      		deleteComment={this.deleteComment.bind(this)}
      		/>
      </div>
    );
  }

  toggleComment(chat) {
  	const foundComment = _.find(this.state.chats, comment => comment.chat === chat);
  	foundComment.isCompleted = !foundComment.isCompleted;
  	this.setState({ chats: this.state.chats });
  }

  createChat(chat) {
  	this.state.chats.push({
  		chat,
  		isCompleted: false
  	});
  	this.setState({ chats: this.state.chats });
  }

  	deleteComment(chatToDelete) {
  		_.remove(this.state.chats, comment => comment.chat === chatToDelete);
  		this.setState({ chats: this.state.chats });

  }

}
