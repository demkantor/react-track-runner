import React, { Component } from 'react';

class Header extends Component {
    state ={
        distance: {
            recent: '',
            longest: 0,
            fastest: 0
        },
        time: {
            recent: '',
            longest: 0,
            fastest: 0
        },
        average: {
            recent: 0,
            longest: 0,
            fastest: 0
        }
      }


    handleChangeDistance = (event, propertyName) => {
        console.log(this.state.distance);
        console.log(event.target.value);
        this.setState({
          distance: {
            ...this.state.distance,
            [propertyName]: event.target.value,
          }
        });
      }

    handleChangeTime = (event, propertyName) => {
        console.log(this.state.time);
        console.log(event.target.value);
        this.setState({
            time: {
                ...this.state.time,
                [propertyName]: event.target.value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('working hard here!', this.state);
        this.setState({

        })
    }


    render() {
        return (
            <div>
                <h1>React Track Runner</h1>
                <div className='header'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="number" value={this.state.distance.recent} placeholder="Miles Ran" onChange={(event) => this.handleChangeDistance(event, 'recent')}/>
                        <input type="number" placeholder="Time Spent Running" onChange={(event) => this.handleChangeTime(event, 'recent')}/>
                    <input type="submit" value="Add New Run" />
                    </form>
                    <h3>Recent Run</h3>
                        <h5>Distance Ran: {this.state.distance.recent}
                        <br/>
                        Time: {this.state.time.recent}
                        <br/>
                        Average: {this.state.average.recent}</h5>
                    <h3>Longest Run</h3>
                        <h5>Distance Ran: {this.state.distance.longest}
                        <br/>
                        Time: {this.state.time.longest}
                        <br/>
                        Average: {this.state.average.longest}</h5>
                    <h3>Fastest Run</h3>
                        <h5>Distance Ran: {this.state.distance.fastest}
                        <br/>
                        Time: {this.state.time.fastest}
                        <br/>
                        Average: {this.state.average.fastest}</h5>
                </div>
            </div>
        )
    }
}

export default Header;