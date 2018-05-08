import React, { PureComponent } from 'react';
import axios from 'axios';

class Calculator extends PureComponent {
  constructor() {
    super()
    this.state = {
      input: '',
      output: '',
      error: '',
    }
  }

  render() {
    const { input, output, error } = this.state

    return (
      <main>

        <button onClick={() =>
          this.setState({
            input: '',
            error: ''
          })}>
          Clear
        </ button>
      </main >
    );
  }
}


export default Calculator;