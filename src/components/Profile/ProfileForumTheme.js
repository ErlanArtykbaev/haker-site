import React from 'react'

const ProfileForumTheme = (props) => {
	return(
		<div className="ProfileForumTheme">
			<h3>{props.title}</h3>
			<div>{props.content}</div>
		</div>
	)
}

export default ProfileForumTheme
