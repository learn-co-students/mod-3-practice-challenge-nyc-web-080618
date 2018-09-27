document.addEventListener("DOMContentLoaded", function() {
   const list=document.getElementById('list')
   const showPanel=document.getElementById('show-panel')
   fetch('http://localhost:3000/books')
   .then(res=>res.json())
   .then(data=>{
     data.forEach(obj=> new Book(obj))
     list.innerHTML=Book.render_lists()
   })

   list.addEventListener('click',e=>{
     const book=Book.find(e.target.dataset.id)
     showPanel.innerHTML=book.render_detail()
   })

   showPanel.addEventListener('click',e=>{
      if (e.target.name==="button") {
        const book=Book.find(e.target.dataset.id)
        if (!book.users.some(user=>user.id===1)) {
          fetch(`http://localhost:3000/books/${book.id}`,{
            method:"PATCH",
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
            body:JSON.stringify({users:book.users.concat({"id":1, "username":"pouros"})})
          }).then(res=>res.json())
          .then(data=>{
            book.users=data.users
            console.log(book.users);
            showPanel.innerHTML=book.render_detail()
          })
        } else {
          alert("You already read this book!")
        }
        }
      else if (e.target.name==="delete") {
        const book=Book.find(e.target.dataset.id)
        fetch(`http://localhost:3000/books/${book.id}`,{
          method:"DELETE",}).then(res=>res.json())
          .then(data=>{
            Book.delete_by_id(book.id)
            list.innerHTML=Book.render_lists()
            showPanel.innerHTML=""
          })
      }

   })//end of click read book

});
