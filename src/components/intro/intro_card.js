import { h, render, Component } from "preact";
import style from "./intro.scss";

export default class Card extends Component {
  constructor(props) {
    super();
  }

  handleImageError() {
    this.img.src = "https://static.muxixyz.com/workbench/avatar/14.png";
  }

  render(props, { photo }) {
    let positionColor = "rgb(170, 170, 170)";
    if (props.info.position === "组长") {
      positionColor = "rgb(253, 172, 31)";
    } else if (props.info.position !== "组员") {
      positionColor =
        "linear-gradient(to right, rgb(29,99,158), rgb(57,179,161))";
    }
    return (
      <div className="intro-card-father">
        <div className="intro-card">
          {/* <div className = "intro-photo" style = {{backgroundImage:`url(${props.info.photo})`}}></div>  */}
          <div className="intro-photo">
            <img
              src={props.info.photo}
              ref={img => {
                this.img = img;
              }}
              onError={this.handleImageError.bind(this)}
            />
          </div>

          <div className="intro-position" style={{ background: positionColor }}>
            {props.info.position}
          </div>
          <div className="intro-name">姓名：{props.info.name}</div>
          <div className="intro-tag">组别：{props.tag}</div>
          <div className="intro-content">
            <div className="intro-words-container">
              <div className="intro-words">介绍</div>
              {props.info.intro}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
