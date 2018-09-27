document.addEventListener("DOMContentLoaded", function() {

//step 1 get
  const bookList = document.getElementById('list');

  fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(bookData => {
      bookList.innerHTML = bookData.map(bookObj => {
        let newBook = new Book(bookObj);
        return newBook.renderTitle();
      }).join("")
    })

//step 2 display
    const bookInfo = document.getElementById("show-panel");

    bookList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI"){
        let bookId = event.target.id.split("-")[1];
        let targetBook = allBooks.find(book => book.id == bookId);
        bookInfo.innerHTML = targetBook.renderInfo();
      }
    })

    bookInfo.addEventListener("click", (event) => {
      if (event.target.type === "button"){
        let bookId = event.target.id.split("-")[1];
        let targetBook = allBooks.find(book => book.id == bookId);

        if (targetBook.users.find(user => user.id === 1)){
          // bookInfo.children[4].innerHTML = targetBook.renderUsers();
          // setTimeout(function(){ alert("You read this already") }, 0);
          //line 32 & 33 is for the step before BONUS!!! BONUS part will overwrite this.
          let currentUser = targetBook.users.find(user => user.id === 1);
          let position = targetBook.users.indexOf(currentUser);
          targetBook.users.splice(position, 1)
          fetch(`http://localhost:3000/books/${bookId}`, {
            method: "PATCH",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              users: targetBook.users
            })
          }).then(response => response.json())
          bookInfo.children[4].innerHTML = targetBook.renderUsers();
        } else {
          fetch(`http://localhost:3000/books/${bookId}`, {
            method: "PATCH",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              users: [...targetBook.users, {id: 1, username: "pouros"}]
            })
          }).then(response => response.json())
          targetBook.users = [...targetBook.users, {id: 1, username: "pouros"}];
          bookInfo.children[4].innerHTML = targetBook.renderUsers();
        }
      }
    })







});
