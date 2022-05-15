import {useState} from 'react'
import {link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRight} from '../assets/svg/keyboardArrowRightIcon.svg' 
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import React from 'react'

function SignIn() {
    const [showPassword, setPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: ''
    })

    return (
        <div>SignIn</div>
    )
}

export default SignIn