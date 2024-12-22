"use client";

import React, { useEffect, useState } from "react";
import AuthCard from "@/components/card";
import InputField from "@/components/input";
import Button from "@/components/button";
import styles from "./page.module.scss";
import { NewPassword } from "@/models/new-pwd";

const ResetPasswordPage = () => {
  const [pwd, setPwd] = useState<NewPassword>();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPwdInputType, setNewPwdInputType] = useState<string>("password");
  const [confirmPwdInputType, setConfirmPwdInputType] =
    useState<string>("password");

  useEffect(() => {
    if (showConfirmPassword) {
      setConfirmPwdInputType("text");
    } else {
      setConfirmPwdInputType("password");
    }
  }, [showConfirmPassword]);

  useEffect(() => {
    if (showNewPassword) {
      setNewPwdInputType("text");
    } else {
      setNewPwdInputType("password");
    }
  }, [showNewPassword]);

  return (
    <AuthCard
      title="Reset Your Password"
      subtitle="Choose a new password to secure your account."
    >
      <form id="reset-password-form" action="" className={styles.form}>
        <InputField
          type={newPwdInputType}
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
          type={confirmPwdInputType}
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
