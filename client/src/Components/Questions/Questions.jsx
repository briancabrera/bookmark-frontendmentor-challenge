import React from 'react'
import Question from './Question/Question'
import "./questions.scss"

export default function Questions() {
  return (
    <section className="questions">
        <div className="wrapper">
            <h2>Frequently Asked Questions</h2>
            <p>              
                Here are some of our FAQs. If you have any other questions you'd like
                answered please feel free to email us.     
            </p>
            <div className="carousel">
                <div className="items">
                    <Question title="What is Bookmark?"/>
                    <Question title="How can I request a new browser?"/>
                    <Question title="Is there a mobile app?"/>
                    <Question title="What about other Chromium browsers?"/>
                </div>
            </div>
            <button>More Info</button>
        </div>
    </section>
  )
}
