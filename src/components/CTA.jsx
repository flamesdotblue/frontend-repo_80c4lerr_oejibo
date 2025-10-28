import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-involved" className="relative bg-slate-900 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(248,113,113,0.14),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Be the reason someone thrives
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Your generosity fuels meals, mentorship, and meaningful opportunities.
              Donate or volunteer to make an immediate impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Donate securely
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
              >
                Volunteer with us
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@upliftnow.org</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> (555) 123‑4567</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> 123 Hope St, River City</li>
            </ul>
            <p className="mt-4 text-sm text-slate-400">
              We are a registered non‑profit organization. Contributions may be tax‑deductible where applicable.
            </p>
          </div>
        </div>
        <p className="mt-14 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Uplift Now. All rights reserved.
        </p>
      </div>
    </section>
  );
}
