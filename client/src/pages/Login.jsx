import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import logo from '../assets/img/logo_blog.jpg'
import { API } from '../../service/api.js'
import { Component, Image, Wrapper, LoginButton, Text, RegisterButton, Error, Container } from './style/style.js'
import { Box, flexbox } from '@mui/system'
import Spinner from '../../componets/Spinner.jsx'


const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true)
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' })
    const [err, setErr] = useState('')
    const isAuthenticated = sessionStorage.getItem('accessToken') ? true : false
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    })


    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleInputValueChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async () => {
        if (loading) return
        setLoading(true)
        try {
            const response = await API.userLogin(loginInfo)
            if (response?.success) {
                setErr('')
                sessionStorage.setItem('accessToken', `Bearer ${response.accessToken}`)
                sessionStorage.setItem('username', `${response.username}`)
                alert(response.message);
                navigate('/home')
            } else {
                setErr(response?.message)
            }
        } catch (error) {
            setErr(error.data.message)
        } finally { setLoading(false) }
    }

    return (
        <>
            <Box style={{
                height: "90vh",
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {loading && <Spinner />}
                <Component>
                    <Image src={logo} alt="" />
                    <Wrapper className='my-6 mx-9 flex flex-col'>
                        <TextField
                            value={loginInfo.username}
                            variant='standard'
                            label='Tên Đăng Nhập'
                            name='username'
                            onChange={e => handleInputValueChange(e)}
                        />
                        <TextField
                            value={loginInfo.password}
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
                        {(err !== '') && <Error>{err}</Error>}
                        <LoginButton variant='contained' onClick={() => handleLogin()}>Đăng nhập</LoginButton>
                        <Text style={{ textAlign: 'center' }}>HOẶC</Text>
                        <RegisterButton onClick={() => navigate('/register')}>Chưa có tài khoản?</RegisterButton>
                    </Wrapper>
                </Component>
            </Box>
        </>
    )
}

export default Login;