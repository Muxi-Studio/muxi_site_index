import { h, render, Component } from 'preact';
/** @jsx h */


class App extends Component {
	state = {
		text: 'hello'
	
	};
	
	render({}, { text }) {
		return (
			<app>
				<header>
					<h1>
						Preact Second Page
					</h1>
				</header>
			</app>
		);
	}
}

render(<App />, document.body);

