"use client";

import AuthCard from "@/components/card";
import InputField from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { UserInfo } from "@/models/user-info";

export default function Home() {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState<string>("password");

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  //   const value = e.target.value || "";
  // };

  useEffect(() => {
    if (showPassword) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [showPassword]);

  const toggleIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <AuthCard title="Welcome to Note" subtitle="Please log in to continue">
        <form id="login-form" className={styles.form}>
          <InputField
            name="Email Address"
            type="email"
            placeholder="email@example.com"
            autoCompleteType="username"
            value={userInfo?.username || ""}
            required={true}
            onChange={(e) => {
              const value = e.target.value || "";
              const obj: UserInfo = {
                password: userInfo?.password || "",
                username: value,
              };

              setUserInfo(obj);
            }}
          />
          <InputField
            type={inputType}
            name="Password"
            autoCompleteType="current-password"
            showPassword={showPassword}
            value={userInfo?.password || ""}
            required={true}
            toggleIcon={toggleIcon}
            onChange={(e) => {
              const value = e.target.value || "";
              const obj: UserInfo = {
                password: value,
                username: userInfo?.username || "",
              };

              setUserInfo(obj);
            }}
          />

          <Button type="submit" form="login-form" primaryButton>
            Login
          </Button>
        </form>

        <hr />

        <div className={styles.substitute}>
          <p>Or log in with:</p>
          <Button imgSrc="images/icon-google.svg">Google</Button>
        </div>

        <hr />

        <div className={styles.signUp}>
          No account yet? <a href="/auth/sign-up">Sign Up</a>
        </div>
      </AuthCard>
    </main>
  );
}
