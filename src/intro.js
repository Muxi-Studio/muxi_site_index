import { h, render, Component } from "preact";
import "./styles/base.scss";
import Header from "./components/header/header.js";
import Card from "./components/intro/intro_card";
import Intro from "./components/intro/intro";
/** @jsx h */

class App extends Component {
  render() {
    return (
      <app>
        <Header />
        <Intro />
        <div className="beian intro">
          <a href="http://www.beian.miit.gov.cn/">鄂ICP备19024133号</a>
        </div>
      </app>
    );
  }
}

render(<App />, document.body);
