import Link from "next/link";
import Job, { Side } from "./Job";
const lbLogo = "/tech-profile/assets/img/launchbadge.svg";
const companyName = "Launchbadge";
const companyHref = "https://www.launchbadge.com/";

export default function Launchbadge() {
  return (
    <Job
      start="August 2021"
      end="July 2022"
      company={companyName}
      companyHref={companyHref}
      logo={{ src: lbLogo, width: 100, height: 100 }}
      title="Senior Frontend Engineer"
      layout={Side.left}
    >
      <p>
        At{" "}
        <Link
          href={companyHref}
          title={companyName}
          target={companyName.toLowerCase()}
        >
          {companyName}
        </Link>
        , as a Senior Front End Developer, I specialized in creating responsive
        Vue3 applications, adeptly translating client needs and Figma designs
        into dynamic user interfaces. My role encompassed not only designing and
        deploying these applications but also configuring technical backend
        calls for Hedera-based projects. Leading Agile stand-ups and
        retrospectives, I actively contributed to the team&rsquo;s methodology.
        Additionally, I shared my knowledge of the Vue3/TypeScript framework by
        teaching it to junior developers, showcasing both my technical expertise
        and commitment to team growth.
      </p>
    </Job>
  );
}
