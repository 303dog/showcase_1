import React from 'react';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="name" value={this.state.value.name} onChange={this.handleChange} />
        </label>
        
          <li type='item' value={this.state.value} onChange={this.handleChange}>item:</li>
          <li>item:</li>
        
        <input type="submit" value="Submit" />
        <div>{this.state.value}</div>
      </form>
    );
  }
}

export default Dashboard