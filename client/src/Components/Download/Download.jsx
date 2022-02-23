import React from 'react'
import Card from "./Card/Card"
import "./download.scss"

export default function Download() {
  return (
    <section className="downloads">
        <div className="wrapper">
            <h2>Download the extension</h2>
            <p>
                We've got more browsers in the pipeline. Please do let us know if you've
                got a favourite you'd like us to prioritize.
            </p>
            <div className="grid">
                <Card logo="chrome" browser="Chrome" version="62"/>
                <Card logo="firefox" browser="Firefox" version="55" id="firefox"/>
                <Card logo="opera" browser="Opera" version="46" id="opera"/>
            </div>
        </div>
    </section>
  )
}
