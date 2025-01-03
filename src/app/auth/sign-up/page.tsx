"use client";

import AuthCard from "@/components/card";
import { useState } from "react";
import { UserInfo } from "@/models/user-info";
import LoginPage from "@/components/login";
import { registerUser } from "@/db/api";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const router = useRouter();
  const handleSubmit = async () => {
    await registerUser(userInfo)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          router.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthCard
      title="Create Your Account"
      subtitle="Sign up to start organizing your notes and boost your productivity."
    >
      <LoginPage
        userInfo={userInfo}
        formId="signUp-form"
        setUserInfo={setUserInfo}
        handleSubmit={handleSubmit}
      />
    </AuthCard>
  );
};

export default SignUpPage;
