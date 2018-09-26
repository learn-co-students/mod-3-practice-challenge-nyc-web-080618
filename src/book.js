class Book{
  constructor(bookObj){
    this.id = bookObj.id
    this.title = bookObj.title
    this.description = bookObj.description
    this.img_url = bookObj.img_url
    this.users = bookObj.users
    Book.all.push(this)
  }

  render(){
    return (
      `
      <h1>${this.title}</h1>
      <img src=${this.img_url}>
      <p>${this.description}</p>
      <h3>Users who like this book:</h3>
      <button class="like-button" id="like-book-${this.id}">Like This Book</button>
      <ul>
        ${this.displayUsers()}
      </ul>
      `
    )
  }

  displayUsers(){
    if(this.users){
      let usersList = this.users.map(user => {
        return `<li>${user.username}</li>`
      }).join('')
      return usersList
    } else{
      return `No users like this book yet`
    }
  }

  static find(bookId){
    return Book.all.find( book => {
      return book.id == bookId
    })
  }
}

Book.all = []
