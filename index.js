document.addEventListener("DOMContentLoaded", function() {

const bookListContainer = document.getElementById("list")
const bookDescriptionContainer = document.getElementById("show-panel")

fetch('http://localhost:3000/books')
  .then((response) => {
    return response.json()
  })
  .then((jsonBook) => {
    console.log(jsonBook)

    jsonBook.forEach((book) => {
      let newBook =  new Book(book)
      bookListContainer.innerHTML += newBook.render()
    })
  })

  bookListContainer.addEventListener("click", function(event) {
      console.log(event)

      //if clicked on the particular li, find the first book
      if(event.target.tagName === "LI") {
        let bookId = event.target.id.split("-")[1] // revisit
        let bookTarget = Book.all.find((book) => {
          return book.id == bookId
          // debugger
        })
      bookDescriptionContainer.innerHTML = bookTarget.renderBookProfile()
      }
  })

  bookDescriptionContainer.addEventListener("click", function(event) {
    let bookId = event.target.dataset.id
    let edit = Book.all.find((book) => {
      return book.id == bookId
    })


        edit.users.push({
          'id': 1,
          'username': 'pouros'
        })
        fetch(`http://localhost:3000/books/${bookId}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
            users: edit.users
          })
        })
        .then(response => response.json())
        bookDescriptionContainer.innerHTML = edit.renderBookProfile()

    })


}); 
