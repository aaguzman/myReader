import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import BookShelf from './BookShelf.js'

class Search extends Component {

    render(){
        const searchBooks = this.props.onSearch
        const clearSearch = this.props.clearSearch
        const onShelfChange = this.props.onShelfChange
        const books = this.props.books
   
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className = "close-search" onClick= {() => clearSearch()}>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=>searchBooks(event.target.value)}/>
     
              </div>
            </div>
            <div className="search-books-results">
            <BookShelf  
                       books = {books} 
                       onShelfChange = {this.props.onShelfChange} 
                       key = "found"/>
            </div>
          </div>
        )
    }
}

export default Search