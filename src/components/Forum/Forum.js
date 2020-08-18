import React from 'react'
import NavigationOthers from '../Layout/NavigationOthers'
import Footer from '../Layout/Footer'
import './Forum.css'
import ForumTheme from './ForumTheme'

class Forum extends React.Component {
	constructor(){
		super()
		this.state = {
			ForumsArr: []
		}

	}

	componentWillMount(){
		const arr = []
		for(let i = 0; i < 6; i++){
			arr.push(
				<ForumTheme
					content={"can you explain me how to use loop, I'm freshone in js programming"}
					title={"How to use loop in js"}
					id={i}
					data={this.state}
				/>
			)
		}
		this.setState({ForumsArr: arr})
	}

	render(){
		return(
			<div>
				<NavigationOthers />
				<div className="Forum-page" >
					<div className="Forum-main">
						{this.state.ForumsArr}
					</div>

				</div>
				<Footer />
			</div>
		)
	}
	
	
}

export default Forum
