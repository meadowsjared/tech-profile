import style from "./About.module.scss";
import Link from "next/link";
import FancyCreativity from "./FancyCreativity";
import FancyJoy from "./FancyJoy";

export default function About() {
  return (
    <div>
      <h3 className={style.greeting}>Hey, I’m Jared</h3>
      <p className={style.description}>
        At my core, I’m an explorer in the realm of front-end development,
        always on the quest to craft interfaces that are as intuitive as they
        are delightful. My mission is to fuse creativity with technology,
        creating web experiences that not only solve problems but also add a
        touch of <FancyJoy /> to the everyday.
      </p>
      <p className={style.description}>
        Currently, I’m honing my skills at{" "}
        <Link
          className={style.linkInline}
          href="https://www.journeyage.com/"
          target="journeyage"
        >
          Journeyage
        </Link>
        , where I’ve taken our company app to new heights by spearheading a
        critical refactor and keeping our servers running at peak performance.
        Delving into the depths of Amazon Web Services (AWS), I’ve honed my
        skills in managing our server infrastructure with precision, ensuring
        everything runs smoothly and efficiently.
      </p>
      <p className={style.description}>
        My days are marked by a rhythm of relentless improvement—from leading
        product releases to fortifying our codebase with robust{" "}
        <Link href="https://jestjs.io/" target="jest">
          Jest
        </Link>{" "}
        unit tests. Collaboration is my playground, pulling the strings of
        GitHub pull requests with a team that moves to the beat of agile
        practices.
      </p>
      <p className={style.description}>
        But it’s not all about the code. In a{" "}
        <span className={style.twist}>twist</span> of <FancyCreativity /> I’ve
        produced videos that illuminate new features, turning technical updates
        into compelling stories. My dedication to user experience shines through
        in the details, like an{" "}
        <Link href="resume/asdf" target="animated404">
          animated 404
        </Link>{" "}
        page that transforms a moment of frustration into a chance for a smile.
      </p>
      <p className={style.description}>
        Before this adventure, I was at{" "}
        <Link href="https://launchbadge.com/" target="launchbadge">
          LaunchBadge
        </Link>
        , architecting responsive Vue3 applications that stood as a testament to
        the fusion of form and function, inspired by Figma designs and client
        aspirations. There, I also embraced the role of mentor, guiding seven
        junior developers through the intricacies of Vue and Typescript.
      </p>
      <p className={style.description}>
        My toolkit is the product of deep front-end expertise, blending the
        dynamic capabilities of Vue with the structural might of{" "}
        <Link href="https://angular.io/" target="angular">
          Angular
        </Link>
        , honed over 13 years of dedicated practice.{" "}
        <Link href="https://react.dev/" target="react">
          React
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
        <span className={style.delightfulText}>
          <span className={style.nowrap}>
            <span>d</span>
            <span>e</span>
            <span>l</span>
            <span>i</span>
            <span>g</span>
            <span>h</span>
            <span>t</span>
            <span>&nbsp;</span>
          </span>
          <span className={style.nowrap}>
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
      <p className={style.description}>
        I code, I create, I teach, and above all, I learn. With each line of
        code and every user interaction, I aim to leave a digital footprint that
        others can follow—a path marked by innovation, intuition, and, perhaps
        most importantly, a bit of unexpected fun.
      </p>
    </div>
  );
}
