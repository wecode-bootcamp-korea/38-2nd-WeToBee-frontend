import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
        } else {
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (!code) return;
    getKakaoToken();
  }, []);
  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
