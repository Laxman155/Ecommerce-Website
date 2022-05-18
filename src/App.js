import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRouts from './components/PrivateRouts'
import Layout from './components/Pages/Layout'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact';
import LoginReg from './components/Pages/auth/LoginReg';
import ResetPassword from './components/Pages/auth/ResetPassword'
import RePassword from './components/Pages/auth/RePassword'
import Dashboard from './components/Pages/Dashboard';
import Api from './components/Pages/Api'
// import Footer from './components/Footer';
import UserRegistration from './components/Pages/auth/UserRegistration';
import Data from './components/Pages/auth/Data';




function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Login" element={<LoginReg />} />
            <Route path="register" element={<UserRegistration />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="RePassword" element={<RePassword />} />
            <Route path="api" element={<Api />} />
            <Route path="data" element={<Data/>} />
          </Route>

          {/* <Route path="dashboard" element={<PrivateRouts />} /> */}
          {/* <PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
          {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<h1>Error 404 Page Not found</h1>} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
