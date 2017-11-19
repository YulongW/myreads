import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../../api/BooksAPI'

class SearchBooks extends Component {
  state = {
    books: []
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }
  
  searchBook(term) {
    if (term) {
      BooksAPI.search(term).then((books) => {
        if (!books.error) {
          this.setState({ books })
        } else {
          this.setState({
            books: []
          })
        }
      })
    }
  }

  handleBlur(event) {
    this.searchBook(event.target.value)
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.searchBook(event.target.value)
    }
  }

  render() {
    let { books } = this.state
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>
            <i className="material-icons">clear</i>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" autoFocus required
              placeholder="Search by title or author"
              onBlur={(event) => this.handleBlur(event)}
              onKeyPress={(event) => this.handleKeyPress(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} updateShelf={this.updateShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks