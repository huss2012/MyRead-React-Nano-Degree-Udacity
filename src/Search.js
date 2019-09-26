import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BooksList from './BooksList.js';
import * as BooksAPI from './BooksAPI.js';

class Search extends Component{
  //I defined a state that contains The Books returnd from the API and query for the input:
  state={
    searchBooks: [],
    query: ''
  }
  //This is the search method:
searchMethod = (query) => {
  //Update the query with the inputed query:
  this.setState({
    query: query
  })
  //Check if no query:
  !query ?
  //Update the books with empty array []:
    this.setState ({
      searchBooks: []
    })
  :
  //If there is a query use the search method in the BooksAPI file:
  BooksAPI.search(query)
  //promise to return the books:
  .then((books) => {
    //Map through them to give them proprity
    books.map((book) => (
      //give them a proprity of shelf with value of 'none':
      book.shelf = 'none',
      //New compaier between the books on the home page with the ones that are returned from the BooksAPI:
      this.props.booksOnHomePageShelfs.forEach((bookOnHomePageShelf) =>
      //if the returned book id is equals to the id of the book in the home page => make the value of the shelf proprity equals:
        book.id === bookOnHomePageShelf.id && (book.shelf = bookOnHomePageShelf.shelf)
    )
    ))
    //then Update the page with the books returnd from BooksAPI:
    this.setState({
      searchBooks: books
    })
  })
  //If there is an error Update the page with nothing:
  .catch(error => this.setState({searchBooks: [] }))
}
  render(){
    return(
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.searchMethod(event.target.value)}
                />

              </div>
            </div>
            <div>
            {this.state.searchBooks.map((SearchBook) => (
              <BooksList
              key={SearchBook.id}
              shelfChanger={this.props.shelfChanger}
              Book={SearchBook}
              BookShelf={SearchBook.shelf}
              />
            ))}
            </div>
          </div>
      </div>
    )
  }
}

export default Search;
