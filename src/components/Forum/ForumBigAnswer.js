import React from 'react'

const ForumBigAnswer = (props) => {
	return(
		<div className="ForumBig-answer">
			{props.content}
			<button onClick={props.answer}>Answer</button>
		</div>
	)
}

export default ForumBigAnswer
