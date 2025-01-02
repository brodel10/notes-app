import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}
const AuthCard = (props: AuthCardProps) => {
  const { children, title, subtitle } = props;
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={95}
            height={28}
            priority
          />
          <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
          </header>
          {children}
        </div>
      </div>
    </main>
  );
};

export default React.memo(AuthCard);
