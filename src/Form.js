import React, { useState } from "react";
import validator from 'validator';
import './Form.css';

const App = () => {
 

  const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value) => {
 
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
  }
 
  return (
    <div style={{
      marginLeft: '200px',
    }}>
      <pre>
        <fieldset>
        <h2>Login Form</h2>
        <span>User Name: </span><input type="text" required=" true"  placeholder="Enter Your Name"></input> <br /><br></br>
        <span>Email: </span><input type="email" placeholder ="Enter Your Email"></input> <br /><br></br>
        <span>Enter Password: </span><input type="password" onChange={(e) => validate(e.target.value)} required="Please Fillout" placeholder="Enter your Password"></input> <br /><br></br>
          
        {errorMessage === '' ? null :
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }
        
        }>
          {errorMessage}</span>
          
          }<br></br><br></br><span><button type="submit">Submit</button></span></fieldset>
      </pre>
      
    </div>
  );
}
 
 export default App