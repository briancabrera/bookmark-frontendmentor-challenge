import React from 'react'
import "./landing.scss"

export default function Landing() {
  return (
    <section className="landing">
        <div className="wrapper">
            <div className="grid">
                <div className="img-container">
                    <img src={"../../images/illustration-hero.svg"} alt="" />
                </div>
                <div className="content">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>
                    A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="buttons">
                        <button className="btn">Get it on Chrome</button>
                        <button className="btn" id="gray">Get it on Firefox</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
