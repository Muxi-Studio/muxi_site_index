import {h,render,Component} from 'preact';
import './intro.scss'
import info from './info.js'
import Card from './intro_card'

export default class Intro extends Component{
    constructor(props){
        super();
        console.log(info)
        this.state.information = info;
    }
    
    render({},{information}){
        return(
            <div>
               <Card info ={information} /> 
           </div>
        )
       
    }
}
