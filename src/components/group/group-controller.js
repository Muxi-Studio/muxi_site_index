import { h, render, Component } from 'preact';
import style from './group.scss'
import group from './const.js'
// import PreactCSSTransitionGroup from 'preact-css-transition-group'
/** @jsx h */

export default class Group extends Component {	
	constructor(props) {
	    super();
	    this.state = {
			groups : group,	
			current:props.current
		}
	}
	componentWillMount(){
		this.timer = setInterval(()=>{
			this.props.current++;
			this.setState({current:this.props.current})
			let currentGroup = this.state.current%this.state.groups.length
			this.props.select(currentGroup)
		},3000)
		
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	selectGroup(e) {
		this.props.select(e)
	};
	render(props, { groups,current }) {
		var class1 = "group-item group-on"
		var class2 = "group-item"
		var rotate = 72* current + 18;
		if(rotate>180){
			rotate = rotate-360 + 'deg'
		}else{
			rotate = rotate + 'deg'
		}
		return (
			<div class="group-controller" >
				<div class="circle-menu" >
					<div class="circle-menu-round"  style={{
						transitionDuration: '.8s',
						transform: `rotate(${rotate})`}}>
						<div class="circle-menu-dot"></div>
					</div>
					<ul className = "group-name">
					{ groups.map( (item, i) => (
						<li><a className={`circle-menu-${i}`} onClick={this.selectGroup.bind(this,i)}>{item.name}</a></li>
					)) }
					</ul>
				</div>
			</div>
		);
	}
}