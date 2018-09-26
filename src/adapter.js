class Adapter{
  static getBooks(){
    return fetch('http://localhost:3000/books')
    .then(res => res.json())
  }

  static likeABook(book){
    if(!book.users){
      book.users = []
    }
    book.users.push({'id': 1, 'username': 'pouros'})
    return fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: book.users
      })
    }).then(res => res.json())
  }

  static unlikeABook(book){
    book.users.splice(book.users.indexOf({'id': 1, 'username': 'pouros'}), 1)
    if(book.users.length === undefined){
      book.users= []
    }
    return fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: book.users
      })
    }).then(res => res.json())
  }
}
