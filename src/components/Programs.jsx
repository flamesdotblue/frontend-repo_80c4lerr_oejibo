import { BookOpen, Utensils, Shield, Briefcase } from "lucide-react";

const programs = [
  {
    icon: Utensils,
    name: "Essential Aid",
    desc: "Nutritious meals, hygiene kits, and emergency supplies for immediate relief.",
  },
  {
    icon: BookOpen,
    name: "Education & Skills",
    desc: "Workshops and tutoring that build practical skills and confidence.",
  },
  {
    icon: Briefcase,
    name: "Career Support",
    desc: "Resume clinics, interview prep, and local employer connections.",
  },
  {
    icon: Shield,
    name: "Advocacy & Safety",
    desc: "Guidance on housing, legal aid, and safe pathways to stability.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Programs that make a difference
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Our initiatives address immediate needs while opening doors to long‑term
              opportunity.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-50/0 via-sky-50/0 to-sky-100/40 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
