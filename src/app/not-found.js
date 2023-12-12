import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <h2 className="text-3xl text-black">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
