document.addEventListener("DOMContentLoaded", function() {

const bookListContainer = document.getElementById("list")
const bookInfoContainer = document.getElementById("show-panel")

  fetch('http://localhost:3000/books')
    .then((response)=> {return response.json()})
    .then((bookJsonData)=>{
      bookJsonData.forEach((book)=>{
        let newBook = new Book(book)
        bookListContainer.innerHTML += newBook.renderBook()
      })
    })

  //on click of book link, show book info in show panel
  bookListContainer.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
      let bookId = event.target.id.split("-")[1]
      let bookClicked = Book.all.find((book)=>{
        return book.id == bookId
      })
      console.log(bookClicked)
      bookInfoContainer.innerHTML = bookClicked.renderInfo()
    }

  })

  //onclick of like, send patch request
  bookInfoContainer.addEventListener("click",(event)=>{
    let bookId = event.target.dataset.id
    let bookToEdit = Book.all.find((book)=>{
      return book.id == bookId
    })
      if(document.getElementById("like-button").innerText === "like"){
        bookToEdit.users.push({'id': 1, 'username': 'pouros'})
        fetch(`http://localhost:3000/books/${bookId}`, {
          method: "PATCH",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            users: bookToEdit.users
          })
        })
        .then(response => response.json())
        bookInfoContainer.innerHTML = bookToEdit.renderInfo()
        document.getElementById("like-button").innerText = "unlike"
      } else if(document.getElementById("like-button").innerText === "unlike") {
        debugger;
      }

  })





});
