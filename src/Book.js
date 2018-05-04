import React, {Component} from 'react'

class Book extends Component {
    state = {
        option: "",
    }

    render(){
        const title = this.props.title;
        const author = this.props.author;
        const image = this.props.image;
        const onStatusChange = this.props.onStatusChange
        const book = this.props.book
        return (
          <li>
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
              <div className="book-shelf-changer">
                <select onChange = {(event) => onStatusChange(event.target.value,book)}>
                  <option value="none" disabled>Move to...</option>
                  <option value="Currently Reading">Currently Reading</option>
                  <option value="Want to Read">Want to Read</option>
                  <option value="Read">Read</option>
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

