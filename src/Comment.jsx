import React from 'react';



export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	
	this.state = {
		isEditing: false
	};
}

renderImportance() {
	const { chat, isCompleted } = this.props;
 console.log(this.props)
	const commentStyle = {
		color: isCompleted ? 'red' : 'black',
		cursor: 'pointer'

	}

	return(
		<td style={commentStyle}
			onClick={this.props.toggleComment.bind(this, chat)}
		>
			{chat}
		 </td>

		);
}


renderActionSection() {
	if (this.state.isEditing) {
		return (
		<td>	
		<button	>Save</button>
		<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
		</td>	
			);
	}

	return (
		<td>
		<button onClick={this.onEditClick.bind(this)}>Save</button>
		<button onClick={this.props.deleteComment.bind(this, this.props.chat)}>Delete</button>
		</td>	
	);

}

  render() {
    return (

		<tr>
			{this.renderImportance()}
			{this.renderActionSection()}
		</tr>
    );
  }

  onEditClick() {
  	this.setState({ isEditing: true });
  }

  onCancelClick() {
  		this.setState ({ isEditing: false})
  }
}
