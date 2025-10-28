import { ArrowRight, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800">
              <Heart className="h-3.5 w-3.5" /> Compassion in Action
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Empowering those who need it most
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600">
              We are a non‑profit dedicated to supporting people who are not yet
              self‑sufficient. Together, we provide essentials, skills, and a path
              to independence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 transition hover:bg-slate-50"
              >
                Explore Programs
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-0 bg-gradient-to-tr from-sky-200/60 via-white to-pink-100/60 blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1544531587-9e45b6c7ea2d?q=80&w=1600&auto=format&fit=crop"
              alt="Volunteers helping community"
              className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
