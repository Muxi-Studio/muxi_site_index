import {h,render,Component} from 'preact';
import './join.scss'
import button from '../../../static/image/join_button.png'
import picture from '../../../static/image/join2.png'

export default class Join extends Component{
    constructor(props){
        super();
        //this.state.picture = config.img
        // console.log('into')
    }
    handleJoin(){
        window.location = 'https://baidu.com';
    }
    render({},{}){
        return(
            <div>
                <div className = "background-img" >
                    <img src = {picture} className = 'background1'/>    
                </div>
            <div className = 'background-button'>
                <img src = {button} className = 'background2' onClick = {this.handleJoin.bind(this)}/>
            </div>
        </div>
        )
       
    }
}