import React from "react";
import oddslib from "oddslib";

class BettingCalculator extends React.Component {
  state = { value: "" };

  handleChangeDecimal = (e) => {
    this.setState({
      valueDecimal: e.target.value,
    });
  };
  handleChangeMoneyline = (e) => {
    this.setState({
      valueMoneyline: e.target.value,
    });
  };

  handleSubmitMoneyline = (e) => {
    e.preventDefault();
    var moneyline = oddslib
      .from("decimal", this.state.valueDecimal)
      .to("moneyline");

    this.setState({
      moneyline: moneyline,
    });
  };
  handleSubmitDecimal = (e) => {
    e.preventDefault();
    var decimal = oddslib
      .from("moneyline", this.state.valueMoneyline)
      .to("decimal");

    this.setState({
      decimal: decimal,
    });
  };

  render() {
    return (
      <div>
        <h1>Odds Converter</h1>
        <div>
          <h4>Convert Decimal To Moneyline Odds</h4>
          <form onSubmit={this.handleSubmitMoneyline.bind(this)}>
            <input
              type="number"
              value={this.state.valueDecimal}
              placeholder="Decimal"
              onChange={this.handleChangeDecimal}
            />
            <input type="submit" value="Convert" />
            <br></br>
            <p>{this.state.moneyline}</p>
          </form>
        </div>
        <div>
          <h4>Convert Moneyline To Decimal Odds</h4>
          <form onSubmit={this.handleSubmitDecimal.bind(this)}>
            <input
              type="number"
              value={this.state.valueMoneyline}
              placeholder="Moneyline"
              onChange={this.handleChangeMoneyline}
            />
            <input type="submit" value="Convert" />
            <br></br>
            <p>{this.state.decimal}</p>
          </form>
        </div>
      </div>
    );
  }
}

export default BettingCalculator;
