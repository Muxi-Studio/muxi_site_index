import { h, render, Component } from 'preact';
import style from './banner.scss'
/** @jsx h */

export default class Banner extends Component {	
	render() {
		return (
			<div class="products-wrap">
				<div class="products-intro" id="products-intro">
					<div class="products-content products-on">
						<div class="products-left">
							<div class="products-left-content">
								<h1>华师匣子</h1>
								<div class="products-des">
					                <span class="products-des-txt">ios应用</span>
				                </div>
								<div>华师学子专属利器，具有查看课表、查询成绩等功能，轻松扫除在校疑难症</div>
								<button class="products-btn">下载地址</button>
							</div>
						</div>
						<div class="products-right"></div>
					</div>
				</div>
			</div>
		);
	}
}