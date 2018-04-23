import { h, render, Component } from "preact";
import "./styles/base.scss";
import Header from "./components/header/header.js";
import Join from "./components/join/join.js";
/** @jsx h */

class App extends Component {
  render() {
    return (
      <app>
        {/* <Header /> */}
        <Join />
      </app>
    );
  }
}

render(<App />, document.body);
