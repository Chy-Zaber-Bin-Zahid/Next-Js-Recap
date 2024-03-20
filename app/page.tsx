import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/login">Login Page!</Link>
    </div>
  );
}
