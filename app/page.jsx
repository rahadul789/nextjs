import Link from "next/link";

export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return (
    <div className="">
      <h1>Welcome to Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>

      <div className=" mt-10">
        <h1 className=" text-3xl font-semibold mb-4"> Data Featching</h1>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </div>
  );
}
