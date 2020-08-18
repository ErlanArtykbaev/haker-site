import React from 'react'
import NavigationOthers from '../Layout/NavigationOthers'
import ProfileForumTheme from './ProfileForumTheme'
import Footer from '../Layout/Footer'
import './Profile.css'

const Profile = () => {
	return(
		<div> 
			<NavigationOthers />
			<div className="Profile-page">
				<div className="Profile-main">
					<div className="Profile-main-item">
						image:
						<input name="image" className="inChange" type="text" size="50"/> 
					</div>
					<div className="Profile-main-item">
						name:
						<input name="name" className="inChange" type="text" size="50"/> 
					</div>
					<div className="Profile-main-item">
						username:
						<input name="username" className="inChange" type="text" size="50"/> 
					</div>
					<div className="Profile-main-item">
						email:
						<input name="email" className="inChange" type="text" size="50"/> 
					</div>
					<div className="Profile-main-item">
						phone:
						<input name="phone" className="inChange" type="text" size="50"/> 
					</div>
					<div className="Profile-main-item">
						programming area: 
						<select className="inChange">
							<option value="front">front</option>
							<option value="back">back</option>
							<option value="soft">soft</option>
							<option value="android">android</option>
							<option value="ios">iOS</option>
						</select>
					</div>
					<div className="Profile-main-submit">
						<input type="submit" value="change" />
					</div>
					<div className="Profile-main-item">
						history of posts or themes:
						<ProfileForumTheme 
							title="title"
							content="there is the content"
						/>
						<ProfileForumTheme 
							title="apple is out?"
							content="apple is out of production own 5G processors. Can they one more time comeback??"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Profile
