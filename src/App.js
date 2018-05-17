import React from 'react'
import BookShelf from './BookShelf.js'
import Search from './Search.js'
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
        books,
      }) 
    })
  }

  onShelfChange = (e,item) => {
    item.shelf = e
    BooksAPI.update(item,e).then(() => {
      BooksAPI.getAll().then((books)=>{
        this.setState((prevState)=>({
          books
        }))
      })
    }) 
  }

  searchBooks = (term) => {
    BooksAPI.search(term).then((books)=>{
     books?
      books.length?(
        books.forEach(newBook => {
          this.state.books.forEach((oldBook) => {
            if(oldBook.id === newBook.id)
              newBook.shelf = oldBook.shelf 
            else
              newBook.shelf = "none"    
          }) 
        }),
        this.setState((prevState)=>({
          searchedBooks: books
        }))
      )
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

  clearSearch = () => {
    this.setState({
      searchedBooks: []
    })
  }

  render() {
    return (
      <div className="app">
        <Route path = '/search' render = {() => (
          <Search 
            books = {this.state.searchedBooks}
            onSearch = {this.searchBooks} 
            onShelfChange = {this.onShelfChange}
            clearSearch = {this.clearSearch}
            onShelfChange = {this.onShelfChange}
          />
        )} />
        <Route exact path = '/' render = {() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title = "Currently Reading"
                  key = "currentlyReading"
                  books = {this.state.books.filter(book => book.shelf === "currentlyReading")}
                  onShelfChange = {this.onShelfChange}
                />
                <BookShelf title = "Want to Read"
                  key = "wantToRead"
                  books = {this.state.books.filter(book => book.shelf === "wantToRead")}
                  onShelfChange = {this.onShelfChange}
                />
                <BookShelf title = "Read"
                  key = "read"
                  books = {this.state.books.filter(book => book.shelf === "read")}
                  onShelfChange = {this.onShelfChange}
                />  
              </div>
            </div>
            <div className="open-search">
              <Link to = '/search'>Add Contact</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}
export default BooksApp
