import React, { useState } from "react";
import styles from "./index.module.scss";
import InputField from "@/components/input";
import Button from "@/components/button";
import { UserInfo } from "@/models/user-info";
import Link from "next/link";

interface LoginPageProps {
  userInfo: UserInfo | undefined;
  formId?: string;
  setUserInfo: (userInfo: UserInfo) => void;
}

const LoginPage = (props: LoginPageProps) => {
  const { userInfo, formId, setUserInfo } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const autoCompleteType = formId ? "new-password" : "current-password";
  const minChar = formId ? "8" : undefined;

  return (
    <>
      <form id={formId || "login-form"} className={styles.form}>
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
              ...userInfo,
              password: userInfo?.password || "",
              username: value,
            };

            setUserInfo(obj);
          }}
        />
        <InputField
          type="password"
          name="Password"
          autoCompleteType={autoCompleteType}
          showPassword={showPassword}
          value={userInfo?.password || ""}
          required={true}
          toggleIcon={() => setShowPassword(!showPassword)}
          min={minChar}
          onChange={(e) => {
            const value = e.target.value || "";
            const obj: UserInfo = {
              ...userInfo,
              password: value,
              username: userInfo?.username || "",
            };

            setUserInfo(obj);
          }}
        />

        {formId && (
          <InputField
            type="password"
            name="Confirm Password"
            autoCompleteType="new-password"
            showPassword={showConfirmPassword}
            value={userInfo?.confirmPassword || ""}
            required={true}
            toggleIcon={() => setShowConfirmPassword(!showConfirmPassword)}
            onChange={(e) => {
              const value = e.target.value || "";
              const obj: UserInfo = {
                confirmPassword: value,
                password: userInfo?.password || "",
                username: userInfo?.username || "",
              };

              setUserInfo(obj);
            }}
          />
        )}

        <Button type="submit" form={formId || "login-form"} primaryButton>
          {formId ? <>Sign up</> : <>Login</>}
        </Button>
      </form>

      <hr />

      <div className={styles.substitute}>
        <p>Or log in with:</p>
        <Button imgSrc="/images/icon-google.svg">Google</Button>
      </div>

      <hr />

      <div className={styles.signUp}>
        {formId ? (
          <>
            Already have an account? <Link href={"/"}>Login</Link>
          </>
        ) : (
          <>
            No account yet? <Link href="/auth/sign-up">Sign Up</Link>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(LoginPage);
