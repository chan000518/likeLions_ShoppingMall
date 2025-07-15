import React, { useState } from 'react';
import { Input } from '../component/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../component/Button';
import KakaoIcon from '../assets/kakao-icon.png';

/*
export const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원가입 완료!');
    navigate('/');
  }
  const [inputData, setInputData] = useState({
    fullName:'',
    phone:'',
    email:'',
    birthday:'',
    password:'',
  });
    const handleChange = (e) => {
        setInputData({...inputData,[e.target.name]: e.target.value});
    };
    const isInputComplete = Object.values(inputData).every((value)=>value.trim() !== '');
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-amber-100 p-8 rounded-lg shadow-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-amber-500">Sign In</h2>
              <Input
                label="Full Name"
                name="fullName"
                placeholder="Your name"
                value={inputData.fullName}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="phone"
                placeholder="010-1234-5678"
                value={inputData.phone}
                onChange={handleChange}
              />
              <Input
                label="Email Address"
                name="email"
                placeholder="email@example.com"
                value={inputData.email}
                onChange={handleChange}
              />
              <Input
                label="Birthday"
                name="birthday"
                type="date"
                placeholder="Your name"
                value={inputData.birthday}
                onChange={handleChange}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="password"
                value={inputData.password}
                onChange={handleChange}
              />
              <Button 
              className={`w-full mt-4 ${
                !isInputComplete
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-white'
              }`}
                disabled={!isInputComplete}
                onClick={handleSubmit}
              >
                  Sign In
              </Button>
              <p className="mt-4 text-center text-sm text-amber-500">
                Don't have an account? <span className="text-amber-600">Register</span>
              </p>

          </div>

      </div>
   
  ); 
};
*/
export const Signup = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100 ">
      <div className="w-[380px] h-[500px] bg-amber-100 rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
        <h2 className="pb-2.5 text-lg font-bold mb-2 text-amber-500 text-center leading-relaxed">
          카카오톡으로 간편하게 로그인하고
          <br /> 서비스를 이용해보세요!
        </h2>
        <button className="group mt-17 w-full relative bg-[#FEE500] text-white font-semibold  py-2.5 px-4 rounded-md text-sm">
          <span className="block text-center w-full">카카오톡으로 로그인</span>
          <img
            src={KakaoIcon}
            alt="Kakao"
            className="absolute right-4 top-[48%] -translate-y-1/2 w-9 h-9"
          />
        </button>
      </div>
    </div>
  );
};
