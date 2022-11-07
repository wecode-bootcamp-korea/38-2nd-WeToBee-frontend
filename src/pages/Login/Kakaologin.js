import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_KEY, REDIRECT_URI } from "./Login";

const KakaoLogin = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();
  const fetchUrl = "https://kauth.kakao.com/oauth/token";

  useEffect(() => {
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&client_id=${API_KEY}&redirect_url=${REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          fetch(`http://10.58.52.240:3000/auth/kakao/signin`, {
            method: "POST",
            headers: {
              authorization: res.access_token,
            },
          })
            .then(res => res.json())
            .then(res => {
              if (res.accessToken) {
                localStorage.setItem("accessToken", res.accessToken);
              }
            });
          navigate("/");
        }
      });
  });

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
