import React from 'react'
import {NavLink} from 'react-router-dom'

import '../css/style.css'
import Navigation from './Navigation'
import HomeNews from './componentsHome/HomeNews'
import HomeMotiv from './componentsHome/HomeMotiv'
import HomeAb from './componentsHome/HomeAb'
import Footer from './Footer'


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
		<HomeMotiv />
		<HomeAb />
		<Footer />
    </>
  )
}
export default Home
