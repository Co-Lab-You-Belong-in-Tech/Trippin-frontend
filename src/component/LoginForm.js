import { TextInput } from 'evergreen-ui'
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@mui/material/LinearProgress';

import {useNavigate} from 'react-router-dom';
import { loginAction, registerAction } from '../store/Auth/user/action';
import SignupForm from './SignupForm';

const LoginFormComp = () => {
    const [swithForm, setSwitchForm] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = useSelector((state) => state?.authLogin)
    
    console.log(user);
    // descrutor user login info
    const{loading, error, userInfo} = user
    // desctructor user register info
   

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginAction(email, password))
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
        {
            swithForm === 0 ? 
            <div className=' w-[650px] mt-5 mb-5 ml-auto mr-auto flex flex-col gap-4 items-center h-[45vh] p-1'>
                <h3 className='text-[#141820] font-bold text-lg text-[Montserrat] text-[24px]'>Login</h3>
                <div className='flex flex-col items-left w-[70%] gap-1 '>
                    <p className='text-[#4A5568] text-[18px]'>Enter your email and password to continue planning.</p>
                    <TextInput name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} style={{width: "100%", marginBottom:"10px"}}/>
                    <TextInput name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width: "100%", marginTop:"10px",}}/>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button className='flex items-center justify-center bg-[#572297] rounded-[4px] text-[#fff] font-bold font-[Montserrat] pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 w-[79px] h-[48px] text-[16px]' onClick={(e) => handleLogin(e)}>Login
                        </button>
                        <a href="#">Forgot password?</a>
                        <p>Need an account? <a href="#" onClick={() => setSwitchForm(1)}>Sign Up.</a></p>
                    </div>
                </div>

            </div> : 
            <SignupForm setSwitchForm={setSwitchForm}/>
        }
    </>
  )
}

export default LoginFormComp
