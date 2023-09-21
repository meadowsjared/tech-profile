import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import style from "./Header.module.css";
import { useState } from "react";

export default function Header() {

  const { name } = useSelector((state: RootState) => state.user);

  return (
    <div className={style.header}>
      <div
        className={style.parent}
{/*         onMouseMove={handleMouseMove} */}
{/*         onClick={handleClick} */}
{/*         onTouchStart={handleTouchStart} */}
{/*         onTouchMove={handleTouchMove} */}
{/*         onMouseOut={handleMouseOut} */}
{/*         onTouchEnd={handleMouseOut} */}
      >
        <div className={style.bg}>
          <div
            className={style.helmControl}
            style={{
              transform: `translateX(${translateX}px) translateY(${translateY}px)`,
            }}
          >
            <div className={style.layer}></div>
            <div className={style.layer}></div>
            <div className={style.layer}></div>
          </div>
        </div>
        <div className={style.headerContent}>
          <h1 className={style.name}>{name}</h1>
          <h4 className={style.title}>Senior Software Developer | Frontend</h4>
          <div className="column heading-column content-column">
            <div className={style.me}>
              <Image
                alt={name}
                src="/resume/assets/img/me.jpg"
                width={300}
                height={225}
                // width={4032}
                // height={3024}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
