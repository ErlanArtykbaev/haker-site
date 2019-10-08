import React from 'react'
import NavigationOthers from './NavigationOthers'
import '../css/AboutusCss.css'
import Footer from './Footer'

const About = () => {
	return(
		<div>
			<NavigationOthers />
			<div className="About-main">
				<div className="About-title">Hi there!</div>
				<div className="About-text">we are the best forum of KGZ!!!</div>
				<div className="About-goal">and we want to <br/> do our KG best!!</div>
				<div className="About-go">come and enjoy with journey!</div>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d869.7199017291417!2d74.59429652204682!3d42.843763911965105!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1556946079754!5m2!1sru!2skg" style = {{ width: '100%', height: '300px', frameborder:'0', border:'0' }}></iframe>
			<Footer />
		</div>
	)
}

export default About
