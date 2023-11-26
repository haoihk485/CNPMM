import { Link } from 'react-router-dom'
import { Component, Container } from './style/headerStyle.js'
const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/home'>TRANG CHỦ</Link>
                <Link to='/about'>BLOG ME</Link>
                <Link to='/contact'>LIÊN HỆ</Link>
                <Link onClick={() => { sessionStorage.clear() }} to='/login'>ĐĂNG XUẤT</Link>
            </Container>
        </Component>
    )
}

export default Header