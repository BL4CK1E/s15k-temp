import React, { Component } from 'react'

import './opening-hours.css'

export default class OpeningHours extends Component {
  render() {
    return (
      <div className="opening-hours-wrapper">
        <div class="opening-hours-left">
            <p>Mon-Tues</p>
            <p>Wed</p>
            <p>Thurs</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
        </div>
        <div class="opening-hours-right">
            <p>09:00AM - 04:30PM</p>
            <p>Closed</p>
            <p>09:00AM - 07:00PM</p>
            <p>09:00AM - 04:30PM</p>
            <p>Bookings Only</p>
            <p>Closed</p>
        </div>
      </div>
    )
  }
}
