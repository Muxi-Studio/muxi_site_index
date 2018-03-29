import {h,render,Component} from 'preact';
import './first.scss'
export default class First extends Component{
    constructor(props){
        super();
       
    }
    // componentDidMount(){
    //     this.img.onmousedown = ()=>{
    //         return false;
    //     }
    // }
   
    render({},{}){
        return(
            <div  className = 'first'>
                <div className = 'first-cloud-cantainner'>
               <div className = 'first-left-cloud'></div>
               <div className = 'first-right-cloud'></div>
               </div>
           </div>
        )
       
    }
}