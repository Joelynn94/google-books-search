import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import Search from '../components/Search';
import Results from '../components/Results';
import API from '../utils/API';

function Home() {
  const [searchBook, setSearchBook] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (e) => {
    setSearchBook(e.target.value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get books and update books state
    event.preventDefault();
    API.searchBooks(searchBook)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  const handleBookSave = (id) => {
    const book = books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => API.searchBooks());
  };

  return (
    <main className='container mt-3'>
      <Jumbotron />
      <Search
        name='search'
        value={searchBook}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />
      {books &&
        books.map((book) => {
          return (
            <Results
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              link={book.volumeInfo.previewLink}
              image={book.volumeInfo.imageLinks.thumbnail}
              onBookSave={() => handleBookSave(book.id)}
            />
          );
        })}
    </main>
  );
}

export default Home;
