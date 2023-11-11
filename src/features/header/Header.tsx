import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import style from "./Header.module.css";
import MovingStars from "../movingStars/MovingStars";

export default function Header() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className={style.header}>
      <div className={style.background}>
        <MovingStars />
      </div>
      <div className={style.headerContent}>
        <h1 className={style.name}>{user.name}</h1>
        <h4 className={style.title}>{user.title}</h4>
        <div className="column heading-column content-column">
          <div className={style.me}>
            <Image
              alt={user.name}
              src="/resume/assets/img/me.jpg"
              width={300}
              height={225}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
