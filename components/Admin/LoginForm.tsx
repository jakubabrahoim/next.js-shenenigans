import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { IconContext } from 'react-icons';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const router = useRouter();
    
    const inputFieldStyle: string = 'h-10 w-56 rounded-lg border px-6 align-middle outline-none focus:ring-1 focus:ring-orchid-200';
    const emailPasswordIconStyle: string = 'w-4 h-4 ml-1 -mt-7 relative top-7 text-slate-400';
    const showPasswordIconStyle: string = 'w-4 h-4 mr-1 -mb-7 relative bottom-7 left-9/10 text-slate-400 hover:text-orchid-200 transition duration-500';

    const submitLoginForm = (event: FormEvent) => {
        event.preventDefault();
        
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then(() => {
                router.push('/');
            })
            .catch(() => {});
    }

    return (
        <div className='flex h-full w-screen items-center justify-center'>
            
            <form 
                onSubmit={submitLoginForm}
                className='absolute'
            >
                <h1 className='mb-4 w-full cursor-default text-center text-lg font-semibold text-jet-200'>Are you admin?</h1>
                <label className='mb-7 flex flex-col'>
                    <IconContext.Provider value={{ className: emailPasswordIconStyle }}>
                        <MdAlternateEmail />
                    </IconContext.Provider>
                    <input
                        className={inputFieldStyle}
                        type='email'
                        name='email'
                        placeholder='E-mail'
                        value={emailInput}
                        onChange={(event) => setEmailInput(event.target.value)}
                    />
                </label>
                <label className='mb-4 flex flex-col'>
                    <IconContext.Provider value={{ className: emailPasswordIconStyle }}>
                        <MdLockOutline />
                    </IconContext.Provider>
                    <input 
                        className={inputFieldStyle}
                        type={`${isPasswordVisible ? 'text' : 'password'}`}
                        name='password'
                        placeholder='Password'
                        value={passwordInput}
                        onChange={(event) => setPasswordInput(event.target.value)}
                    />
                    <span 
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
                    </span>
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