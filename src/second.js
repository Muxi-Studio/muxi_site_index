import { h, render, Component } from 'preact';

class Clock extends Component {
    constructor() {
        super();
        // 设置初始的时间
        this.state.time = Date.now();
    }

    componentDidMount() {
        // 每秒都更新一下时间
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
    }

    componentWillUnmount() {
        // 当不再渲染，停止计时器
        clearInterval(this.timer);
    }

    render(props, state) {
        let time = new Date(state.time).toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

// 将一个时钟对象渲染在 < body > 标签:
render(<Clock />, document.body);

