import {h,render,Component} from 'preact';
import './join.scss'
import config from './picture-config.js'


export default class Join extends Component{
    constructor(props){
        super();
        this.state.picture = config.picture.img
    }
    render({},{picture}){
        <div>
            <img src = {picture} className = "background-img" />
            <button className="join-button"></button>
        </div>
    }
}