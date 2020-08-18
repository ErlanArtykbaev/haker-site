import React from 'react'
import {Link} from 'react-router-dom'

const ForumTheme = (props) => {
	return(
		<div className="ForumTheme">
			<div className="ForumTheme-title">
				<Link to={`/forumtheme/?id=${props.id}`} >{props.title}</Link>
			</div>
			<div className="ForumTheme-about">
				{props.content}
			</div>
		</div>

	)
}

export default ForumTheme
