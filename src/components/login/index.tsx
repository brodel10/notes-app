import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import InputField from "@/components/input";
import Button from "@/components/button";

const LoginPage = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src="images/logo.svg"
          alt="logo"
          width={57}
          height={19}
          priority
        />
        <header className={styles.header}>
          <h1 className="title">Welcome to Note</h1>
          <p className="subtitle">Please log in to continue</p>
        </header>
        <form id="login-form" className={styles.form}>
          <InputField
            name="Email Address"
            type="email"
            placeholder="email@example.com"
            onChange={onChange}
          />
          <InputField type="password" name="Password" onChange={onChange} />

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
      </div>
    </div>
  );
};

export default LoginPage;
