"use client";

import AuthCard from "@/components/card";
import { useState } from "react";
import { UserInfo } from "@/models/user-info";
import LoginPage from "@/components/login";

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  return (
    <AuthCard
      title="Create Your Account"
      subtitle="Sign up to start organizing your notes and boost your productivity."
    >
      <LoginPage
        userInfo={userInfo}
        formId="signUp-form"
        setUserInfo={setUserInfo}
      />
    </AuthCard>
  );
};

export default SignUpPage;
