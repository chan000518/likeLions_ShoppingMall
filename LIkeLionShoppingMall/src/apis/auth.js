import  instance  from './instance.js'

export const login = async (code) => {
  const res = await instance.post('/auth/kakao',{
    code,
  });
  
  return res.data;
}