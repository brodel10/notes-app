import classNames from "classnames";
import React, { HTMLInputTypeAttribute, useState } from "react";
import styles from "./index.module.scss";

interface InputFieldProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  const { name, type, placeholder, className, onChange } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const toggleIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classNames(className, styles.inputContainer)}>
      <div className={styles.nameContainer}>
        <label className={styles.name}>{name}</label>
        {isPassword && (
          <a href="/auth/forgot-password" className={styles.forgotPwd}>
            <u>Forgot</u>
          </a>
        )}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className={classNames(styles.input, isPassword)}
        onChange={onChange}
      />
      {isPassword && (
        <span className={styles.toggleIcon}>
          <i
            onClick={toggleIcon}
            className={classNames(
              showPassword ? styles.showPwd : styles.hidePwd
            )}
          ></i>
        </span>
      )}
    </div>
  );
};

export default React.memo(InputField);
