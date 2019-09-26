import React from 'react';

// Functional component becouse we do not need to re-render the book:
function BooksList (props){

  return(
    <div className= 'list-books-content'>
    <div className='bookshelf-books'>
    <ol className="books-grid">
      <li className='books-grid'>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:
              //Show the cover page of the page:
               `url(${props.Book.imageLinks.smallThumbnail})` }}></div>
               {/*This part is for handling change the shelf of the books*/}
            <div className="book-shelf-changer">
              <select value={props.BookShelf} onChange={(event) => props.shelfChanger(props.Book , event.target.value)}>
                <option value="disabled" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title" key={props.Book.title}>{props.Book.title}</div>
          <div className="book-authors" key={props.Book.authors}>{props.Book.authors}</div>
        </div>
      </li>
    </ol>
  </div>
</div>
  )

}


export default BooksList;
