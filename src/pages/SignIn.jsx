import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg' 
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import React from 'react'

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = formData
    const navigate = useNavigate()

    const onChange = () => {
        setFormData({...formData, [email.target.name]: password.target.value})
    }

    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>
                        Welcome Back!
                    </p>
                </header>
                    <form>
                        <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
                        <div className='passwordInputDev'>
                            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password'
                            value={password} onChange={onChange} />
                            <img src={visibilityIcon} alt="show password" className='showPassword'
                            onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>

                        <Link to='/forgot-password' className='forgotPasswordLink'>
                            Forgot Password
                        </Link>
                        <div className='signInBar'>
                            <p className='signInText'>
                                Sign In
                            </p>
                            <button className='signInButton'>
                                <ArrowRight fill='#ffffff' width={34} height={34} />
                            </button>
                        </div>
                    </form>

                    {/* Google OA Component */}
                    <Link to='/sign-up' className='registerLink' >
                        Sign Up Instead
                    </Link>
            </div>
        </>
    )
}

export default SignIn