import React, { ReactNode } from "react";
import styles from "./Job.module.scss";
import Logo from "./Logo";
import classNames from "classnames";
import localFont from "next/font/local";
const tajawal = localFont({
  src: "../../../public/assets/font/Tajawal/Tajawal-Light.ttf",
  preload: true,
});

export enum Side {
  left = "left",
  right = "right",
}

interface Props {
  children?: ReactNode;
  start: string;
  end: string;
  company?: string;
  companyHref?: string;
  logo?: { src: string; width: number; height: number };
  title: string;
  layout: Side;
  endorsements?: React.ReactNode;
}

export default function Job({
  children,
  start,
  end,
  company,
  companyHref,
  logo,
  title,
  layout,
  endorsements,
}: Readonly<Props>) {
  const classes = classNames(styles.Job, {
    [styles.left]: layout === Side.left,
    [styles.right]: layout === Side.right,
    [styles.item]: !endorsements,
  });

  return (
    <>
      <div className={classes}>
        <div className={styles.details}>
          {company && (
            <h3 className={styles.company}>
              <Logo
                name={company.toLowerCase()}
                href={companyHref}
                logo={logo}
              />
            </h3>
          )}
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.positionTimeline}>
            <span className={styles.tenureDate}>{start}</span> —{" "}
            <span className={styles.tenureDate}>{end}</span>
          </div>
        </div>

        {children && (
          <div className={`${styles.description} ${tajawal.className}`}>
            {children}
          </div>
        )}
      </div>

      {endorsements}
    </>
  );
}
