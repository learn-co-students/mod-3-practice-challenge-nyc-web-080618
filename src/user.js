class User{
  constructor(userObj){
    this.id = userObj.id
    this.username = userObj.username
    User.all.push(this)
  }
}

User.all = []
