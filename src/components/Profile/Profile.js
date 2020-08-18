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
						<label htmlFor='image'>image:</label>
						<input 
							name="image" 
							className="inChange"
							type="text" 
							size="50"
							id='image'/> 
					</div>
					<div className="Profile-main-item">
						<label htmlFor='name'>name:</label>
						<input 
							name="name" 
							className="inChange" 
							type="text" 
							id='name'
							size="50"/> 
					</div>
					<div className="Profile-main-item">
						<label htmlFor='username'>username:</label>
						<input 
							name="username" 
							className="inChange" 
							id='username'
							type="text" 
							size="50"/> 
					</div>
					<div className="Profile-main-item">
						<label htmlFor='email'>email:</label>
						<input 
							name="email" 
							className="inChange" 
							id='email'
							type="text" 
							size="50"/> 
					</div>
					<div className="Profile-main-item">
						<label htmlFor='phone'>phone:</label>
						<input 
							name="phone" 
							className="inChange" 
							id='phone'
							type="text" 
							size="50"/> 
					</div>
					<div className="Profile-main-item">
						<label htmlFor='programming'>programming area:</label>
						<select className="inChange">
							<option value="front">front-end</option>
							<option value="back">back-end</option>
							<option value="soft">software</option>
							<option value="android">android</option>
							<option value="ios">iOS</option>
						</select>
					</div>
					<div >
						<input className="Profile-main-submit" type="submit" value="change" />
					</div>
					<div className="Profile-main-posts">
						<h3>history of posts or themes:</h3>
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
