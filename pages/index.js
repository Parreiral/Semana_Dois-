import { loginUser } from './api/hello';
import Link from 'next/link'
import React, { useState } from 'react';

export default function Home() {
  
  const [email, setemail] = useState('');
  const [psw, setpsw] = useState('');

  const handleEmail = (e) => { setemail(e.target.value) };
  const handlePsw = (e) => { setpsw(e.target.value) };
    
  
  const get = () => 
  {

    var response = loginUser(email,psw);

    if(!response.status){alert(response.message);}
    else{
      window.location.href = "/cars/1";
    }


  };

  return (
    <div className="h-full">
     
        <div className="content-center">
          <div className="flex flex-col ">
            <div className="flex content-center">
              <h1>LOGIN</h1>
            </div>
            <div id="d1">
              <label id="email">Email</label><br></br>
              <input type="text"  placeholder="Enter Email" name="email" onChange={handleEmail}></input><br></br>
              <label for="psw">Password</label><br></br>
              <input type="password"  placeholder="Enter Password" name="psw" onChange={handlePsw}></input><br></br>
              <button onClick={get}>Login</button>
            </div>
            <br></br>
                <div className="flex content-center">
                  <Link href="/Registracion"><a>Create Account</a></Link>
                </div>
            </div>
        </div>
    </div>
  )
}