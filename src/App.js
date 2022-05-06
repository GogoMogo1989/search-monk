import LoadingMask from './LoadingMask'
import Book from './Book'
import React, {useEffect, useState} from 'react'

function App() {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [input, setInput] = setState

  async function fetchBooks () {
    const response = await fetch('http://www.devweb.com/v1/api/books')
    const responseJson = await response.json()
    console.log(responseJson)
    setBooks(responseJson)
    setLoading(false)
  }

  useEffect(()=>{
    setLoading(true)
    fetchBooks()
  }, [])

  return (
    <div className="App">
      {loading ? <LoadingMask />: 
        books.map(({title, author, year})=>{<Book title={title} year={year} author={author} }
    </div>
  );
}

export default App;
