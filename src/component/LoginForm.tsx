import { TextInput } from 'evergreen-ui'
import React,{useState} from 'react'

const LoginFormComp = () => {
    const [swithForm, setSwitchForm] = useState(0)
  return (
    <>
        {
            swithForm === 0 ? 
            <div className=' w-[650px] mt-5 mb-5 ml-auto mr-auto flex flex-col gap-4 items-center h-[45vh] p-1'>
                <h3 className='text-[#141820] font-bold text-lg text-[Montserrat] text-[24px]'>Login</h3>
                <div className='flex flex-col items-left w-[70%] gap-1 '>
                    <p className='text-[#4A5568] text-[18px]'>Enter your email and password to continue planning.</p>
                    <TextInput name="email" placeholder="Email" style={{width: "100%", marginBottom:"10px"}}/>
                    <TextInput name="password" placeholder="Password" style={{width: "100%", marginTop:"10px"}}/>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button className='flex items-center justify-center bg-[#572297] rounded-[4px] text-[#fff] font-bold font-[Montserrat] pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 w-[79px] h-[48px] text-[16px]'>Login
                        </button>
                        <a href="#">Forgot password?</a>
                        <p>Need an account? <a href="#" onClick={() => setSwitchForm(1)}>Sign Up.</a></p>
                    </div>
                </div>

            </div> : 
            <div className='w-[670px] mt-5 mb-5 ml-auto mr-auto flex flex-col gap-4 items-center h-[45vh] p-1'>
                <h3 className='text-[#141820] font-bold text-lg text-[Montserrat] text-[24px]'>Sign Up</h3>
                <div className='flex flex-col items-left w-[70%] gap-1 '>
                    <p className='text-[#4A5568] text-[16px]'>Enter your email and create a password to start your planning.</p>
                    <TextInput name="email" placeholder="Email" style={{width: "100%", marginBottom:"10px"}}/>
                    <TextInput name="password" placeholder="Password" style={{width: "100%", marginTop:"10px"}}/>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <button className='flex items-center justify-center bg-[#572297] rounded-[4px] text-[#fff] font-bold font-[Montserrat] pt-2 pb-2 pl-2 pr-2 mt-2 mb-2 w-[90px] h-[48px] text-[16px]'>Sign Up
                        </button>
                        <a href="#">Forgot password?</a>
                         
                        <p>Already a user? <a href="#" onClick={() => setSwitchForm(0)}>Login.</a></p>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default LoginFormComp
