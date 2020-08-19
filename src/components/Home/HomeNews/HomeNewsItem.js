import React from 'react'
import {Link} from 'react-router-dom'

const HomeNewsItem = (props) => {
  return( 
		<div className={props.clsName}>
			<Link to="/news">
				<img src={props.img} alt='Apple img' className={props.imgCls} />
				<p>{props.text}</p>
			</Link>
		</div>
  )
}

export default HomeNewsItem
