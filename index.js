const store = []
document.addEventListener("DOMContentLoaded", function() {

  const displayBooks = document.getElementById('list-panel')
  const displayList = document.getElementById('list')
  const displayMain = document.getElementById('show-panel')
  Adapter.getBooks()
  .then(json =>
      json.forEach((book) => {
        store.push(book)
        displayList.innerHTML += `<li id="${book.id}">${book.title}</li>`
      }) //end of for each
    ) // end of then

  displayBooks.addEventListener("click", (event) => {
    const bookId = event.target.id
    const specificBook = store.find(book => bookId == book.id )
    displayMain.innerHTML = `
      <h3>${specificBook.title}</h3>
      <img src=${specificBook.img_url}>
      <p>${specificBook.description}</p>
      <button id="${specificBook.id}button" type="button">Read Me</button>
    `
    specificBook.users.forEach(user => {
      displayMain.innerHTML+= `<div><li>${user.username}</li></div>`
    }) //end of forEach
  }) //end of displaybooks event listener

  displayMain.addEventListener("click", (event) =>{
    if (event.target.tagName === "BUTTON"){
      const bookId = parseInt(event.target.id)
      const specificBook = store.find(book => bookId == book.id )
      const allUsers = []
      displayMain.innerHTML = `
        <h3>${specificBook.title}</h3>
        <img src=${specificBook.img_url}>
        <p>${specificBook.description}</p>
        <button id="${specificBook.id}button" type="button">Read Me</button>
      `
      specificBook.users.forEach(user => {
        allUsers.push(user)
        displayMain.innerHTML+= `<div><li>${user.username}</li></div>`
      }) //end of forEach
        displayMain.innerHTML += '<li>pouros</li>'
        person = {"id":1, "username":"pouros"}
        specificBook.users.push(person)
        console.log(specificBook);
        Adapter.addUser(specificBook)
    } //end of if statement for BUTTON
  }) //end displayMain event listener



}) //end of dom event listener
