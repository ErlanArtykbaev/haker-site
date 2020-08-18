import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Forum from './components/Forum/Forum'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import ForumThemeBig from './components/Forum/ForumThemeBig'

class App extends Component {
  
  render() {
    return (
			<>
      <BrowserRouter>
				<div>
					<Switch>
            
						<Route path='/' component={Home} exact />
						<Route path='/about' component={About} />
						<Route path='/forum' component={Forum} />
						<Route path='/news' component={News} />
						<Route path='/profile' component={Profile} />
						<Route path='/forumtheme' component={ForumThemeBig} />
					</Switch>
				</div>
      </BrowserRouter> 

			</>
    )
  }
}

export default App
