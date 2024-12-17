import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>click to reset password</p>
      <Link href="/reset-password">Reset password</Link>
    </div>
  );
}
