import React, { Component } from "react";
import "../../components/Main/Main.css";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      // initial, campul pentru introducerea pretului este necompletat, el este gol
      price: "",
    };
  }
  handleUpdatePrice(event) {
    const newPrice = event.target.value;
    this.setState({ price: newPrice });
  }
  handleMoveProgress(event) {
    // prevenirea compoetamentului default a formularului
    event.preventDefault();
    let price = 0;
    const interval = setInterval(Progress(), 10);
    function Progress() {
      if (price === 0) {
        clearInterval(interval);
      } else {
        price++;
        // props.elem.style.width = width + '%';
      }
    }
  }
  render() {
    return (
      <div className="main">
        <div className="progress-price">
          <div className="bar-progress"></div>
        </div>
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
        <form onSubmit={(event) => this.handleMoveProgress(event)}>
          <div className="price-field">
            <label htmlFor="price" className="label-price">
              $
            </label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={(event) => this.handleUpdatePrice(event)}
              value={this.state.price}
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
