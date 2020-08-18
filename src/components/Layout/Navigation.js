import React from 'react'
import '../../style.css'
import {NavLink} from 'react-router-dom'

function Navigation(){
  return(
    <div>
      <div className="Navigation-header">
				<NavLink className="Navigation-header-first" to='/' exact>
					<img src={require('../../assets/img/logo.png')} alt="Logo" className="Navigation-logo" />
        </NavLink>
				<NavLink className='Navigation-header-second' to='/' exact style={{textDecoration: 'none'}}>Home</NavLink>
				<NavLink className='Navigation-header-third' to='/news' style={{textDecoration: 'none'}}>News</NavLink>
				<NavLink className='Navigation-header-fourth'to='/forum' style={{textDecoration: 'none'}}>Forum</NavLink>
				<NavLink className='Navigation-header-fifth' to='/profile' style={{textDecoration: 'none'}}>Profile</NavLink>
				<NavLink className='Navigation-header-sixth' to='/about' style={{textDecoration: 'none'}}>About us</NavLink>
      </div>
    </div>
  )
}

export default Navigation
