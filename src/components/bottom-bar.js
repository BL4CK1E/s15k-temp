import React, { Component } from 'react'

import './bottom-bar.css'

export default class BottomBar extends Component {
  render() {
    return (
      <div className="bottom-bar-container">
        <div className="btn" id="contact-button">
            <a href="tel:0468800957">
                Contact Us
            </a>
        </div>
        <div className="btn" id="book-button">
            <a href="https://www.fresha.com/studio-15-korora-902q7uc5/booking?menu=true">
                Book Online
            </a>
        </div>
      </div>
    )
  }
}
