import React, { Component } from 'react';


class RSVP extends Component {
  render() {
    this.state = {
      works: false,
    }
    let testingState;
    if (this.state.works == true) {
      testingState = <h1>This works!</h1>
    } else {
      testingState = <h1>This too might work but no state is active</h1>
    }
    this.checkState = () => {
      this.setState({
        works: true,
      })
    };
    return (
      <div>
        <input type="text" placeholder="Your Name" />
        { testingState }
        <button onClick={this.checkState}>Flo to the ceilin</button>
      </div>
    )
  }
}

export default RSVP;