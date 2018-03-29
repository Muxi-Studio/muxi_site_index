import { h, render, Component } from 'preact';
import './styles/base.scss'
import First from './components/first/first'
/** @jsx h */


class App extends Component {   
    render() {
        return (
            <app>
                <First />
            </app>
        );
    }
}

render(<App />, document.body);