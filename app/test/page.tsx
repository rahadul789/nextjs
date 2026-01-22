import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Next.js User Directory
            </h1>
            <p className="text-sm text-slate-600">
              Server-side fetched users from JSONPlaceholder
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Users</h2>
            <p className="mt-1 text-sm text-slate-600">
              Click a user to view their details.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-1">
              Total:{" "}
              <span className="ml-1 font-medium text-slate-700">
                {users.length}
              </span>
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user: any) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-slate-800">
                    {user.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    @{user.username}
                  </p>
                </div>

                <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  ID {user.id}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email</span>
                  <span className="font-medium text-slate-700 truncate max-w-[60%] text-right">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Company</span>
                  <span className="font-medium text-slate-700 truncate max-w-[60%] text-right">
                    {user.company?.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">City</span>
                  <span className="font-medium text-slate-700 truncate max-w-[60%] text-right">
                    {user.address?.city}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">
                  View details
                </span>
                <span className="text-slate-400 group-hover:text-slate-600 transition">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
