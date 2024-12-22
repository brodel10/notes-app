"use client";

import React, { useState } from "react";
import AuthCard from "@/components/card";
import InputField from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.scss";

const ForgotPasswordPage = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  return (
    <AuthCard
      title="Forgotten your password?"
      subtitle="Enter your email below, and we'll send you a link to reset it."
    >
      <form id="forgot-password-form" action="" className={styles.form}>
        <InputField
          name="Email Address"
          type="email"
          placeholder="email@example.com"
          autoCompleteType="username"
          value={userEmail}
          required={true}
          onChange={(e) => {
            const value = e.target.value || "";

            setUserEmail(value);
          }}
        />

        <Button type="submit" form="forgot-password-form" primaryButton>
          Send Reset Link
        </Button>
      </form>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
