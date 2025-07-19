import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { login } from "../apis/auth";
import React from "react";
const KakaoRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {setTokens} = useAuthStore();
  useEffect(()=>{
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    if(!code){
      alert('인가코드 없음');
      navigate('/login');
      return;
    }
      const KakaoLogin = async() => {
    try{
      const {accessToken, refreshToken} = await login(code);
      setTokens(accessToken,refreshToken);
      navigate('/');
    } catch(err){
      alert('로그인 실패',err);
      navigate('/login');
    };
  };
  KakaoLogin();
    console.log('kakao 인가코드:',code);
  },[location.search,navigate]);
  return(
    <>
        로딩중...
    </>
  )
}


export default KakaoRedirect;