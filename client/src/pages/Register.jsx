import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { Component, Image, Wrapper, LoginButton, Text, RegisterButton, Error } from './style/style.js'
import logo from '../assets/img/logo_blog.jpg'
import { API } from '../../service/api.js'
import Spinner from '../../componets/Spinner.jsx'


const Register = () => {
    const registerInitialValue = {
        username: '',
        fullname: '',
        password: ''
    }
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const isAuthenticated = sessionStorage.getItem('accessToken') ? true : false


    // State
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [err, setErr] = useState('')
    const [registerInfor, setRegisterInfor] = useState(registerInitialValue)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    })

    const handleInputValueChange = (e) => {
        setRegisterInfor({
            ...registerInfor,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async () => {
        if (loading) return
        setLoading(true)
        try {
            console.log(registerInfor);
            let response = await API.userSignup(registerInfor)
            if (response.success) {
                setErr('');
                setRegisterInfor(registerInitialValue)
                alert(response.message)
                navigate('/login')
            } else {
                setErr(response?.message);
            }
        } catch (error) {
            setErr(error?.data.message)
        } finally{
            setLoading(false)
        }
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleRePasswordVisibility = () => {
        setShowRePassword(!showRePassword);
    };


    return (
        <Component>
            {loading && <Spinner></Spinner>}
            <Image src={logo} alt="" />
            <Wrapper className='my-6 mx-9 flex flex-col'>
                <TextField variant='standard' onChange={e => handleInputValueChange(e)} name='username' label='Tên Đăng Nhập' />
                <TextField variant='standard' onChange={e => handleInputValueChange(e)} name='fullname' label='Tên Người Dùng' />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    variant="standard"
                    onChange={e => handleInputValueChange(e)}
                    name='password'
                    label='Mật Khẩu'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    type={showRePassword ? 'text' : 'password'}
                    variant="standard"
                    name='repassword'
                    label='Nhập Lại Mật Khẩu'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleToggleRePasswordVisibility} edge="end">
                                    {showRePassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {(err !== '') && <Error>{err}</Error>}
                <RegisterButton onClick={handleRegister}>Đăng ký</RegisterButton>
                <Text style={{ textAlign: 'center' }}>HOẶC</Text>
                <LoginButton variant='contained' onClick={() => navigate('/login')}>Đã có tài khoản?</LoginButton>
            </Wrapper>
        </Component>
    )
}

export default Register