import React from "react";
import styled from "styled-components";

export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const API_KEY = process.env.REACT_APP_REST_API_KEY;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

const Login = () => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <Wrapper>
        <Signin>회원가입 with kakao</Signin>
        <Img
          src="/images/kakao_login_large_narrow.png"
          alt="img "
          onClick={handleLogin}
        />
      </Wrapper>
    </Container>
  );
};

export default Login;

const Signin = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid black;
`;
const Img = styled.img`
  width: 350px;
`;

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 80px 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
