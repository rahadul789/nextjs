import { notFound } from "next/navigation";

async function fetchPost(id) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Blog({ params }) {
  const { id } = await params;
  const post = await fetchPost(id);

  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div className=" mt-10">
        <h1 className=" text-3xl font-semibold mb-4">{post.title}</h1>
        <p>{post.content}</p>
        <span className=" text-sm text-gray-500">-{post.author}</span>
      </div>
    </div>
  );
}
