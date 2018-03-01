import {h,render,Component} from 'preact'
import style from './intro.scss'
export default class Card extends Component{
    constructor(props){
        super();
    }
    render(props,{}){
        return(
        <div className = "intro-card-father">
        <div className ="intro-card">
            <div className = "intro-photo" style = {{backgroundImage:`url(${props.info.photo})`}}></div>
            <div className = "intro-position" style={{backgroundColor:props.info.position === '组长'?"rgb(253, 172, 31)": "rgb(170, 170, 170)" }}>{props.info.position}</div>
            <div className = "intro-name">姓名：{props.info.name}</div>
            <div className = "intro-tag">组别：{props.tag}</div>
            <div className = 'intro-content'>
            <div className='intro-words'>
            <h2>座右铭：</h2>
            {props.info.intro}
            </div>
            </div>
        </div>
        
        
   
        </div>
        )
        
    }
}