import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log('did update');
  }

  handleOnAdd = () => {
    setTimeout(() => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
      // eslint-disable-next-line
      console.log('1st: ', this.state.count);
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
      // eslint-disable-next-line
      console.log('2st: ', this.state.count);
    }, 0);
    this.setState(prevState => {
      // eslint-disable-next-line
      console.log('3st: ', prevState.count);
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        {count}
        <button type="button" onClick={this.handleOnAdd}>
          Add 1
        </button>
      </div>
    );
  }
}

export default Counter;
