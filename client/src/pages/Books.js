import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron'
import Search from '../components/Search'
import Results from '../components/Results'
import API from "../utils/API";


function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  // Load all books and store them with setBooks
  useEffect(() => {
    if (!bookSearch) {
      return
    }
    loadBooks(bookSearch)
  }, [bookSearch])

  // Loads all books and sets them to books
  function loadBooks(query) {
    API.getBooks(query)
      .then(res => {
        // Checking to see if any data comes back
        if (res.data.length === 0) {
          throw new Error('No results found.')
        }
        // checking for an error message
        if (res.data.status === 'error') {
          throw new Error(res.data.message)
        }
        setBooks(res.data)
        
      })
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    setBookSearch(event.target.value.trim());
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(loadBooks(bookSearch))
  };

    return (
      <main className="container mt-3">
        <Jumbotron />
        <Search 
          results={bookSearch}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        <Results />
      </main>
    );
  }


export default Books;
