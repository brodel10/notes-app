import classNames from "classnames";
import React, {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface InputFieldProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  className?: string;
  autoCompleteType?: HTMLInputAutoCompleteAttribute;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  toggleIcon?: () => void;
  value?: string | number | readonly string[];
  required?: boolean;
  hidden?: boolean;
  min?: string | number;
}

const InputField = (props: InputFieldProps) => {
  const {
    name,
    type,
    placeholder,
    className,
    autoCompleteType,
    onChange,
    value,
    showPassword,
    toggleIcon,
    required,
    hidden,
    min,
  } = props;

  const [pwdType, setPwdType] = useState(type);

  const isLogin = autoCompleteType === "current-password";
  const isPassword = autoCompleteType?.includes("password");

  useEffect(() => {
    if (showPassword) {
      setPwdType("text");
    } else {
      setPwdType(type);
    }
  }, [showPassword, type]);

  return (
    <div className={classNames(className, styles.inputContainer)}>
      <div className={styles.nameContainer}>
        <label className={styles.name}>{name}</label>
        {isLogin && (
          <a href="/auth/forgot-password" className={styles.forgotPwd}>
            <u>Forgot</u>
          </a>
        )}
      </div>

      <input
        key={`${type}-${showPassword || ""}`}
        type={pwdType || type}
        placeholder={placeholder}
        className={classNames(styles.input, isPassword)}
        autoComplete={autoCompleteType}
        onChange={onChange}
        value={value}
        required={required}
        hidden={hidden}
        min={min}
      />
      {isPassword && (
        <span className={styles.toggleIcon}>
          <i
            onClick={toggleIcon}
            className={classNames(
              showPassword ? styles.hidePwd : styles.showPwd
            )}
          ></i>
        </span>
      )}

      {min && (
        <div className={styles.info}>
          <Image
            src={"/images/icon-info.svg"}
            width={16}
            height={16}
            alt="info-logo"
          />
          <p>At least {min} characters</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(InputField);
