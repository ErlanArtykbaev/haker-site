import React from 'react'
import newsImg from '../../assets/img/newsImg.jpg'
import {Link} from 'react-router-dom'

const NewsItem = () => {
	return(

		<div className="NewsItem">	
			<img src={newsImg} alt="img" className="newsImg"/>
			<Link to="/newsItem">
				<h3>
					Facebook’s Workplace gets updated UI, more emphasis on chat and groups
				</h3>
				<p>
					The revamped look unveiled this week is designed to be 
					quicker and easier to use for both employees and Workplace admins.
				</p>
			</Link>
		</div>

	)
}

export default NewsItem
