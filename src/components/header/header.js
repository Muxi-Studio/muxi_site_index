import { h, render, Component } from 'preact';
import style from './header.scss'
/** @jsx h */


export default class Header extends Component {
	state = {
		header:[{
				name: '组别介绍',
				style: 'header-primary',
				route: '/intro'
			},
			{
				name: '产品展示',
				style: 'header-primary',
				route: '/product'
			},{
				name: '木犀团队',
				style: 'header-center',
				route:'/'
			},{
				name: '成员介绍',
				style: 'header-primary',
				route: '/member'
			},{
				name: '加入我们',
				style: 'header-primary',
				route: '/join'
			}]
	};
	componentWillMount(){
		var route = window.location.pathname
		var stateCopy = Object.assign({}, this.state);
		var active = stateCopy.header.find(item =>{
			return item.route === route
		})
		if(active.style === 'header-primary'){
			active.style += ' header-active'
		}
		this.setState({ stateCopy })
	}
	render({}, { header }) {
		return (
			<header>
				<div class="header-wrap">
					{ header.map( (item ,i)=> (
						<div class={item.style}><a className ={` header-word  ${i===2?"team-name":""}` } href={item.route === "/"?null:item.route}>{item.name}</a></div>
					)) }
				</div>
			</header>
		);
	}
}