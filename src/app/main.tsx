import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Ledboard from './components/Ledboard';

interface States {
  data: number[][];
}

const original = [
  [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class Main extends React.Component <{}, States> {

  state = {
    data: [...original]
  };

  componentDidMount() {
    setInterval(() => {
      const translated = [];
      for (let y = 0; y < this.state.data.length; y++) {
        translated.push([...this.state.data[y]]);
      }
      for (let y = 0; y < translated.length; y++) {
        const zero = translated[y][0];
        const last = translated[y][translated[y].length - 1];

        translated[y][0] = last;
        translated[y][translated[y].length - 1] = zero;

        for (let x = 1; x < translated[y].length; x++) {
          translated[y][x - 1] = this.state.data[y][x];
        }
      }
      this.setState({
        data: translated
      })
    }, 100);
  }

  render() {
    return (<Ledboard
        data={ this.state.data }
    />)
  }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
