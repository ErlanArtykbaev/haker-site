import React from 'react'
import {NavLink} from 'react-router-dom'

import '../../style.css'
import Navigation from '../Layout/Navigation'
import HomeNews from './HomeNews/HomeNews'
import HomeMotivation from './HomeMotivation/HomeMotivation'
import HomeAbout from './HomeAbout/HomeAbout'
import Footer from '../Layout/Footer'


function Home(){
  return(
    <>

		<header> 
			<div className="Home-container">
				<Navigation /> 
				<div className="Home-theme">
          <div className="Home-theme-first">
            Welcome To Our Community!
          </div>
          <h1>It's going to be fun!</h1>
					<NavLink to='/forum' className="button">Be Hacker</NavLink>
        </div>
      </div>
    </header>
		<HomeNews />
		<HomeMotivation />
		<HomeAbout />
		<Footer />
    </>
  )
}
export default Home
