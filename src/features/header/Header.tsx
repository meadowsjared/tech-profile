import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styles from "./Header.module.css";
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
    <div className={styles.header}>
      <div className={styles.background}>
        <MovingStars />
      </div>
      <div className={styles.headerContent}>
        <h1 className={`${styles.name} ${tajawal.className}`}>{user.name}</h1>
        <h2 className={`${styles.title} ${tajawal.className}`}>{user.title}</h2>
        <div className="column heading-column content-column">
          <div className={styles.me}>
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
