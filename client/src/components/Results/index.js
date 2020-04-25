import React, { useState } from 'react'
import API from '../../utils/API'
import './styles.css'

function Results(props) {


  return (
    <div>
      <h2>Results</h2>

      {props.books.map(result => (

        <div className="card card-result text-white bg-secondary mb-3" key={result.id}>
          <div className="card-img">
            <img src={result.volumeInfo.imageLinks.thumbnail} alt=""/>
          </div>
          <div className="card-body">
            <h3 className="card-title">{result.volumeInfo.title}</h3>
            <p className="card-text">{result.volumeInfo.description}</p>

            <button 
              className="btn btn-success"
              onClick={() => handleBookSave(result.id)}>
              Save
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Results