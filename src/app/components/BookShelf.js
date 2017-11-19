import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    opacity: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 1 })
    }, 600)
  }

  render() {
    let { books, title, updateShelf } = this.props
    books.sort((sortBy('title')))

    return (
      <div className="bookshelf fade" style={{ opacity: this.state.opacity }}>
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} updateShelf={updateShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf