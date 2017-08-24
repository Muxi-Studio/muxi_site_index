import { h, render, Component } from 'preact';
import style from './banner.scss'
import config from './const.js'

export default class BannerController extends Component{
	componentWillMount(){
		var items = []
		config.forEach(e =>{
			items.push(e.product)
		})
		this.setState({ items })		
	}
	switchLeft = () => {
		this.props.update(-1);
	};
	switchRight = () => {
		this.props.update(1);
	};
	render(props,{items}) {
		return (
			<div class="products-bottom">
				<div class="products-controller">
					<div class="controller-btn btn-left" id="left-btn" onClick={this.switchLeft}></div>
					<div class="products-cnt-text" id="banner-controller">
						<div class="text" id="text">
							<div class="products-item products-item-center" id="ccnubox">{items[0]}</div>
							<div class="products-item" id="xueer">学而</div>
							<div class="products-item" id="chatbot">木小犀</div>
						</div>
					</div>
					<div class="controller-btn btn-right" id="right-btn" onClick={this.switchRight}></div>
				</div>
			</div>
		);
	}
}