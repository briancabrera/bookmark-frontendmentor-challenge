import React from 'react'

export default function Card({logo, browser, version}) {
  return (
    <div className="card">
        <img src={require(`../../../images/logo-${logo}.svg`)} alt="" />
        <h3>Add to {browser}</h3>
        <p>Minimun version {version}</p>
        <button>Add & Install Extension</button>
    </div>
  )
}
