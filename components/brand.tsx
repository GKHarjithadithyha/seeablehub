import Link from "next/link";
import Image from "next/image";

export function Brand({
  light = false,
  priority = false,
}: {
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href="/" aria-label="SEEABLE HUB home">
      <Image
        className="brand-logo"
        src="/assets/seeable-hub-logo.png"
        alt="SEEABLE HUB Software Company"
        width={2172}
        height={724}
        priority={priority}
      />
    </Link>
  );
}
