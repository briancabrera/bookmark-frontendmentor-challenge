import React from 'react'
import "./join.scss"

export default function Join() {
  return (
    <section className="join">
        <div className="wrapper">
            <small>35.000+ already joined</small>
            <h4>Stay up-to-date with what we're doing</h4>
            <form action="submit">
                <input type="text" placeholder="Enter your email address" className="email"/>
                <input type="submit" className="button" value="Contact Us"/>
            </form>
        </div>
    </section>
  )
}
