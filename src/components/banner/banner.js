import { h, render, Component } from 'preact';
// import PreactCSSTransitionGroup from 'preact-css-transition-group'
import BannerItem from './banner-item.js'
import BannerController from './banner-controller.js'
import style from './banner.scss'
import config from './const.js'
/** @jsx h */

export default class Banner extends Component {	
	constructor(props) {
	    super();
	    this.state.countPage = config.length
	}
//	console.log(config[this.state.currentPage]);
	state = {
		currentPage:0,
		icon : config[0].icon
	};
	updateItem = (e) =>{
		if(!(this.state.currentPage<=0&&e==-1 || this.state.currentPage >= this.state.countPage -1 && e==1)){
			
			this.setState(
				{currentPage: this.state.currentPage + e,
				icon : config[this.state.currentPage + e].icon
			})
		}
	};
	render({ }, { }) {
		let width = this.state.countPage * 100 + '%'
		var indexArray = Array.from(new Array(this.state.countPage),(val,index)=>index)	
		return (
			<div class="products-wrap">
				<div class="products-banner" style={{
					width: width,
					transitionDuration: '.8s',
					left: -100 * this.state.currentPage + "%"}}>
				{ indexArray.map( (item, i) => (
						<BannerItem key={item} count={this.state.countPage}/>
					)) }
				</div>
				<BannerController update={this.updateItem} current = {this.state.currentPage} count ={this.state.countPage} icon = {this.state.icon}/>
			</div>
		);
	}
}