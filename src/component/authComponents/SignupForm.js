import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@mui/material/LinearProgress';

import {useNavigate} from 'react-router-dom';
import { registerAction } from '../../store/Auth/user/action';
import { TextInput } from 'evergreen-ui'
import Loader from '../UtilCOmponents/Loader';

const SignupForm = ({setSwitchForm}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   
  const userReg = useSelector((state) => state?.authRegister)
   

    const{loading, error, userInfo} = userReg
    
    console.log(userInfo);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleRegistration = (e) => {
        e.preventDefault()
        dispatch(registerAction(email, password))
      }


      useEffect(() => {
        if(userInfo) {
          navigate('/newtrip')
        }
      },[navigate, userInfo])
  return (
  <>
  {
    loading && <LinearProgress sx={{height: "10px", borderRadius:"10px", marginBottom: "20px"}}/>
  }
    <div className='w-[670px] mt-5 mb-5 ml-auto mr-auto flex flex-col gap-4 items-center h-[45vh] p-1'>
                <h3 className='text-[#141820] font-bold text-lg text-[Montserrat] text-[24px]'>Sign Up</h3>
                <div className='flex flex-col items-left w-[70%] gap-1 '>
                    <p className='text-[#4A5568] text-[16px]'>Enter your email and create a password to start your planning.</p>
                    <TextInput name="email" placeholder="Email" style={{width: "100%", marginBottom:"10px"}} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <TextInput name="password" type="password" placeholder="Password" style={{width: "100%", marginTop:"10px"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button className='flex items-center justify-center bg-[#572297] rounded-[4px] text-[#fff] font-bold font-[Montserrat] pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 w-[90px] h-[48px] text-[16px]' onClick={(e) => handleRegistration(e)}>Sign Up
                        </button>
                        <a href="#">Forgot password?</a>
                         
                        <p>Already a user? <a href="#" onClick={() => setSwitchForm(0)}>Login.</a></p>
                    </div>
                </div>
    </div>
    </>
  )
}

export default SignupForm
