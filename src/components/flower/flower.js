import {h,render,Component} from 'preact';
import style from './flower.scss'

export default class Flower extends Component{
    constructor(props){
        super();
       
    }
    
    
    render({},{}){
        return(
            
                <div className = "staticLeaves">
                <span style = "position:absolute;left:15%;top:15%;opacity:1"></span>
                <span style = "position:absolute;left:20%;top:10%;background-size:50%;"></span>
                <span style = "position:absolute;left:15%;top:15%;opacity:1"></span>
                <span style = "position:absolute;left:18%;top:35%;background-size:30%;"></span>
                <span style = "position:absolute;left:35%;top:25%;background-size:50%;"></span>
                <span style = "position:absolute;left:17%;top:65%;background-size:65%;"></span>
                <span style = "position:absolute;left:45%;top:17%;background-size:71%;"></span>
                <span style = "position:absolute;left:32%;top:38%;background-size:50%;"></span>
                <span style = "position:absolute;left:27%;top:45%;background-size:65%;"></span>
                <span style = "position:absolute;left:67%;top:27%;background-size:44%;"></span>
                <span style = "position:absolute;left:85%;top:17%;background-size:50%;"></span>
                <span style = "position:absolute;left:37%;top:63%;background-size:100%;opacity:1"></span>
                <span style = "position:absolute;left:61%;top:25%;background-size:72%;"></span>
                <span style = "position:absolute;left:51%;top:61%;background-size:30%;"></span>
                <span style = "position:absolute;left:43%;top:41%;background-size:61%;"></span>
                <span style = "position:absolute;left:57%;top:63%;background-size:78%;"></span>
                <span style = "position:absolute;left:77%;top:9%;background-size:40%;"></span>
                <span style = "position:absolute;left:72%;top:2%;background-size:61%;"></span>
                <span style = "position:absolute;left:80%;top:73%;background-size:78%;"></span>
                
                </div>
               
       
        )
       
    }
}

