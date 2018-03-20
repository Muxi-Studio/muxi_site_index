import {h,render,Component} from 'preact';
import './join.scss'
import button from '../../../static/image/join_button.png'
import picture from '../../../static/image/join2.png'
import Petal from '../petal/petal'
export default class Join extends Component{
    constructor(props){
        super();
       
    }
    componentDidMount(){
        this.img.onmousedown = ()=>{
            return false;
        }
    }
    handleJoin(){
        window.location = 'https://baidu.com';
    }
    render({},{}){
        return(
            <div ondragstart="return false">
                <Petal />
                <div className = "join-word">
                    <p>
                    <strong> 校外:</strong>
                    <br />
                    17年暑假，上海科技大学Hackinit,共100多支<br />参赛队伍，木犀第9；<br />
                    17年下半年，华中科技大学Dorahack，共20多支<br />参赛队伍，木犀第3；<br />
                    <br />
                    <strong>校内：</strong>
                    <br />
                    华师匣子最高安装量破万
                    <br />
                    <br />
                    <strong>
                    加入我们，与木犀一起书写未来
                    </strong>
                    </p>
                    
                </div>
                <div className = "background-img"  >
                    <img src = {picture} className = 'background-star' ref = {(img)=>{this.img = img}}  />    
                </div>
             
            <div className = 'background-button'>
                <img src = {button} className = 'background-button-inner' onClick = {this.handleJoin.bind(this)}/>
            </div>
        </div>
        )
       
    }
}