import { Routes, Route, Outlet } from 'react-router-dom';
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

const AuthLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-gray-900'>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
};

export default AuthLayout;