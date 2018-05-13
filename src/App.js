import React from 'react'
import BookShelf from './BookShelf.js'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    options: ["currentlyReading","wantToRead","read"],
    searchedBooks: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      }) 
    })
  }

  onShelfChange = (e,item) => {
    BooksAPI.update(item,e).then(() => {
      BooksAPI.get(item.id).then((r)=>{
        this.setState((prevState)=>({
          books: prevState.books.filter( book => book !== item).concat([r]),
          searchedBooks: prevState.searchedBooks.filter( book => book !== item)
        }))
      })
    }) 
  }

  searchBooks = (term) => {
    BooksAPI.search(term).then((books)=>{
     books?
      books.length?
      this.setState((prevState)=>({
        searchedBooks: books
      }))
      :
      this.setState({
        searchedBooks:[]
      })
      :
      this.setState({
        searchedBooks:[]
      })
      
    })
  }

  render() {
    return (
      <div className="app">
      <Route path = '/search' render = {() => (
         <div className="search-books">
         <div className="search-books-bar">
           <Link to= "/" className = "close-search">Close</Link>
           <div className="search-books-input-wrapper">
             <input type="text" placeholder="Search by title or author" onChange={(event)=>this.searchBooks(event.target.value)}/>
  
           </div>
         </div>
         <div className="search-books-results">
         <BookShelf title = "Found" 
                    books = {this.state.searchedBooks} 
                    onShelfChange = {this.onShelfChange} 
                    key = "found"/>
         </div>
       </div>
      )} />

          <Route exact path = '/' render = {() => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

                {
                  this.state.options.map((option)=>(
                    <BookShelf title = {option}
                    key = {option}
                    books = {this.state.books.filter(book => book.shelf === option)}
                    onShelfChange = {this.onShelfChange}
                    />
                  ))}

              </div>
            </div>
            <div className="open-search">
            <Link to = '/search'>Add Contact </Link>
            </div>
          </div>
          )} />
      </div>
    )
  }
}

export default BooksApp
