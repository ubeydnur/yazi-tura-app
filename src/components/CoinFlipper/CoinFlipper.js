import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor() {
    super();

    this.state = {
      side: "tura",
      flipping: false,
      tossInfo:{
        total:0,
        head:0,
        tail:0
      }
    };
    
  }

  handleClick = () => {
    let newSide = Math.round(Math.random()) === 1 ? 'yazi' : 'tura';

    let newTossInfo = this.updateTossInfo(newSide);

    this.setState(prevState => {
      return ({
        ...prevState,
        side: newSide,
        flipping: true,
        tossInfo: newTossInfo
      })
    });

    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  updateTossInfo = (side) => {
    let tossInfo = { ...this.state.tossInfo };
    tossInfo.total++;

    if (side === "tura") {
      tossInfo.head++
    } else {
      tossInfo.tail++
    }
    return tossInfo;
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.tossInfo.total}  </strong>
          atıştan
          <strong>  {this.state.tossInfo.head}  </strong> tura
          <strong> {this.state.tossInfo.tail} </strong> yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
