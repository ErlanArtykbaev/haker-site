import React from 'react'
import NavigationOthers from '../Layout/NavigationOthers'
import Footer from '../Layout/Footer'
import queryString from 'query-string'
import ForumBigAnswer from './ForumBigAnswer'

class ForumThemeBig extends React.Component{

	constructor(){
		super()
		this.state = {
			id: "",
			answers: [],
			inputText: ""
		}
		this.changeHandler = this.changeHandler.bind(this)
		this.answerToQuestion = this.answerToQuestion.bind(this)
	}

	componentDidMount(){
		const values = queryString.parse(this.props.location.search)
		this.setState({id: values.id})
	}

	answerToQuestion(){
		let ins = this.state.inputText
		let ans = this.state.answers
		let arr = [...ans]

		arr.push(<ForumBigAnswer content={ins} />)
		this.setState({answers: arr})
	}

	changeHandler(e){
		this.setState({inputText: e.target.value})
	}

	render(){
		return(
			<div>
				<NavigationOthers />
				<div className="ForumBig-main">
					<div className="ForumBig-title">how to use loop in js</div>
					<div className="ForumBig-block">
						<div className="ForumBig-moreInfo">
							Here is my code... How to use loop in js. Can someone explain me?
							
						</div>
						<div className="ForumBig-answerToMain">
							<input type="text" value={this.state.inputText} onChange={this.changeHandler} className="inputTxt"/>
							<button onClick={this.answerToQuestion}>answer</button>
						</div>
						<div className="ForumBig-answers-block">
							<span>Answers</span>
							<ForumBigAnswer content="You can use it like that"/>
							<ForumBigAnswer content="You can do like for(and like this)"/>
							{this.state.answers}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
	
}

export default ForumThemeBig
