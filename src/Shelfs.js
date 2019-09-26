import React,{ Component } from 'react';
import BooksList from './BooksList.js';
import { Link } from 'react-router-dom';
//this component will generate the name of shelfs and it will display the BooksList
class Shelfs extends Component{
//This function is to correct the format of the shelfs name:
shelfsNameCorrection = (nameOfTheShelf) => {
  let correctNameOfTheShelf = nameOfTheShelf.split(/(?=[A-Z])/).join(' ');
  return correctNameOfTheShelf.charAt(0).toUpperCase() + correctNameOfTheShelf.slice(1);
}

  render(){
    //Shelfs name to match the shelf value of the books:
    const shelfs = ['currentlyReading', 'wantToRead', 'read']
    return(
      <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {//Iterate through the shelfs name to render them:
            shelfs.map((shelf) => (
              <div className='bookshelf' key={shelf}>
              {/*I use the function to currect the format of the shelf name*/}
                <h2 className="bookshelf-title" key={shelf}>{this.shelfsNameCorrection(shelf)}</h2>
                {/*Checking the value of the book's shelf to render it under the correct shelf*/}
                {this.props.Books.filter((book) => book.shelf === shelf)
                  //Iterate through the Returned book array from the filter to render the image title and the author:
                  .map((book) => (
                  <BooksList
                  Book={book}
                  key={book.id}
                  BookShelf={shelf}
                  shelfChanger={this.props.shelfChanger}
                  />
                ))
                }
              </div>

            ))
          }
        </div>
        {/*This is the Link to the search page to add books*/}
        <Link to='/search' className="open-search"> <button>Add a book</button></Link>
      </div>
    )
  }
}
export default Shelfs;
