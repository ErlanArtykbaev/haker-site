import React from 'react'
import HomeNewsItem from './HomeNewsItem'
import '../../css/HomeNewsCss.css'

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
						clsName='HomeNews-item1'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>

					<HomeNewsItem
						aHref='#'
						clsName='HomeNews-item2'
						imgCls='HomeNews-img'
						text='Apple recovers losses after Chinese court bans sale of most iPhones'
					/>
					<HomeNewsItem 
						ahref="#"
						clsName='HomeNews-item3'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>
					<HomeNewsItem 
						ahref="#"
						clsName='HomeNews-item4'
						imgCls='HomeNews-img'
						text="apple recovers losses after chinese court bans sale of most iphones"
					/>
				</div>
      </section>
    </>
  )
}

export default HomeNews
