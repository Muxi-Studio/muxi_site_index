import {h,render,Component} from 'preact'
import style from './intro.scss'
export default class Card extends Component{
    constructor(props){
        super();
        console.log(props.info)
        this.state = {
            info : props.info
        }
    }
    render(props,{info}){
        return(
            <div class ="intro-card">
            <div class = "intro-photo" style = {{backgroundImg:info.photo}}></div>
            <div class = "intro-position" style={{backgroundColor: info.position === '组长'?"rgb(253, 172, 31)": "rgb(170, 170, 170)" }}>{info.position}</div>
            <div class = "intro-name">姓名：{info.name}</div>
            <div class = "intro-tag">组别：{info.tag}</div>
        </div>
        )
        
    }
}