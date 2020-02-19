import React, { Component } from 'react';

class Header extends Component {
    state ={
        distanceRecent: 0,
        distanceLongest: 0,
        distanceFastest: 0,
        distanceIn: 0,
        timeRecent: 0,
        timeLongest: 0,
        timeFastest: 0,
        timeIn: 0,
        avgRecent: 0,
        avgLongest: 0,
        avgFastest: 0
      }

    handleChangeDistance = (event) => {
        console.log(this.state.distance);
        console.log(event.target.value);
        this.setState({
            distanceRecent: event.target.value
        })
    }

    handleChangeTime = (event) => {
        console.log(this.state.time);
        console.log(event.target.value);
        this.setState({
            timeRecent: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state.distanceIn);
        event.preventDefault();
        this.setState({
            distanceRecent: this.state.distanceIn,
            timeRecent: this.state.timeIn,
            avgRecent: this.state.avg
        })
    }


    render() {
        return (
            <div>
                <h1>React Track Runner</h1>
                <div className='header'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="number" name="milesRan" placeholder="Miles Ran" onChange={this.handleChangeDistance}/>
                        <input type="number" name="time" placeholder="Time Spent Running" onChange={this.handleChangeTime}/>
                    <input type="submit" value="Add New Run" />
                    </form>
                    <h3>Recent Run</h3>
                        <h5>Distance Ran: {this.state.distanceRecent}
                        <br/>
                        Time: {this.state.timeRecent}
                        <br/>
                        Average: {this.state.avgRecent}</h5>
                    <h3>Longest Run</h3>
                        <h5>Distance Ran: {this.state.distanceLongest}
                        <br/>
                        Time: {this.state.timeLongest}
                        <br/>
                        Average: {this.state.avgLongest}</h5>
                    <h3>Fastest Run</h3>
                        <h5>Distance Ran: {this.state.distanceFastest}
                        <br/>
                        Time: {this.state.timeFastest}
                        <br/>
                        Average: {this.state.avgFastest}</h5>
                </div>
            </div>
        )
    }
}

export default Header;