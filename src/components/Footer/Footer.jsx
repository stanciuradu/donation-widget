import React, { Component } from "react";
import "../../components/Footer/Footer.css";
export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      isDonationDisplay: false,
    };
  }
  handleSaveDonation() {
    this.setState({ isDonationDisplay: true });
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-button">
          <button type="button" onClick={() => this.handleSaveDonation()}>
            Save for later
          </button>
          <button type="button">Tell your friends</button>
        </div>
        <div className="donation-display">
          {this.state.isDonationDisplay ? (
            <em className="donation-save">Your donation is save!</em>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Footer;
