document.addEventListener("DOMContentLoaded", () => {
  const booksList = document.getElementById('list');
  const bookShow = document.getElementById('show-panel')
  Adapter.getBooks()
    .then(bookJsons => {
      bookJsons.forEach( bookJson => {
        let book = new Book(bookJson)
        booksList.innerHTML += `<p class="book-title" id="book-${book.id}">${book.title}</p>`;
      })
    }) // end Adapter.getDogs().then

  booksList.addEventListener('click', event => {
    if(event.target.className === 'book-title'){
      const bookId = event.target.id.split('-')[1]
      const book = Book.find(bookId);
      bookShow.innerHTML = book.render()
    }
  }); // booksList AEL click

  bookShow.addEventListener('click', event => {
    if(event.target.className === 'like-button'){
      const bookId = event.target.id.split('-')[2]
      let book = Book.find(bookId);
      if(document.getElementById(`like-book-${book.id}`).innerText === 'Like This Book'){
        Adapter.likeABook(book).then(bookJson => {
          Object.assign(book, bookJson)
          bookShow.innerHTML = book.render()
          document.getElementById(`like-book-${book.id}`).innerText = 'Unlike This Book'
        })
      } else {
        Adapter.unlikeABook(book).then(bookJson => {
          Object.assign(book, bookJson)
          bookShow.innerHTML = book.render()
          document.getElementById(`like-book-${book.id}`).innerText = 'Like This Book'
        })
      }
    }
  })

}); // DOMContentLoaded
