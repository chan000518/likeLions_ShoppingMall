import React from 'react';
import KakaoIcon from '/assets/kakao-icon.png';

export const Signup = () => {
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const handleLogin = () => {
    window.location.herf = kakaoURL;
  }
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100 ">
      <div className="w-[380px] h-[500px] bg-amber-100 rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
        <h2 className="pb-2.5 text-lg font-bold mb-2 text-amber-500 text-center leading-relaxed">
          카카오톡으로 간편하게 로그인하고
          <br /> 서비스를 이용해보세요!
        </h2>
        <button 
        onClick={handleLogin}
        className="group mt-17 w-full relative bg-[#FEE500] text-white font-semibold  py-2.5 px-4 rounded-md text-sm cursor-pointer">
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
