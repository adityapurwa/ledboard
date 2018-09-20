import React from "react";

interface Props {
  data: number[][];
}

export default class Ledboard extends React.Component<Props> {
  render() {
    return (
      <table className="ledboard">
        <tbody>
          {this.props.data.map((rows, rowIndex) => (
            <tr key={`R_${rowIndex}`}>
              {rows.map((cell, colIndex) => (
                <td
                  key={`C_${colIndex}`}
                  className={cell === 1 ? "cell-active" : "cell-inactive"}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
