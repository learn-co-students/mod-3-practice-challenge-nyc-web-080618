class Book {
constructor(bookObj){
  this.id = bookObj.id,
  this.title = bookObj.title,
  this.description = bookObj.description,
  this.img = bookObj.img_url,
  this.users = bookObj.users,
  Book.all.push(this)

} //end of constructor

  render() {
    return `
          <li id="a-${this.id}">
            ${this.title}
          </li>
            `
  }

  renderBookProfile() {
    let userList;
    userList = this.users.map((user) => {return`<li>${user.username}</li>`}).join('')
    return `
            <div id="bookInfo-${this.id}">
            <h3>${this.title}</h3>
            <img src="${this.img}">
            <p>${this.description}</p>
            <h2>Users:</h2>
            <ul id="users">${userList}</ul>
            <button type="button" id="likeButton" data-id=${this.id}>Like</button>
            </div>
            `
  }
} //end of class
Book.all = []
