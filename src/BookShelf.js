import React, {Component} from 'react'
import Book from './Book.js'

class BookShelf extends Component {
    render(){
        const title = this.props.title
        const books = this.props.books
        const onShelfChange = this.props.onShelfChange
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  books ?
                  books.map((book) => (
                      <Book 
                        key = {book.id}
                        onShelfChange = {onShelfChange}
                        book = {book}
                      />
                  ))
                  :
                  <li> No Items present</li>
                
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf