import Link from "next/link";

export default async function Home() {
  const data = await fetch("http://localhost:4000/api/blogs");
  const posts = await data.json();

  return (
    <div className="">
      <h1>Welcome to Next.js!</h1>
      <Link href="/dashboard">Dashboard</Link>

      <div className=" mt-10">
        <h1 className=" text-3xl font-semibold mb-4"> Data Featching</h1>
        {posts.map((post) => (
          <Link href={`blog/${post._id}`} key={post._id}>
            <p>{post.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
