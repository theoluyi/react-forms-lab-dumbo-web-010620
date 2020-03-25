import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)

    this.setState({
      [event.target.name]: event.target.value // NICE!!! exactly right
    })
    // event.target.name === "username" ? 
    // this.setState({username: event.target.value}) 
    // :
    // this.setState({password: event.target.value}) 

    // this.setState({
    //   username: event.target.value
    // })
  }

  // ok soo i was trying to handle submit in app.js
  // when i should have been doing it here

  handleSubmit = (event) => {
    event.preventDefault() 
    if (!this.state.username || !this.state.password) return 
    
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username}
              onChange={this.handleChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handleChange}
          />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
