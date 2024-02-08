import styles from "./About.module.scss";
import Link from "next/link";
import FancyCreativity from "./FancyCreativity";
import FancyJoy from "./FancyJoy";
import localFont from "next/font/local";
const balooChettan = localFont({
  src: "../../../public/assets/font/BalooChettan/BalooChettan2-Regular.ttf",
  preload: true,
});
const tajawal = localFont({
  src: "../../../public/assets/font/Tajawal/Tajawal-Light.ttf",
  preload: true,
});

export default function About() {
  return (
    <div className={`${tajawal.className} ${styles.main}`}>
      <h3 className={`${styles.greeting} ${balooChettan.className}`}>
        Hey, I’m Jared
      </h3>
      <div className={styles.description}>
        <p>
          I&rsquo;m a Senior Frontend Engineer at Journeyage, where I&rsquo;ve
          been instrumental in modernizing our educational platform. At the
          heart of my work is a mission to artfully blend creativity with
          technology, crafting web experiences that are efficient, seamless, and
          warmly human. My approach, &ldquo;Positive Interaction Design&rdquo;,
          infuses even the most technical interfaces with <FancyJoy /> and
          humor, especially in unexpected places like error messages. This
          philosophy is about transforming potential frustration into delight,
          making every user interaction engaging and emotionally considerate.
        </p>
        <p>
          At{" "}
          <Link
            className={styles.linkInline}
            href="https://www.journeyage.com/"
            target="journeyage"
          >
            Journeyage
          </Link>
          , I&apos;ve played a pivotal role in future-proofing our application.
          Faced with the imminent deprecation of NodeJSv12 and potential server
          shutdowns, I led the initiative to upgrade our app to the more
          advanced Nuxtv2.15 with Vue2.7. This strategic move not only made our
          app forward compatible with Nuxt3-style components but also ensured
          compatibility with the latest NodeJSv18, safeguarding our server
          infrastructure against potential disruptions. This critical upgrade
          has not only enhanced the app&apos;s performance and longevity but
          also demonstrated our commitment to staying ahead of technological
          advancements. My role in this project was instrumental in maintaining
          seamless service delivery and has significantly bolstered our
          server&rsquo;s reliability and efficiency.
        </p>
        <p>
          My days are marked by a rhythm of relentless improvement—from leading
          product releases to fortifying our codebase with robust{" "}
          <Link href="https://jestjs.io/" target="jest">
            Jest
          </Link>{" "}
          unit tests. Collaboration is my playground, pulling the strings of
          GitHub pull requests with a team that moves to the beat of agile
          practices.
        </p>
        <p>
          However, my contributions extend beyond code. In a playful{" "}
          <span className={styles.twist}>twist</span> of <FancyCreativity />{" "}
          I&rsquo;ve ventured into the realm of storytelling, producing videos
          that showcase new features in an engaging narrative format. These
          efforts not only elucidate technical updates but also make them
          compelling and accessible to a broader audience. My dedication to
          enhancing user experience is further exemplified by details like an{" "}
          <Link href="resume/asdf" target="animated404">
            animated 404
          </Link>{" "}
          page, transforming moments of user frustration into opportunities for
          a light-hearted smile. This blend of technical expertise and creative
          flair not only enriches our applications but also deepens user
          engagement, adding an unexpected layer of joy to their experience.
        </p>
        <p>
          Before this adventure, I was at{" "}
          <Link href="https://launchbadge.com/" target="launchbadge">
            LaunchBadge
          </Link>
          , architecting responsive Vue3 applications that stood as a testament
          to the fusion of form and function, inspired by Figma designs and
          client aspirations. There, I also embraced the role of mentor, guiding
          seven junior developers through the intricacies of Vue and Typescript.
        </p>
        <p>
          My toolkit is the product of deep front-end expertise, blending the
          dynamic capabilities of Vue with the structural might of{" "}
          <Link href="https://angular.io/" target="angular">
            Angular
          </Link>
          , honed over 13 years of dedicated practice.{" "}
          <Link href="https://vuejs.org/" target="vue">
            Vue
          </Link>
          ’s declarative component model and{" "}
          <Link href="https://nextjs.org/" target="next.js">
            Next.js
          </Link>
          ’s server-side enhancements are the latest additions, enabling me to
          engineer interfaces that are as intuitive as they are performant.
          Complemented by the precision of{" "}
          <Link href="https://www.typescriptlang.org/" target="typescript">
            TypeScript
          </Link>{" "}
          and the tailored aesthetics of SCSS and{" "}
          <Link href="https://tailwindcss.com/" target="tailwind">
            Tailwind CSS
          </Link>
          , my focus is crafting user experiences that not only function
          flawlessly but also{" "}
          <span className={styles.delightfulText}>
            <span className={styles.nowrap}>
              <span>d</span>
              <span>e</span>
              <span>l</span>
              <span>i</span>
              <span>g</span>
              <span>h</span>
              <span>t</span>
              <span>&nbsp;</span>
            </span>
            <span className={styles.nowrap}>
              <span>v</span>
              <span>i</span>
              <span>s</span>
              <span>u</span>
              <span>a</span>
              <span>l</span>
              <span>l</span>
              <span>y</span>
            </span>
          </span>
          .
        </p>
        <p>
          I code, I create, I teach, and above all, I learn. With each line of
          code and every user interaction, I aim to leave a digital footprint
          that others can follow—a path marked by innovation, intuition, and,
          perhaps most importantly, a bit of unexpected fun.
        </p>
      </div>
    </div>
  );
}
