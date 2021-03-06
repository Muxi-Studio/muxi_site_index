import { h, render, Component } from "preact";
import style from "./banner.scss";
import config from "./const.js";

export default class BannerController extends Component {
  constructor(props) {
    super();
    this.state = {
      current: props.current,
      flag: "left"
    };
  }
  componentWillMount() {
    var items = [];
    config.forEach(e => {
      items.push(e.product);
    });
    this.setState({ items });
  }
  // componentDidMount(){
  // 	this.timer = setInterval(()=>{
  // 		if(this.props.current===this.props.count-1){
  // 			this.setState({flag : 'left'});
  // 		}else if(this.props.current===0){
  // 			this.setState({flag : 'right'});
  // 		}
  // 		this.state.flag === 'right'?this.switchRight():this.switchLeft();
  // 	},5000)

  // }
  // componentWillUnmount(){
  // 	clearInterval(this.timer)
  // }
  switchLeft = () => {
    this.props.update(-1);
  };
  switchRight = () => {
    this.props.update(1);
  };
  chooseProduct = i => {
    this.props.choose(i);
  };
  render(props, { items }) {
    var class1 = "products-item products-center";
    var class2 = "products-item";
    return (
      <div class="products-bottom">
        <div class="products-controller">
          <div class="controller-btn btn-left" onClick={this.switchLeft} />
          <div class="products-cnt-text">
            <div className="products-camera-bgr">
              <div className="products-camera-bgr-inner"> </div>
              <div className="products-camera-bgr-inner2" />
            </div>
            <div
              class="text"
              style={{
                transitionDuration: ".8s",
                width: 184 * props.count + "px",
                left: 368 - props.current * 184 + "px"
              }}
            >
              {items.map((item, i) => (
                <div
                  className={`${props.current === i ? class1 : class2}`}
                  onClick={this.chooseProduct.bind(this, i)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div class="controller-btn btn-right" onClick={this.switchRight} />
        </div>

        <div className="products-camera-containner">
          <div className="products-camera"> </div>
          <div
            className="prodcuts-icon"
            style={{ backgroundImage: `url(${props.icon})` }}
          />
        </div>
      </div>
    );
  }
}
