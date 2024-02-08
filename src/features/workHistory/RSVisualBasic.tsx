import Link from "next/link";
import Job, { Side } from "./Job";
const lbLogo = "/tech-profile/assets/img/r&s engineers_dark_mode.png";
const companyName = "R&S Engineers";
const companyHref = "https://www.rscivil.com/";

export default function RSVisualBasic() {
  return (
    <Job
      start="December 2002"
      end="March 2008"
      company={companyName}
      companyHref={companyHref}
      logo={{ src: lbLogo, width: 190, height: 79 }}
      title="Visual Basic Developer"
      layout={Side.left}
    >
      <p>
        As a Visual Basic Developer at{" "}
        <Link
          href={companyHref}
          title={companyName}
          target={companyName.toLowerCase()}
        >
          {companyName}
        </Link>
        , my role was pivotal in enhancing data management and analysis for
        traffic studies. I developed and managed extensive traffic count and
        project databases, handling records from over 400 counters and featuring
        advanced functions for analyzing data from more than 1,600 traffic
        studies. My work also included creating custom AutoCAD software using
        VBA for efficient data import from these databases, and I developed a
        comprehensive GIS mapping system to generate detailed roadway tables for
        traffic studies, demonstrating my capability in integrating complex
        software systems and handling large-scale data.
      </p>
    </Job>
  );
}
