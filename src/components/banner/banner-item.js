import { h, render, Component } from 'preact';
import style from './banner.scss'
import config from './const.js'

export default class BannerItem extends Component{
	constructor(props) {
	    super();
	    this.state = config[props.key]
	}
	componentWillUnmount(){
		this.setState({product,type,intro,href})
	}
	render(props,{}) {
		let width = 100 / props.count + '%';
		return (
				<div class="products-intro" style={{width: width}}>
				
					<div class="products-content products-on">
						<div class="products-left">
							<div class="products-left-content">
								<h1>{this.state.product}</h1>
								
								<div class="products-des">
								<div class = "products-des-icon"></div>
					                <span class="products-des-txt">{this.state.type}</span>
				                </div>
								<div>{this.state.intro}</div>
								<button class="products-btn">{props.key == 0 ?
									"下载地址":"进入链接"}</button>
							</div>
						</div>

						<div class="products-right" style = {{backgroundImage:`url(${this.state.img})`}}></div>
					</div>
					
				</div>
		);
	}
}