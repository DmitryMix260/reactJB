import React from "react";


class Clock extends React.Component {
    constructor(props) {
        super (props);
        this.state =  {date: new Date()};
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return <>
            <div className="clock"> 
                <p>Timer on Class</p>
            </div>
            <div>Now {this.state.date.toLocaleTimeString()}</div>            
            </>
    }
}


export default Clock