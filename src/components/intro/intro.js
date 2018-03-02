import { h, render, Component } from 'preact'
import './intro.scss'
import info from './info.js'
import Card from './intro_card'
import Introgroup from './intro-controller'
import Petal from '../petal/petal';
export default class Intro extends Component{
    constructor(props){
        super();
       
        this.state = {
            information : info,
            currentTag:'后台',
            currentGroup:0
            
        }
        //console.log(this.state.information[this.state.currentGroup])
    }
    selectGroup = (e) =>{
    
        this.setState(
            {
            currentGroup:e,
            currentTag:this.state.information[e].tag
        })
    }
    render({},{information,currentGroup,currentTag}){
        return(
            <div>
              <Petal />
              <div className = "intro-card-containner">
                   {information[currentGroup].people.map((person,index)=>{
                   return <Card info ={person} tag={currentTag} /> 
                   })}
             </div>
                
               <Introgroup select = {this.selectGroup} current = {currentGroup} />
           </div>
        )
       
    }
}
