import React, { useState } from "react";
import Jumbotron from '../components/Jumbotron'
import Search from '../components/Search'
import Results from '../components/Results'
import API from "../utils/API";


function Home() {
  const [ searchBook, setSearchBook ] = useState('')
  const [ books, setBooks ] = useState([])

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setSearchBook(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchBooks(searchBook)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

    return (
      <main className="container mt-3">
        <Jumbotron />
        <Search 
          name="BookSearch"
          value={searchBook}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        {books.map(book => {
          return (
            <Results 
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              link={book.volumeInfo.previewLink}
              image={book.volumeInfo.imageLinks.thumbnail}
            />
          )

        })}


      </main>
    );
  }


export default Home;
