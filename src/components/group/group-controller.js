import { h, render, Component } from 'preact';
import style from './group.scss'
import group from './const.js'
// import PreactCSSTransitionGroup from 'preact-css-transition-group'
/** @jsx h */

export default class Group extends Component {	
	constructor(props) {
	    super();
	    this.state.groups = group
	}
	selectGroup(e) {
		this.props.select(e)
	};
	render(props, { groups }) {
		var class1 = "group-item group-on"
		var class2 = "group-item"
		var rotate = 72 * props.current + 18 + 'deg'
		console.log(`rotate(${rotate})`)
		return (
			<div class="group-controller">
				<div class="circle-menu">
					<div class="circle-menu-round" style={{
						transitionDuration: '.8s',
						transform: `rotate(${rotate})`}}>
						<div class="circle-menu-dot"></div>
					</div>
					<ul>
					{ groups.map( (item, i) => (
						<li><a className={`circle-menu-${i}`} onClick={this.selectGroup.bind(this,i)}>{item.name}</a></li>
					)) }
					</ul>
				</div>
			</div>
		);
	}
}