import { h, render, Component } from 'preact';
import style from './banner.scss'

export default class BannerController extends Component{
	componentWillMount(){
	
	}
	render(props,{}) {
		return (
			<div class="products-item">{props.item}</div>
		);
	}
}