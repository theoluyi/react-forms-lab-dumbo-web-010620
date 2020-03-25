import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      // maxChars: props.maxChars
    };
  }

  // nice i've set up an infinite loop
  // the event listener in the render calls handleChange
  // handleChange calls setState()
  // setState triggers a rerender

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })

    // why is console.log lagging by one char?
    // i don't feel like analyzing why BUT i just remembered can fix
    // by putting it in the render
  }

  // MY FIRST TRY: 
  // handleChange = (event) => {
  //   // console.log(event.target.value)
  //   let newChar = event.target.value
  //   let newState = this.state.message.concat(newChar)
  //   this.setState({
  //     message: newState
  //   })
  // }

  


  render() {
    console.log(this.state.message)
    let charNumber = this.props.maxChars - this.state.message.length 

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
