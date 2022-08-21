import { FormEvent, useState } from "react";

import { IconContext } from "react-icons";
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const inputFieldStyle: string = 'h-10 w-56 rounded-lg border px-6 align-middle outline-none focus:ring-1 focus:ring-orchid-200';
    const emailPasswordIconStyle: string = 'w-4 h-4 ml-1 -mt-7 relative top-7 text-slate-400';
    const showPasswordIconStyle: string = 'w-4 h-4 mr-1 -mb-7 relative bottom-7 left-9/10 text-slate-400 hover:text-orchid-200 transition duration-500';

    const submitLoginForm = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <div className='flex h-full w-screen items-center justify-center'>
            <form 
                onSubmit={submitLoginForm}
                className='absolute'
            >
                <label className='mb-7 flex flex-col'>
                    <IconContext.Provider value={{ className: emailPasswordIconStyle }}>
                        <MdAlternateEmail />
                    </IconContext.Provider>
                    <input
                        className={inputFieldStyle}
                        type='email'
                        placeholder='E-mail'
                    />
                </label>
                <label className='mb-4 flex flex-col'>
                    <IconContext.Provider value={{ className: emailPasswordIconStyle }}>
                        <MdLockOutline />
                    </IconContext.Provider>
                    <input 
                        className={inputFieldStyle}
                        type={`${isPasswordVisible ? 'text' : 'password'}`}
                        placeholder='Password'
                    />
                    <button 
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        aria-labelledby='showPassword'
                    >
                        {
                            isPasswordVisible ?
                            <IconContext.Provider 
                                value={
                                    { className: showPasswordIconStyle }
                                }
                            >
                                <AiOutlineEyeInvisible />
                            </IconContext.Provider>
                            :
                            <IconContext.Provider 
                                value={
                                    { className: showPasswordIconStyle }
                                }
                            >
                                <AiOutlineEye />
                            </IconContext.Provider>
                        }
                        <span id='showPassword' hidden>Show/Hide password</span>
                    </button>
                </label>
                <input 
                    className='h-7 w-full cursor-pointer rounded-lg bg-orchid text-white transition duration-500 hover:bg-orchid-200'
                    type='submit' 
                    name='Log in' 
                    value='Log in'
                />
            </form>
        </div>
    )
}

export default LoginForm;