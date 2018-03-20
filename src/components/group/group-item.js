import { h, render, Component } from 'preact';
import style from './group.scss'
import group from './const.js'
/** @jsx h */

export default class Group extends Component {	
	constructor(props) {
	    super();
	    this.state = group[props.key]
	}
	render({ }, { }) {
	
		return (
			<div class="products-content">
				<div class="products-left">
					<div class="products-left-content">
						<h1>{this.state.name}</h1>
						<div>{this.state.intro}</div>
					</div>
				</div>
				<div class="products-right"  style = {{backgroundImage:`url(${this.state.img})`}}></div>
			</div>
		);
	}
}