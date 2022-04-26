import { createUser } from './api/hello';
import Link from 'next/link'
import { useState } from 'react';
//-----------------------



 export default function Home() {
      
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [psw, setPsw] = useState('');
  
  const handleUser = (e) => { setUser(e.target.value) };
  const handleEmail = (e) => { setEmail(e.target.value) };
  const handlePsw = (e) => { setPsw(e.target.value) };
    
    

      const register = () =>
      {
        if(user=== '' || email === '' || psw === '')
        {
          alert('Fields cannot be empty');
          return;
        }

        var response = createUser(user,email,psw);

        if(response.status){alert(response.message);}
        else{alert(response.message);}

      }



  return (
    <div className="h-full">
        <div className="content-center">
          <div className="flex flex-col ">
            <div className="flex content-center">
              <h1>Registracion</h1>
            </div>
              
              <div id="d2">
                <label>Username</label><br></br>
                <input id="inpUser" type="text"  placeholder="Enter your Username" name="user"  onChange={handleUser} required></input><br></br>
                
                <label id="email">Email</label><br></br>
                <input id="inpEmail" type="text"  placeholder="Enter Email" name="email" onChange={handleEmail} required></input><br></br>
                
                <label for="psw">Password</label><br></br>
                <input id="inpPsw" type="password"  placeholder="Enter Email" name="psw" onChange={handlePsw} required></input><br></br>
                
                <button id="btnInsert"  onClick={register}>Register</button>
              
              </div>
                <br></br>
                  <div className="flex content-center">
                    <Link href="/"><a>I already have an account</a></Link>
                  </div>
            </div>
        </div>
    </div>
    
  )
}