import React from 'react'
import './App.css'
import Shelfs from './Shelfs.js';
import Search from './Search.js';
import * as BooksAPI from './BooksAPI.js';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state={
    Books:[]
  }
  componentDidMount() {
    BooksAPI.getAll().then((Books) => (
      this.setState(() => ({
        Books: Books
      }))
    ))
  }
  shelfChanger = (Book, shelf) => {
    BooksAPI.update({id: Book.id}, shelf).then(() => {
      Book.shelf = shelf
      this.setState( state => ({
        Books: state.Books.filter(e => e.id !== Book.id).concat(Book)
        })
      )
    }
  )
}

  render() {
    console.log('Books', this.state.Books);
    return(
      <div>
        <Route exact path='/' render={() => (
          <Shelfs
          Books={this.state.Books}
          shelfChanger={this.shelfChanger}
          />
        )
      }
    />
        <Route  path='/search' render={() => (
          <Search
          booksOnHomePageShelfs = {this.state.Books}
          shelfChanger={this.shelfChanger}
          />
        )
      }
    />

      </div>
    )
  }
}

export default BooksApp
