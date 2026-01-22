// app/users/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface Address {
  suite: string;
  street: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

async function getUser(id: string): Promise<User | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data: User = await res.json();
  if (!data?.id) return null;

  return data;
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-slate-100 py-3 last:border-b-0">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="text-sm font-medium text-slate-900 text-right break-words max-w-[65%]">
        {value}
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id || Array.isArray(id)) return notFound();

  const user = await getUser(id);
  if (!user) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium tracking-wide text-slate-500">
              USER PROFILE
            </p>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
              {user.name}
            </h1>
            <p className="mt-1 text-sm text-slate-600">@{user.username}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              ID {user.id}
            </span>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
            >
              ← Back
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Quick actions card */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-semibold">
                  {user.name?.slice(0, 1)?.toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-600">@{user.username}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <a
                  href={`mailto:${user.email}`}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                >
                  Email
                </a>

                <a
                  href={`tel:${user.phone}`}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
                >
                  Call
                </a>

                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
                >
                  Visit Website
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Contact actions open your default apps.
              </p>
            </div>
          </aside>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">
                  Contact Information
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Basic details and ways to reach the user.
                </p>
              </div>
              <div className="p-6">
                <InfoRow label="Email" value={user.email} />
                <InfoRow label="Phone" value={user.phone} />
                <InfoRow
                  label="Website"
                  value={
                    <a
                      className="underline underline-offset-4 text-slate-900 hover:text-slate-700"
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.website}
                    </a>
                  }
                />
              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">
                  Address
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Location and coordinates.
                </p>
              </div>
              <div className="p-6">
                <InfoRow
                  label="Full address"
                  value={`${user.address?.suite}, ${user.address?.street}, ${user.address?.city} ${user.address?.zipcode}`}
                />
                <InfoRow label="Latitude" value={user.address?.geo?.lat} />
                <InfoRow label="Longitude" value={user.address?.geo?.lng} />
              </div>
            </div>

            {/* Company */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">
                  Company
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Workplace and business details.
                </p>
              </div>
              <div className="p-6">
                <InfoRow label="Name" value={user.company?.name} />
                <InfoRow
                  label="Catch phrase"
                  value={user.company?.catchPhrase}
                />
                <InfoRow label="Business" value={user.company?.bs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
