import Link from "next/link";
import Job, { Side } from "./Job";
const jaLogo = "/resume/assets/img/journeyage - stacked.svg";
const companyName = "Journeyage";
const companyHref = "https://www.journeyage.com/";

export default function Journeyage() {
  return (
    <Job
      start="October 2022"
      end="Present"
      company={companyName}
      companyHref={companyHref}
      logo={{ src: jaLogo, width: 128, height: 107 }}
      title="Senior Frontend Engineer"
      layout={Side.right}
    >
      <p>
        In my role as a Senior Front End Developer at{" "}
        <Link
          href={companyHref}
          title={companyName}
          target={companyName.toLowerCase()}
        >
          {companyName}
        </Link>
        , I&rsquo;ve been pivotal in enhancing and modernizing our educational
        platform&rsquo;s app using Vue2.7, TypeScript, and SCSS. My
        responsibilities have included a comprehensive refactoring of the app,
        managing server infrastructure via AWS, and leading product releases to
        ensure high quality and timely delivery. Alongside technical
        contributions, I&rsquo;ve also mentored junior developers and
        collaborated closely with the sales team to streamline client support,
        using tools like Range and Slack to maintain effective team
        communication and agile practices.
      </p>
    </Job>
  );
}
