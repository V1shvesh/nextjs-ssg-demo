import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <Link href="/">Home</Link>
      <Link href="/pages-route">SSG with Pages router</Link>
      <Link href="/app-route">SSG with App router</Link>
    </div>
  );
};

export default Header;
