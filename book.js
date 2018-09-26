class Book{
  constructor(bookJsonObj){
    this.id = bookJsonObj.id,
    this.title = bookJsonObj.title,
    this.description = bookJsonObj.description,
    this.img = bookJsonObj.img_url,
    this.users = bookJsonObj.users,
    Book.all.push(this)
  }

  renderBook(){
    return `
    <li id="a-${this.id}">
    ${this.title}
    </li>
    `
  }

  renderInfo(){
    return `
    <div id="info-${this.id}">
      <h4>${this.title}</h4>
      <img src="${this.img}">
      <p>${this.description}</p>
      <h5>Users:</h5>
      <ul id="users">${this.iterateUsers()}</ul>
      <button type="button" id="like-button" data-id="${this.id}">like</button>
    </div>
    `
  }

  iterateUsers(){
    if(this.users){
      let userList = [];
      userList =
      this.users.map((user)=>{
        return `<li>${user.username}</li>`
      }).join('')
      return userList
    } else {
      return "no one has liked this book yet. be the first!"
    }
  }


}

Book.all = [];
