document.addEventListener("DOMContentLoaded", ()=> {

  const book_list = document.getElementById("list")
  const full_book_display_area = document.getElementById("show-panel")
  //get books
    Adapter.getBooks()
    .then(data => {
      data.forEach((book)=>
      {new_book_obj = new Book(book)
      book_list.innerHTML += new_book_obj.renderTitle()
      })
    })

  //event for title

  book_list.addEventListener("click", display_book)

  function display_book(){
    if (event.target.className === "book-title"){
      let bookObjToDisplay = Book.findBookById(event.target.dataset.id)
      full_book_display_area.innerHTML = bookObjToDisplay.renderDetails()
    }
  }


  //event for button
  full_book_display_area.addEventListener("click", add_user)

  function add_user(){
    if (event.target.className === "add-button"){
      let bookObjToEdit = Book.findBookById(event.target.dataset.id)
      Adapter.editBooks(bookObjToEdit)
      .then(data =>{
        console.log(data)
        bookObjToEdit.updateBook(data)
        full_book_display_area.innerHTML = bookObjToEdit.renderDetails()
      })
    }
  }



















});
