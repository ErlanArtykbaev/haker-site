import React from 'react'
import './NavigationOthers.css'
import {NavLink} from 'react-router-dom'

function NavigationOthers(){
  return(
    <div>
      <div className="NavigationOthers-header">
				<NavLink className="Navigation-header-item" to='/' exact>
					<img src={require('../../assets/img/logo.png')} alt="Logo" className="Navigation-logo" />
        </NavLink>
				<NavLink className='NavigationOthers-header-item' to='/' exact>Home</NavLink>
				<NavLink className='NavigationOthers-header-item' to='/news'>News</NavLink>
				<NavLink className='NavigationOthers-header-item'to='/forum'>Forum</NavLink>
				<NavLink className='NavigationOthers-header-item' to='/profile'>Profile</NavLink>
				<NavLink className='NavigationOthers-header-item' to='/about'>About us</NavLink>
      </div>
    </div>
  )
}

export default NavigationOthers
