import React, { Component } from "react";
import "../../components/Main/Main.css";
import { ProgressPriceContainer, BarProgress } from "./ProgressBarStyles";
import Header from "../Header/Header";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      // initial, campul pentru introducerea pretului este necompletat, el este gol
      price: "",
      // initial procentele de progres sunt 0
      percentage: 0,
      totalPrice: 167,
    };
  }
  handleUpdatePrice(event) {
    const newPrice = event.target.value;
    this.setState({ price: newPrice });
  }
  handleUpdateProgress(event) {
    // prevenirea compoetamentului default a formularului
    event.preventDefault();
    if (this.state.price === 0) {
      return this.state.percentage === 0;
    } else if (this.state.price !== 0) {
      this.setState({
        // am folosit biblioteca Math.cbrt->deoarce m-am gandit ca rata de progres sa creasca exponential cu pretul introdus de utilizator
        percentage: this.state.percentage + Math.cbrt(this.state.price),
        totalPrice: Number(this.state.totalPrice) - Number(this.state.price),
      });
    }
  }
  render() {
    return (
      <div className="main">
        {/* pasez pretul total ca props catre componenenta de Header */}
        <Header totalPrice={this.state.totalPrice} />
        <ProgressPriceContainer>
          {/* pasez state-ul initial ca props, pentru a fi ulterior preluate */}
          <BarProgress percentage={this.state.percentage}></BarProgress>
        </ProgressPriceContainer>
        <div className="content-main">
          <p className="paragraf-main">
            Only 3 days left{" "}
            <span className="span-main">to fund this project.</span>
          </p>
          <article className="article-main">
            <p>
              Join the <span className="span-second">42</span> other donors who
              have already supported this project. Every dollar helps.
            </p>
          </article>
        </div>
        <form onSubmit={(event) => this.handleUpdateProgress(event)}>
          <div className="price-field">
            <input
              type="text"
              name="price"
              id="price"
              onChange={(event) => this.handleUpdatePrice(event)}
              value={this.state.price}
              placeholder="$"
            />
            <em className="question-form">Why give $50?</em>
          </div>
          <button type="submit" className="button-form">
            Give Now
          </button>
        </form>
      </div>
    );
  }
}

export default Main;
