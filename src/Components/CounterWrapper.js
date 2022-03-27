class CounterWrapper extends React.Component {
    state = {
      count: 0,
    };
    // Increase count
    increment = () => {
      const { count } = this.state;
      return this.setState({ count: count + 1 });
    };
    // Decrease count  
    decrement = () => {
      const { count } = this.state;
      return this.setState({ count: count - 1 });
    };
    render() {
      const { count } = this.state;
      return (
        <React.Fragment>
          {this.props.render({
            increment: this.increment,
            decrement: this.decrement,
            count,
          })}
        </React.Fragment>
      );
    }
  }