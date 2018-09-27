
  book_store = []

class Book{

  constructor(bookObj){
    this.id = bookObj.id
    this.title = bookObj.title
    this.description = bookObj.description
    this.img_url = bookObj.img_url
    this.users = bookObj.users
    book_store.push(this)
  }


  static findBookById(id){
    return book_store.find(book => book.id == id)
  }


  renderUsers(){
    return this.users.map((user)=>{
      return (`
        <p>${user.username}</p>
        `)

    }).join("")


  }

  updateBook(newObj){
    this.users = newObj.users
  }


  renderTitle(){
    return (`
      <li class="book-title" data-id=${this.id}>${this.title}</li>
      `)
  }

  renderDetails(){
    return(`
      <h2>${this.title}</h2>
      <img src=${this.img_url}>
      <p>${this.description}</p>
      <p>${this.renderUsers()}</p>
      <button class="add-button" data-id=${this.id}>Add As User </button>
      `)
  }






}
