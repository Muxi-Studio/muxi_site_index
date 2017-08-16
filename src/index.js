import { h, render, Component } from 'preact';
import './styles/main.scss'
/** @jsx h */


class App extends Component {
	state = {
		text: 'hello!'
	
};
	
	render({}, { text }) {
		return (
			<app>
				<header>
					<h1>
						{ text } Preact Home Page
					</h1>
				</header>
			</app>
		);
	}
}

render(<App />, document.body);
