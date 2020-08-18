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
				<NewsItem />
				<NewsItem />
				<NewsItem />	
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
			<Footer />
		</div>
	)
}

export default News
