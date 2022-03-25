import { useRef, useEffect, useState } from 'react';
import './Login.css';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

  return(
      <>
        {success ? (
            <section>
                <h1> You are logged in!</h1>
                <br />
                <p>
                    <a href='#'>Go Home</a>
                </p>
            </section>
        ) : (
      
    <section>
        <p ref={errRef} className={errMsg ? 'errmsg' :
        "offscreen"} aria-live='assertive'>{errMsg}</p>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input 
                type='text' 
                id='username'
                ref={userRef}
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user} 
                required
                />
            <label htmlFor='password'>Password</label>
            <input 
                type='password' 
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd} 
                required
                />
                <button>Sign in</button>
        </form>
        <p>
            Want to create an account?
            <span className='line'>
                {/*put router link here*/}
                <a href='#'>Create new</a>
            </span>
        </p>
    </section>
        )}
        </>

  )
}

export default Login