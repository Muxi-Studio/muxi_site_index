import { h, render, Component } from 'preact';
import Join from './components/join/join.js'
/** @jsx h */


class App extends Component {   
    render() {
        return (
            <app>
                <Join />
            </app>
        );
    }
}

render(<App />, document.body);