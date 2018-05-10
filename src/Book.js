import React, {Component} from 'react'

class Book extends Component {
    state = {
        option: "",
    }

    render(){
        const book = this.props.book
        const title = book.title;
        const author = book.authors;
        const image = book.imageLinks.thumbnail;
        
        const onShelfChange = this.props.onShelfChange
        
        return (
          <li>
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
              <div className="book-shelf-changer">
                <select onChange = {(event) => onShelfChange(event.target.value,book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
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

