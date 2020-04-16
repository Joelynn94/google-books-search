import React from 'react'
import './styles.css'

function Results() {
  return (
    <div>
      <h2>Results</h2>
      <div className="card card-result text-white bg-secondary mb-3">
        <div className="card-img">
          <img src="../favicon.ico" alt=""/>
        </div>
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">Some results here</p>

          <button className="btn btn-primary">View</button>
          <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  )
}

export default Results