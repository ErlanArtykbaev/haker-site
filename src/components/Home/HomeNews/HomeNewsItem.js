import React from 'react'
import appleImg from '../../../assets/img/news_blog_img.jpg'
import {Link} from 'react-router-dom'

const HomeNewsItem = (props) => {
  return( 
		<div className={props.clsName}>
			<Link to="/news">
				<img src={appleImg} alt='Apple img' className={props.imgCls} />
				<p>{props.text}</p>
			</Link>
		</div>
  )
}

export default HomeNewsItem
