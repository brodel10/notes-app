"use client";

import AuthCard from "@/components/card";
import { useState } from "react";
import { UserInfo } from "@/models/user-info";
import LoginPage from "@/components/login";
import { login } from "../db/api";
// import { useRouter } from "next/router";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  // const router = useRouter();

  const handleSubmit = async () => {
    if (userInfo?.username && userInfo.password) {
      await login(userInfo)
        .then((res) => {
          if (res?.status === 200) {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            // router.push("/landing-page");
          }
        })
        .catch((err) => console.log(err));
    } else {
      //toastr here
      console.log("Please enter email and password!");
    }
  };

  return (
    <AuthCard title="Welcome to Note" subtitle="Please log in to continue">
      <LoginPage
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        handleSubmit={handleSubmit}
      />
    </AuthCard>
  );
}
