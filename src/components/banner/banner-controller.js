import { h, render, Component } from 'preact';
import style from './banner.scss'
import config from './const.js'
import ConItem from './banner-con-item.js'

export default class BannerController extends Component{
	constructor(props) {
	    super();
	    this.state.current = props.current
	}
	componentWillMount(){
		var items = []
		config.forEach(e =>{
			items.push(e.product)
		})
		this.setState({ items })		
	}
	switchLeft = () => {
		this.props.update(-1)
	};
	switchRight = () => {
		this.props.update(1)
	};
	render(props,{items}) {
		var class1 = "products-item products-center"
		var class2 = "products-item"
		return (
			<div class="products-bottom">
				<div class="products-controller">
					<div class="controller-btn btn-left" onClick={this.switchLeft}></div>
					<div class="products-cnt-text">
						<div class="text" style={{
							transitionDuration: '.8s',
							width: 184 * props.count + 'px',
							left: 368 - props.current * 184 + 'px'}}>
							{ items.map( (item, i) => (
							<div className={`${props.current === i ? class1:class2}`}>{item}</div>
						)) }
						</div>
					</div>
					<div class="controller-btn btn-right" onClick={this.switchRight}></div>
				</div>
			</div>
		);
	}
}