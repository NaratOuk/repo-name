
import './App.css'
import Login from './page/login_webpage .jsx'
import HomePage from './page/homepage'
import  Signup  from './page/Signup_page.jsx'
import { ForgotPasswordPage, ForgotPasswordPage1 } from './page/Forgotpassword-page.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/forgot' element={<ForgotPasswordPage />} />
          <Route path='/forgot1' element={<ForgotPasswordPage1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
// `` Template for React App with Text Component