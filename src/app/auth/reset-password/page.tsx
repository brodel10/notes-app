"use client";

import React, { useState } from "react";
import AuthCard from "@/components/card";
import InputField from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.scss";
import { NewPassword } from "@/models/new-pwd";

const ResetPasswordPage = () => {
  const [pwd, setPwd] = useState<NewPassword>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <AuthCard
      title="Reset Your Password"
      subtitle="Choose a new password to secure your account."
    >
      <form id="reset-password-form" action="" className={styles.form}>
        <InputField
          type="password"
          name="New Password"
          autoCompleteType="new-password"
          showPassword={showNewPassword}
          value={pwd?.newPassword || ""}
          required={true}
          toggleIcon={() => setShowNewPassword(!showNewPassword)}
          min={8}
          onChange={(e) => {
            const value = e.target.value || "";
            const obj: NewPassword = {
              newPassword: value,
              confirmNewPassword: pwd?.confirmNewPassword || "",
            };

            setPwd(obj);
          }}
        />

        <InputField
          type="password"
          name="Confirm New Password"
          autoCompleteType="new-password"
          showPassword={showConfirmPassword}
          value={pwd?.confirmNewPassword || ""}
          required={true}
          toggleIcon={() => setShowConfirmPassword(!showConfirmPassword)}
          onChange={(e) => {
            const value = e.target.value || "";
            const obj: NewPassword = {
              newPassword: pwd?.newPassword || "",
              confirmNewPassword: value || "",
            };

            setPwd(obj);
          }}
        />

        <Button type="submit" form="reset-password-form" primaryButton>
          Reset Password
        </Button>
      </form>
    </AuthCard>
  );
};

export default ResetPasswordPage;
