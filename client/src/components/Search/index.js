import React from 'react';

function Search(props) {
  return (
    <div className='card text-white bg-secondary mb-3'>
      <div className='card-body'>
        <div className='form-group'>
          <form onClick={props.onFormSubmit}>
            <label
              htmlFor='searchInput'
              className='col-form-label col-form-label-lg'
            >
              Search for a book
            </label>
            <input
              value={props.searchBook}
              onChange={props.onInputChange}
              id='searchInput'
              type='text'
              className='form-control form-control-lg'
              placeholder='Search for a book title'
            />
            <button className='btn btn-info mt-3' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
