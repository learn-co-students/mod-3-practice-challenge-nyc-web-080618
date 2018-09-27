const Book=(()=>{
  const lists=[]

  return class  {
    constructor(obj) {
      this.id=obj.id
      this.title=obj.title
      this.description=obj.description
      this.img_url=obj.img_url
      this.users=obj.users
      lists.push(this)
    }

   static render_lists(){
     return lists.map(book=>`<li data-id="${book.id}">${book.title}</li>`).join("")
   }

  static find(id){
    return lists.find(book=>book.id==id)
  }

  static delete_by_id(id){
    const index= lists.indexOf(Book.find(id))
    lists.splice(index,1)
  }

  render_detail(){
      return `<h2>${this.title}</h2>
           <img src="${this.img_url}" alt="">
        <p>${this.description}</p>
        ${this.users.map(user=>`<h4>${user.username}</h4>`).join("")}
        <button data-id=${this.id} type="button" name="button">READ BOOK</button>
        <button data-id=${this.id} type="button" name="delete">DELETE BOOK</button>
      `
  }



   }
 }

)()
