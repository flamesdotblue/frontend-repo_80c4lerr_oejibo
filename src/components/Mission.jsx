import { CheckCircle, Users, Globe } from "lucide-react";

const bullets = [
  {
    icon: Users,
    title: "Dignity First",
    desc: "Every person deserves respect, care, and a real chance to thrive.",
  },
  {
    icon: Globe,
    title: "Community Powered",
    desc: "Local partnerships and volunteers amplify our collective impact.",
  },
  {
    icon: CheckCircle,
    title: "Sustainable Paths",
    desc: "From essentials to education and jobs, we focus on long‑term independence.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-slate-600">
            We assist individuals who are not yet self‑sufficient with resources,
            mentorship, and opportunities that build confidence and capability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
