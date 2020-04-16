import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Results from '../components/Results'
import API from "../utils/API";

function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <div>
        <Results />
      </div>
    );
  }


export default Detail;
