class Adapter {
  static getBooks(){
    return fetch("http://localhost:3000/books")
    .then((resp)=> resp.json())
  }

  static addUser(Obj){
    return fetch(`http://localhost:3000/books/${Obj.id}`, {
       method: 'PATCH',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(Obj)
    }).then(resp => resp.json())
  }
}
