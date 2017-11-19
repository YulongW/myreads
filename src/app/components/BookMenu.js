import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDCSimpleMenu } from '@material/menu'

class BookMenu extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  
  state = {
    menu: null
  }

  componentDidMount() {
    this.setState({
      menu: new MDCSimpleMenu(document.querySelector("#" + this.getMenuId()))
    })
  }

  getMenuId() {
    return `book-menu-${this.props.book.id}`
  }

  render() {
    let { book, updateShelf } = this.props
    let { menu } = this.state

    return (
      <div className="book-menu">
        <button className="mdc-fab material-icons mdc-fab--mini" aria-label="Menu" onClick={() => menu.open = !menu.open}>
          <span className="mdc-fab__icon">
            menu
          </span>
        </button>

        <div id={this.getMenuId()} className="mdc-simple-menu" tabIndex="-1">
          <ul className="mdc-simple-menu__items mdc-list " role="menu" aria-hidden="true">
            <li className="mdc-list-item" role="menuitem" tabIndex="0" onClick={() => updateShelf(book, "currentlyReading")}>
            Currently Reading
            </li>
            <li className="mdc-list-item" role="menuitem" tabIndex="0" onClick={() => updateShelf(book, "wantToRead")}>
            Want to Read
            </li>
            <li className="mdc-list-item" role="menuitem" tabIndex="0" onClick={() => updateShelf(book, "read")}>
            Read
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BookMenu