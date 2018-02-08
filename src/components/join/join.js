import {h,render,Component} from 'preact';
import style from './banner.scss'
import config from 'picture-config.js'


export default class Join extends Component{
    constructor(props){
        super();
        this.state.picture = config.picture.img
    }
    render({},{picture}){
        return <BannerItem key={picture} />
    }
}