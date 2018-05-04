import React, {Component} from 'react'
import Book from './Book.js'

class BookShelf extends Component {
    render(){
        const title = this.props.title
        const books = this.props.books
        const onStatusChange = this.props.onStatusChange
        
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  books.map((book) => (
 
                      <Book 
                        title = {book.title}
                        author = {book.author}
                        image = {book.image}
                        onStatusChange = {onStatusChange}
                        key = {book.image}
                        book = {book}
                      />
         
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShelf