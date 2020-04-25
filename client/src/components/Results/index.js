import React from 'react'
import './styles.css'

function Results(props) {


  return (
    <div>
      <h2>Results</h2>

        <div className="card card-result text-white bg-secondary mb-3" key={props.id}>
          <div className="card-img">
            <img src={props.volumeInfo.imageLinks.thumbnail} alt=""/>
          </div>
          <div className="card-body">
            <h3 className="card-title">{props.volumeInfo.title}</h3>
            <p className="card-text">{props.volumeInfo.description}</p>

            <button 
              className="btn btn-success"
>
              Save
            </button>
          </div>
        </div>
        )}

    </div>
  )
}

export default Results