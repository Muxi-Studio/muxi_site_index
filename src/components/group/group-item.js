import { h, render, Component } from "preact";
import style from "./group.scss";
import group from "./const.js";
/** @jsx h */

export default class Group extends Component {
  constructor(props) {
    super();
    this.state = group[props.key];
  }
  render(props, {}) {
    return (
      <div class="products-content">
        <div class="products-left">
          <div class="products-left-content">
            <h1>{this.state.name}</h1>
            <div>{this.state.intro}</div>
            <br />
            <div>
              <p>学习技能:</p>
              {this.state.learn}
            </div>
          </div>
        </div>
        <div
          class="products-right"
          style={{ backgroundImage: `url(${this.state.img})` }}
        />
      </div>
    );
  }
}
