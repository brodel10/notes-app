"use client";

import AuthCard from "@/components/card";
import { useState } from "react";
import { UserInfo } from "@/models/user-info";
import LoginPage from "@/components/login";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  return (
    <AuthCard title="Welcome to Note" subtitle="Please log in to continue">
      <LoginPage userInfo={userInfo} setUserInfo={setUserInfo} />
    </AuthCard>
  );
}
