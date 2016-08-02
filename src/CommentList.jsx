import React from 'react';
import CreateComment from './CreateComment.jsx';
import CommentList2 from './CommentList2.jsx';


const chats = [
{
	chat: "it is here",
	isComplete: false
},
{
	chat: "no its at como",
	isComplete: true
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
      	<h2>chats</h2>
      	<CreateComment createChat={this.createChat.bind(this)} />
      	<CommentList2 
      		chats={this.state.chats}
      		/>
      </div>
    );
  }

  createChat(chat) {
  	this.state.chats.push({
  		chat,
  		isCompleted: false
  	});
  	this.setState({ chats: this.state.chats });

  }

}
