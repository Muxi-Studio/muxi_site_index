import { h, render, Component } from 'preact';
// import PreactCSSTransitionGroup from 'preact-css-transition-group'
import BannerItem from './banner-item.js'
import BannerController from './banner-controller.js'
import style from './banner.scss'
import config from './const.js'
/** @jsx h */

export default class Banner extends Component {	
	state = {
		currentPage:1,
		items: ['hello', 'world', 'click', 'me']
	};
	componentWillMount(){
		var countPage = config.length
		this.setState({ countPage })		
	}
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
	updateItem = (e) =>{
		if(!(this.state.currentPage<=1&&e==-1 || this.state.currentPage >= this.state.countPage && e==1)){
			this.setState({currentPage: this.state.currentPage + e})
		}
	};
	renderPage = () =>{
		return (<BannerItem key={this.state.currentPage}/>);
	};
	render({ }, { }) {
		return (
			<div class="products-wrap">
				<div>{this.state.currentPage}</div>
				<PreactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					{this.renderPage()}
				</PreactCSSTransitionGroup>
				<BannerController update={this.updateItem}/>
			</div>
		);
	}
}