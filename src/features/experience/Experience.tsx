import localFont from "next/font/local";
import styles from "./Experience.module.css";

const tajawal = localFont({
  src: "../../../public/assets/font/Tajawal/Tajawal-Light.ttf",
  preload: true,
});
const balooChettan = localFont({
  src: "../../../public/assets/font/BalooChettan/BalooChettan2-Regular.ttf",
  preload: true,
});

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h3 className={`${styles.title} ${balooChettan.className}`}>
        Experience
      </h3>
      <div className={tajawal.className}>
        With over a decade and a half of experience in front-end development, I
        have honed my skills in creating dynamic and responsive applications. My
        expertise lies in Vue, Angular, React, and TypeScript, coupled with a
        strong foundation in HTML, CSS, SCSS, and JavaScript. This diverse skill
        set has enabled me to build robust and efficient web applications across
        various domains. My work often involves integrating complex server-side
        technologies like AWS and NodeJS, ensuring seamless functionality.
        Additionally, I possess a solid understanding of UX principles, which
        allows me to enhance user interactions and collaborate effectively with
        designers to deliver engaging and user-friendly solutions.
      </div>
    </div>
  );
}
