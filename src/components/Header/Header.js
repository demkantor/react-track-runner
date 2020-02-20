import React, { Component } from 'react';

class Header extends Component {
    state ={
        currentDistance: '',
        currentTime: '',
        recent: {
            distance: 0,
            time: 0,
            average: 0
        },
        longest: {
            distance: 0,
            time: 0,
            average: 0
        },
        fastest: {
            distance: 0,
            time: 0,
            average: 0
        }
      }


    handleChangeDistance = (event, propertyName) => {
        console.log(this.state.currenDdistance);
        console.log(event.target.value);
        this.setState({
            currentDistance : event.target.value
        });
      }

    handleChangeTime = (event, propertyName) => {
        console.log(this.state.time);
        console.log(event.target.value);
        this.setState({
            currentTime : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('working hard here!', this.state);
        this.setState({
            currentDistance: '',
            currentTime: '',
                recent: {
                    distance : Number(this.state.currentDistance),
                    time : Number(this.state.currentTime),
                    average: (Number(this.state.currentDistance) / Number(this.state.currentTime)),
            }
        })
        if (Number(this.state.longest.distance) < Number(this.state.currentDistance)){
            this.setState({
              longest: {
                distance: Number(this.state.currentDistance),
                time: Number(this.state.currentTime),
                average: (Number(this.state.currentDistance) / Number(this.state.currentTime)),
            }
        })
        }
    }


    render() {  
        return (
            <div>
                <h1>React Track Runner</h1>
                <div className='header'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="number" value={this.state.currentDistance} placeholder="Miles Ran" onChange={this.handleChangeDistance} />
                        <input type="number" value={this.state.currentTime} placeholder="Time Spent Running" onChange={this.handleChangeTime} />
                    <input type="submit" value="Add New Run" />
                    </form>
                    <h3>Recent Run</h3>
                        <h5>Distance Ran: {this.state.recent.distance}
                        <br/>
                        Time: {this.state.recent.time}
                        <br/>
                        Average: {this.state.recent.average}</h5>
                    <h3>Longest Run</h3>
                        <h5>Distance Ran: {this.state.longest.distance}
                        <br/>
                        Time: {this.state.longest.time}
                        <br/>
                        Average: {this.state.longest.average}</h5>
                    <h3>Fastest Run</h3>
                        <h5>Distance Ran: {this.state.fastest.distance}
                        <br/>
                        Time: {this.state.fastest.time}
                        <br/>
                        Average: {this.state.fastest.average}</h5>
                </div>
            </div>
        )
    }
}

export default Header;