import Link from "next/link";
import Job, { Side } from "./Job";
const lbLogo = "/resume/assets/img/tca_logo.png";
const companyName = "R&S Engineers";
const companyHref =
  "https://play.google.com/store/apps/developer?id=Jared%27s+Coding+Shack";

export default function JCSAndroidDeveloper() {
  return (
    <Job
      start="November 2011"
      end="March 2019"
      company={companyName}
      companyHref={companyHref}
      logo={{ src: lbLogo, width: 100, height: 100 }}
      title="Java Developer"
      layout={Side.right}
    >
      <p>
        As an Independent Java App Developer based in Bakersfield, CA, I
        specialized in Android app development, successfully creating six
        diverse Android applications using Java. These apps collectively
        garnered over 115,000 downloads on the{" "}
        <Link
          href={companyHref}
          title={companyName}
          target={companyName.toLowerCase()}
        >
          Google Play Store
        </Link>
        , a testament to their popularity and user appeal. My work encompassed
        the entire app development lifecycle, from conceptualization to
        deployment, demonstrating my proficiency in Java and my ability to
        engage and satisfy a broad user base.
      </p>
    </Job>
  );
}
