import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import style from "./Header.module.css";
import MovingStars from "../movingStars/MovingStars";
import me from "../../../public/assets/img/me_large.webp";
import meSmallBase64 from "../../../public/assets/img/me_small_base64";
import localFont from "next/font/local";

const tajawal = localFont({
  src: "../../../public/assets/font/Tajawal/Tajawal-Light.ttf",
  preload: true,
});

export default function Header() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={style.header}>
      <div className={style.background}>
        <MovingStars />
      </div>
      <div className={style.headerContent}>
        <h1 className={`${style.name} ${tajawal.className}`}>{user.name}</h1>
        <h2 className={`${style.title} ${tajawal.className}`}>{user.title}</h2>
        <div className="column heading-column content-column">
          <div className={style.me}>
            <Image
              alt={user.name}
              src={me}
              width={206}
              height={206}
              placeholder="blur"
              blurDataURL={meSmallBase64}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
