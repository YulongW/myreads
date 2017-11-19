import React, { Component } from 'react'
import BookShelf from '../components/BookShelf'
import * as BooksAPI from '../../api/BooksAPI'

class ListBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getBooksByShelf(books, type) {
    return books.filter((book) => type === book.shelf)
  }

  // this has to be written as an arrow function and cannot be written as updateShelf(book, shelf) {}
  // otherwise "this" will not bind correctly, and this.state will not be accessible in the child component
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter((bookIn) => bookIn.id !== book.id).concat([ book ])
      }))
    })
  }

  render() {
    let { books } = this.state

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MY READS</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            books={this.getBooksByShelf(books, "currentlyReading")}
            title="Currently Reading"
            updateShelf={this.updateShelf}
          />
          <BookShelf
            books={this.getBooksByShelf(books, "wantToRead")}
            title="Want To Read"
            updateShelf={this.updateShelf}
          />
          <BookShelf
            books={this.getBooksByShelf(books, "read")}
            title="Read"
            updateShelf={this.updateShelf}
          />
        </div>
      </div>
    );
  }
}

export default ListBooks