import {h,render,Component} from 'preact';
import './join.scss'
// import config from './picture-config.js'
 import picture from '../../../static/image/join2.png'

export default class Join extends Component{
    constructor(props){
        super();
        //this.state.picture = config.img
        // console.log('into')
    }
    render({},{}){
        return(
        <div className = "background-img" >
            <img src = {picture} />
            {/* <button className="join-button">1</button> */}
        </div>
        )
       
    }
}