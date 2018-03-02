import {h,render,Component} from 'preact';
import './join.scss'
import button from '../../../static/image/join_button.png'
import picture from '../../../static/image/join2.png'
import Petal from '../petal/petal'
export default class Join extends Component{
    constructor(props){
        super();
       
    }
    handleJoin(){
        window.location = 'https://baidu.com';
    }
    render({},{}){
        return(
            <div>
                {/* <div className = "fallingLeaves">
                <span></span>
                <span></span>
                <span style = "position:relative;left:90%"></span>
                <span style = "position:relative;left:5%;top:15%;"></span>
                <span  style = "position:relative;left:10%;top:5%;"></span>
                <span  style = "position:relative;left:15%;top:10%;"></span>
                <span style = "position:relative;left:85%;top:10%;"></span>
                <span style = "position:relative;left:95%;top:8%;"></span>
                </div> */}
                <Petal />
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