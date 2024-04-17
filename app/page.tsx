import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <h1>Jest test heading</h1>
      <Link className="text-blue-500" href="/login">Login Page!</Link>
    </div>
  );
}
