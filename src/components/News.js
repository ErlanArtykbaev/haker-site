import React from 'react'
import '../css/NavigationOthersCss.css'
import '../css/NewsCss.css'
import NewsItem from './componentsNews/NewsItem'
import Footer from './Footer'
import NavigationOthers from './NavigationOthers'

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
