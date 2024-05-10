import React from 'react'
import Login from '../Components/Login'
import RegisterStudent from '../Components/RegisterStudent'
import RegisterTPO from '../Components/RegisterTPO'


export default function LoginSignUpPage(props) {
    
        if (props.page==="login"){
            return (<div className='pt-[70px]'><Login/></div>)
        }else if(props.page==="signupTPO"){
            return(<div className='pt-[70px]'><RegisterTPO/><RegisterStudent/></div>)
        }else{
            return(<div className='pt-[70px]'><RegisterStudent/></div>)
        }
}