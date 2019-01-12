import React, { Component } from 'react'

import './opening-hours.css'

export default class OpeningHours extends Component {
  render() {
    return (
      <div className="opening-hours-wrapper">
        <div class="opening-hours-left">
            <p>Mon-Fri</p>
            <p>Sat</p>
            <p>Sun</p>
        </div>
        <div class="opening-hours-right">
            <p>09:00AM - 01:30PM</p>
            <p>02:00PM - 05:00PM</p>
            <p>08:30 AM - 02:00PM</p>
            <p>Closed</p>
        </div>
      </div>
    )
  }
}
