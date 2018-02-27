import { h, render, Component } from 'preact';
import './styles/base.scss'
import Header from './components/header/header.js'
import Card from './components/intro/intro_card'
import Intro from './components/intro/intro'
/** @jsx h */


class App extends Component {   
    render() {
        return (
            <app>
                 <Header />
                 <Intro />
            </app>
        );
    }
}

render(<App />, document.body);