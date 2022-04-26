export function createUser(name,email,password)
{    
    var users = JSON.parse(localStorage.getItem('users'));
    if(users == null){users = [];}
    else{
      for(var i = 0; i < users.length; i++) //check if email already exists
      {
        if(users[i].email === email){
          return  alert('Email already exists');
        }
      }
    }

    //verify if email is valid
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      return  alert('Invalid email');
    }
    

    if(users.length != 0){
      var lastId = users[users.length -1].id + 1;
    }else{
      var lastId = 0;
    }

    //add user to array
    users.push({id:lastId, name: name, email: email, password: password});

    //save array to local storage
    localStorage.setItem('users', JSON.stringify(users));

    //return integer and string as object
    return  alert('Account created successfully');
}

export function loginUser(email,password)
{
  if(email === '' || password === ''){return StatusLoginUser.EmptyFields;}

  var users = JSON.parse(localStorage.getItem('users'));
  
  if(users == null){ return  {status: 0, message: 'There are no accounts'};}

  for(var i = 0; i < users.length; i++) //check if email already exists
  {
    if(users[i].email === email && users[i].password === password)
    {
      
      localStorage.setItem('sessionUser', JSON.stringify(users));
      return  {status: 1, message: 'success'};
    }
  }
  
  return  {status: 0, message: 'Email or password is incorrect'};
}