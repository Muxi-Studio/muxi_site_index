import { h, render, Component } from 'preact';
import PreactCSSTransitionGroup from 'preact-css-transition-group'
import BannerItem from './banner-item.js'
import style from './banner.scss'
/** @jsx h */

export default class Banner extends Component {	
	constructor() {
    	super();
    	this.renderPage = this.renderPage.bind(this);
    	// this.state = { currentPage: 1};
  	}
	state = {
		currentPage:1,
		items: ['hello', 'world', 'click', 'me']
	};
	
	handleAdd = () => {
		let item = prompt('Enter some text'),
			items = this.state.items.concat(item);
		this.setState({ items });
	};
	
	handleRemove = (i) => {
		let items = this.state.items.slice();
		items.splice(i, 1);
		this.setState({ items });
	};
	renderPage = () =>{
		return (<BannerItem test={this.state.currentPage}/>);
	};
	render({ }, { items }) {
		return (
			this.renderPage()			
			// <BannerItem />
			// <div>
			// 	<button onClick={this.handleAdd}>Add Item</button>
			// 	<PreactCSSTransitionGroup
			// 			transitionName="example"
			// 			transitionEnterTimeout={500}
			// 			transitionLeaveTimeout={300}>
			// 		{ items.map( (item, i) => (
			// 			<div key={item} onClick={()=>this.handleRemove(i)}>
			// 				{item}
			// 			</div>
			// 		)) }
			// 	</PreactCSSTransitionGroup>
			// </div>
		);
	}
}