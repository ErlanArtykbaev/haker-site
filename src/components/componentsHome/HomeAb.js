import React from 'react'
import aboutImg from '../../img/Firefox_wallpaper.png'
import '../../css/HomeAbCss.css'

const HomeAb = () => {
	return(
		<div className="HomeAb">
			<div className='HomeAb-title'>
				About us
			</div>

			<div className="HomeAb-container">
				<img src={aboutImg} className="HomeAb-img"  />
				<p className="HomeAb-p">
					We tried so hard and got so far. <span>In the end</span>, it doesn't matter...
				</p>
			</div>
		</div>
	)
}

export default HomeAb
