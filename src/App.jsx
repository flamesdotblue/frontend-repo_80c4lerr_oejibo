import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-sky-600" />
            <span className="font-semibold">Uplift Now</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            <a className="hover:text-slate-900" href="#mission">Mission</a>
            <a className="hover:text-slate-900" href="#programs">Programs</a>
            <a className="hover:text-slate-900" href="#get-involved">Get involved</a>
          </nav>
          <a
            href="#get-involved"
            className="inline-flex items-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700"
          >
            Donate
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Mission />
        <Programs />
        <CTA />
      </main>
    </div>
  );
}

export default App;
