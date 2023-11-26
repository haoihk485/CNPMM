import ProtectedRoute from '../route/ProtectedRoute'
import DetailPost from './pages/DetailPost'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdatePost from './pages/UpdatePost'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='post/create' element={<CreatePost />} />
          <Route path='post/detail/:id' element={<DetailPost />} />
          <Route path='post/update/:id' element={<UpdatePost />} />
          {/* Thêm Route cho trang 404 */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
