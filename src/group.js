import { h, render, Component } from 'preact';
import './styles/base.scss'
import Header from './components/header/header.js'
import Group from './components/group/group.js'
/** @jsx h */


class App extends Component {   
    render() {
        return (
            <app>
                <Header />
                <Group />
            </app>
        );
    }
}

render(<App />, document.body);