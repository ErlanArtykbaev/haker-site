import React from 'react'
import './News.css'
import NewsItem from './NewsItem'
import Footer from '../Layout/Footer'
import NavigationOthers from '../Layout/NavigationOthers'

const News = () => {
	return(
		<div>
			<NavigationOthers />
			<div className="News">
				<div className="News-main">
					<NewsItem />
					<NewsItem />
					<NewsItem />	
					<NewsItem />
				</div>	
			</div>
			<Footer />
		</div>
	)
}

export default News
