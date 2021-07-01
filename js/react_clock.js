function FormattedDate(props) {
    // 오전 00:00:00
    // return <h2>{props.date.toLocaleTimeString()}</h2>;

    // 00:00:00
    const hours = String(props.date.getHours()).padStart(2, "0");
    const minutes = String(props.date.getMinutes()).padStart(2, "0");
    const seconds = String(props.date.getSeconds()).padStart(2, "0");

    return <h2>{`${hours}:${minutes}:${seconds}`}</h2>;
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