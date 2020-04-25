import React, { useState, useEffect } from "react";
import Jumbotron from '../components/Jumbotron'
import Search from '../components/Search'
import Results from '../components/Results'
import API from "../utils/API";


function Home() {
  // Setting our component's initial state
  const [bookSearch, setBookSearch] = useState('')
  const [books, setBooks] = useState([])

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    setBookSearch(event.target.value.trim());
  };

  function getBooks(bookSearch) {
    // Loads all books and sets them to books
    API.getGoogleSearchBook(bookSearch)
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
    setBooks(res.data)
    .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    getBooks()
  };

  function handleBookSave () {
    API.saveBook({
      id: res.data,
      title: res.data.volumeInfo.title,
      authors: res.data.volumeInfo.authors,
      description: res.data.volumeInfo.description,
      link: res.data.volumeInfo.previewLink,
      img: res.data.volumeInfo.imageLinks.thumbnail
    })
    .then(res => {
      getBooks(res)
    })
    .catch(err => console.log(err));
  }

    return (
      <main className="container mt-3">
        <Jumbotron />
        <Search 
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />

        {books.map(book => (
          <Results 
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors.join(', ')}
            description={book.volumeInfo.description}
            link={book.volumeInfo.previewLink}
            image={book.volumeInfo.imageLinks.thumbnail}
            onClick={() => handleBookSave(book.id)}
          />
        ))}

      </main>
    );
  }


export default Home;
