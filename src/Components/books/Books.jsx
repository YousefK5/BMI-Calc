import React from "react";

const Books = (props) => {
  const books = props.books;
  return (
    <div className="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Language</th>
            <th scope="col">Edition</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr>
                <td>{book.language}</td>
                <td>{book.edition}</td>
                <td>{book.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
