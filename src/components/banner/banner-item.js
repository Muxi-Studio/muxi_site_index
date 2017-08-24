import { h, render, Component } from 'preact';
import style from './banner.scss'
import config from './const.js'

export default class BannerItem extends Component{
	constructor(props) {
	    super();
	    this.state = config[props.key-1]
	}
	render(props,{}) {
		return (
				<div class="products-intro" id="products-intro">
					<div class="products-content products-on">
						<div class="products-left">
							<div class="products-left-content">
								<h1>{this.state.product}</h1>
								<div class="products-des">
					                <span class="products-des-txt">{this.state.type}</span>
				                </div>
								<div>{this.state.intro}</div>
								<button class="products-btn">下载地址</button>
							</div>
						</div>
						<div class="products-right"></div>
					</div>
				</div>
		);
	}
}