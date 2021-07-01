function FormattedDate(props) {
    return <h2>{props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <FormattedDate date={this.state.date} />
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('react_clock')
);