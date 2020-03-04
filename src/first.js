import { h, render, Component } from "preact";
import "./styles/base.scss";
import First from "./components/first/first";
/** @jsx h */

class App extends Component {
  render() {
    return (
      <app>
        <First />
        <div className="beian">
          <a href="http://www.beian.miit.gov.cn/">鄂ICP备19024133号</a>
        </div>
      </app>
    );
  }
}

render(<App />, document.body);
