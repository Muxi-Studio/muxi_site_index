import { h, render, Component } from 'preact';
import style from './group.scss'
import group from './const.js'
import GroupItem from './group-item.js'
import GroupController from './group-controller.js'
import PreactCSSTransitionGroup from 'preact-css-transition-group'
import Flower from "../flower/flower"
/** @jsx h */

export default class Group extends Component {	
	constructor(props) {
	    super();
	    this.state.count = group.length
	}
	state = {
		currentGroup:0,
	};
	selectGroup = (e)=>{
		this.setState({currentGroup: e})
	};
	render({ }, { }) {
		return (
			<div class="products-wrap">
			<Flower />
				<div class="products-intro">
					<PreactCSSTransitionGroup          
					transitionName="example"
			        transitionEnterTimeout={500}
			        transitionLeaveTimeout={300}>
						<GroupItem key={this.state.currentGroup}/>
					</PreactCSSTransitionGroup>
				</div>
				<GroupController select={this.selectGroup} current={this.state.currentGroup} />
			</div>
		);
	}
}