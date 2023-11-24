import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  href?: string;
  logo?: { src: string; width: number; height: number };
}

export default function Logo(props: Readonly<Props>) {
  if (!props.href) {
    return props.name;
  }

  return (
    <Link href={props.href} target={props.name}>
      {props.logo ? (
        <Image
          className="logo"
          alt={props.name}
          src={props.logo.src}
          width={props.logo.width}
          height={props.logo.height}
        />
      ) : (
        props.name
      )}
    </Link>
  );
}
