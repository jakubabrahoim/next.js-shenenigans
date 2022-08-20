const LoginForm = () => {
    return (
        <div className='flex h-full w-screen items-center justify-center'>
            <form>
                <label className='mb-4 flex flex-col'>
                    Username:
                    <input
                        className='rounded-lg' 
                        type='text' 
                    />
                </label>
                <label className='mb-4 flex flex-col'>
                    Password:
                    <input 
                        className='rounded-lg'
                        type='password' 
                    />
                </label>
                <input 
                    className='cursor-pointer'
                    type='submit' 
                    name='Log in' 
                />
            </form>
        </div>
    )
}

export default LoginForm;