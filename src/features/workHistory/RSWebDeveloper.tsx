import Link from "next/link";
import Job, { Side } from "./Job";
const lbLogo = "/tech-profile/assets/img/r&s engineers_dark_mode.png";
const companyName = "R&S Engineers";
const companyHref = "https://www.rscivil.com/";

export default function RSWebDeveloper() {
  return (
    <Job
      start="March 2008"
      end="August 2021"
      company={companyName}
      companyHref={companyHref}
      logo={{ src: lbLogo, width: 190, height: 79 }}
      title="Full Stack Developer"
      layout={Side.right}
    >
      <p>
        As a Full Stack Developer at{" "}
        <Link
          href={companyHref}
          title={companyName}
          target={companyName.toLowerCase()}
        >
          {companyName}
        </Link>{" "}
        in Bakersfield, CA, my tenure was marked by significant contributions in
        web and software development, specializing in traffic study
        applications. I developed a comprehensive web-based drafting app for
        traffic studies using technologies like Angular, PHP, NodeJS, and Google
        Maps API, enhancing project efficiency and data management. My work
        included creating a user-friendly traffic studies web interface,
        integrating with Synchro, MS Access, and MySQL databases, and developing
        a traffic count management page that leverages the Google Maps API for
        data tracking and diagrams.
      </p>
    </Job>
  );
}
