import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
              <span className="text-lg font-semibold">1T</span>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Site under development
              </h1>
              <p className="mt-2 text-slate-600 leading-relaxed">
                We’re working on something new and improved. Thanks for stopping
                by — we’ll be live soon.
              </p>

              <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="text-sm font-medium text-slate-900">
                  Need to reach us?
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Email us and we’ll get back to you as soon as possible.
                </p>

                <a
                  href="mailto:info@1technologiesltd.com"
                  className="mt-3 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
                >
                  Contact: info@1technologiesltd.com
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                © {new Date().getFullYear()} 1Techonolo. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          Thank you for visiting.
        </p>
      </div>
    </main>
  );
}
