import { Navigate, Outlet } from "react-router"
import Header from "../componets/Header"
import Footer from "../componets/Footer"

const ProtectedRoute = () => {
    const isAuthenticated = sessionStorage.getItem('accessToken') ? true : false
    return (isAuthenticated ?
        <>
            <Header></Header>
            <div style={{ marginTop: '64px' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </> :
        <Navigate replace to='/login'></Navigate>
    )
}

export default ProtectedRoute