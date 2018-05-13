import React, {Component} from 'react'
class Book extends Component {
    render(){
        const book = this.props.book
        console.log(book);
        
        const title = book.title
        const author = book.authors
        let image, shelf
        const onShelfChange = this.props.onShelfChange
        
        book.shelf ?
        shelf = book.shelf 
        :
        shelf = "none"
  
        book.imageLinks ? 
        image = book.imageLinks.thumbnail
        :
        image  = ""
        
        return (
          <li>
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
              <div className="book-shelf-changer">
                <select value ={shelf} onChange = {(event) => onShelfChange(event.target.value,book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
          </div>
        </li>
        )
    }
}

export default Book

