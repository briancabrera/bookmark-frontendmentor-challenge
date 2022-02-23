import React from 'react'

export default function Question({title}) {
  return (
        <details className="content">
            <summary className="title">
                {title}
            </summary>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
        </details>
  )
}
