import React, { Component } from 'react';

class Runner extends Component {

    state ={
        distance: 0,
        time: 0,
        recent: {
            distance: 0,
            time: 0,
            average: 0
        }
      }


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState(
            
        )
      }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Hey, I'm hitting enter here!");
        this.setState(

        )
    }

    render() {
        return (
            <div>
                <h1>React Track Runner</h1>
                <div className='header'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="number" placeholder="Miles Ran" onChange={(event) => this.handleChange(event, 'recent')}/>
                        <input type="number" placeholder="Time Spent Running" onChange={(event) => this.handleChange(event, 'recent')}/>
                    <input type="submit" value="Add New Run" />
                    </form>
                    <h3>Recent Run</h3>
                        <h5>Distance Ran: {this.state.recent.distance}
                        <br/>
                        Time: {this.state.recent.time}
                        <br/>
                        Average: {this.state.recent.average}</h5>
                </div>
            </div>
        )
    }
}



export default Runner;