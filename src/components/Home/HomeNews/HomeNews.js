import React from 'react'
import HomeNewsItem from './HomeNewsItem'
import './HomeNews.css'

const HomeNews = (props) => {
  return(
    <>
			<section className='HomeNews'>
				<div className="HomeNews-title" >
					News
				</div>
				<div className="HomeNews-container">    
					{
						props.news.map(newsItem => (
							<HomeNewsItem
								ahref='#'
								clsName='HomeNews-item'
								imgCls='HomeNews-img'
								text={newsItem.title}
								img={newsItem.img} />
						))
					}
				</div>
      </section>
    </>
  )
}

export default HomeNews
