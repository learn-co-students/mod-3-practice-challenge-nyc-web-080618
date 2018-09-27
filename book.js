class Book {
  constructor(bookObj){
    this.id = bookObj.id;
    this.title = bookObj.title;
    this.description = bookObj.description;
    this.img_url = bookObj.img_url;
    this.users = bookObj.users;
    allBooks.push(this);
  }

  renderTitle(){
    return `<li id=book-${this.id}>${this.title}</li><br>`
  }

  renderInfo(){
    return `<h2>${this.title}</h2>
    <img src=${this.img_url}>
    <p id=dep-${this.id}>${this.description}</p>
    <br>
    <div id=user-${this.id}></div>
    <button type="button" id=read-${this.id}>Read Book</button>
    `
  }

  renderUsers(){
    return this.users.map(user => {
      return `<div>${user.username}</div><br>`
    }).join("");
  }

}

allBooks = [];
