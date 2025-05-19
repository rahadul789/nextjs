import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple example of a Next.js application.</p>
      <Button>React</Button>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
