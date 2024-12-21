import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Image from "next/image";

interface ButtonProps {
  form?: string;
  type?: "submit" | "reset" | "button";
  primaryButton?: boolean;
  children: React.ReactNode;
  imgSrc?: string;
}

const Button = (props: ButtonProps) => {
  const { form, type, primaryButton, children, imgSrc } = props;
  return (
    <div className="btnContainer">
      <button
        form={form || "form"}
        className={classNames(
          styles.btn,
          primaryButton ? styles.btnPrimary : styles.secondaryBtn,
          imgSrc && "d-flex justify-content-center align-items-center"
        )}
        type={type || "submit"}
      >
        {imgSrc && (
          <Image src={imgSrc} alt="btn-image" width={24} height={24} />
        )}
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
