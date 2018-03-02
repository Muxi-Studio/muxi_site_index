import {h,render,Component} from 'preact';
import style from './petal.scss'

export default class Petal extends Component{
    constructor(props){
        super();
       
    }
    
    
    render({},{}){
        return(
            
                <div className = "fallingLeaves">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <span style = "position:relative;left:80%"></span>
                <span style = "position:relative;left:35%;top:15%;"></span>
                <span  style = "position:relative;left:25%;top:5%;"></span>
                <span style = "position:relative;left:40%;top:15%;"></span>
                <span  style = "position:relative;left:30%;top:5%;"></span>
                <span  style = "position:relative;left:45%;top:10%;"></span>
                <span style = "position:relative;left:65%;top:10%;"></span>
                <span style = "position:relative;left:55%;top:15%;"></span>
                </div>
               
       
        )
       
    }
}
