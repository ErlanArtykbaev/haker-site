import React from 'react'
import HomeNewsItem from './HomeNewsItem'
import './HomeNews.css'

const HomeNews = () => {
  return(
    <>
			<section className='HomeNews'>
				<div className="HomeNews-title" >
					News
				</div>
				<div className="HomeNews-container">    
					<HomeNewsItem 
						ahref="#"
						clsName='HomeNews-item'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>

					<HomeNewsItem
						aHref='#'
						clsName='HomeNews-item'
						imgCls='HomeNews-img'
						text='Apple recovers losses after Chinese court bans sale of most iPhones'
					/>
					<HomeNewsItem 
						ahref="#"
						clsName='HomeNews-item'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>
					<HomeNewsItem 
						ahref="#"
						clsName='HomeNews-item'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>
				</div>
      </section>
    </>
  )
}

export default HomeNews
