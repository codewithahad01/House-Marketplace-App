import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {doc, setDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg' 
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import React from 'react'

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try{
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            updateProfile(auth.currentUser, {
                displayName: name
            })

            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()
            await setDoc(doc(db, 'users', user.uid), formDataCopy)
            navigate('/')
        }catch(error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>
                        Welcome Back!
                    </p>
                </header>

                    <form onSubmit={onSubmitForm}>
                        <input type='text' className='nameInput' placeholder='Name' id='name' value={name} onChange={onChange} />
                        <input type='email' className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />

                        <div className='passwordInputDiv'>
                            <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder='Password' id='password'
                            value={password} onChange={onChange} />
                            <img src={visibilityIcon} alt="show password" className='showPassword'
                            onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>

                        <Link to='/forgot-password' className='forgotPasswordLink'>
                            Forgot Password
                        </Link>
                        <div className='signUpBar'>
                            <p className='signUpText'>
                                Sign Up
                            </p>
                            <button className='signUpButton'>
                                <ArrowRight fill='#ffffff' width={34} height={34} />
                            </button>
                        </div>
                    </form>

                    {/* Google OA Component */}
                    <Link to='/sign-in' className='registerLink' >
                        Sign In Instead
                    </Link>
            </div>
        </>
    )
}

export default SignUp