import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    let { book, updateShelf } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          />
          <div className="book-shelf-changer">
            <BookMenu book={book} updateShelf={updateShelf}/>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book