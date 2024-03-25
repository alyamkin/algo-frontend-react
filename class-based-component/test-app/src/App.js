import { Component, useState, createRef } from 'react';

export default function App() {
  const [shouldRender, setShouldRender] = useState(true);
  return (
    <>
      {/* <Counter startCounter={20} /> */}
      {shouldRender && <Counter />}
      <button onClick={() => setShouldRender(!shouldRender)}>
        Toggle Counter
      </button>
    </>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.startCounter ?? 0,
    };
    this.buttonRef = createRef();
  }

  componentDidMount() {
    console.log('mounted');
    console.log(this.buttonRef);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  // }

  // componentWillUnmount() {
  //   console.log('unmounting');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count < 3;
  // }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
          ref={this.buttonRef}
        >
          Increment
        </button>
        <p>Count: {this.state.count}</p>
      </>
    );
  }
}
