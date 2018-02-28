import { h, render, Component } from 'preact';
import style from './intro.scss'
import info from './info.js'

export default class Introgroup extends Component{
    constructor(props){
        super();
        this.state = {
            information:info,
            current:props.current
        }
      
    }
    selectTag(e){
        this.props.select(e);
    }
    render(props,{information,current}){
      return(
          <div className = "intro-controller">
            <div className = "controller-containner">
                <ul className =  "intro-tags">
                {information.map((item,index)=>{
                    return(<li>
                        <a  className ={`intro-tag ${index}  ${current == index ? 'onTag':'notOnTag'}`}   onClick={this.selectTag.bind(this,index)}>{item.tag}组</a>
                    </li>)
                    
                })}
                </ul>
            </div>
          </div>
      )
    }

}