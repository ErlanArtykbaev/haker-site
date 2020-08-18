import React from 'react'
import aboutImg from '../../../assets/img/Firefox_wallpaper.png'
import './HomeAbout.css'

const HomeAb = () => {
	return(
		<div className="HomeAbout">
			<div className='HomeAbout-title'>
				About us
			</div>

			<div className="HomeAbout-container">
				<img src={aboutImg} className="HomeAbout-img"  />
				<p className="HomeAbout-p">
					We tried so hard and got so far. <span>In the end</span>, it doesn't matter...
				</p>
			</div>
		</div>
	)
}

export default HomeAb
