import React from 'react'

function Search(props) {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-body"> 
        <div className="form-group">
          <form>
            <label 
              htmlFor="searchInput"
              className="col-form-label col-form-label-lg">
                Search for a book
            </label>
            <input 
              value={props.bookSearch}
              onChange={props.handleInputChange}
              id="searchInput" 
              type="text" 
              className="form-control form-control-lg"
              placeholder="Search for a book title"
            />
            <button 
              className="btn btn-info mt-3"
              type="submit"
              onClick={props.handleFormSubmit}>
                Search
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
