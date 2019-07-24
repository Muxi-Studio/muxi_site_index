import { h, render, Component } from "preact";
import "./join.scss";

import Petal from "../petal/petal";
export default class Join extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.img.onmousedown = () => {
      return false;
    };
  }
  handleJoin() {
    window.location = "http://cn.mikecrm.com/uBXlK1v";
  }
  render({}, {}) {
    return (
      <div>
        <Petal />
        <div ondragstart="return false" className="join-web">
          <div className="background-img">
            <img
              src="https://static.muxixyz.com/index_site/join2.png"
              className="background-star"
              ref={img => {
                this.img = img;
              }}
            />
          </div>

          <div className="background-button">
            <img
              src="https://static.muxixyz.com/index_site/join_button.png"
              className="background-button-inner"
              onClick={this.handleJoin.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
