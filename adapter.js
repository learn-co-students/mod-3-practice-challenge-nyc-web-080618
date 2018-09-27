
class Adapter{


  static getBooks(){
    return fetch("http://localhost:3000/books")
    .then(response => response.json())
  }

  static editBooks(obj){
    return fetch (`http://localhost:3000/books/${obj.id}`,
      {method: "PATCH",
       headers: {
          'Accept': 'application/json', //client will accept JSON
          'Content-Type': 'application/json' //i am sending u a content type of JSON
        },
        body: JSON.stringify({
          users: [...obj.users, {id: 69, username: "heyo"}]
        })


    }).then(response=> response.json())



  }






}
