import { Construction, Home, Mail } from "lucide-react";
import Link from "next/link";

export default function Notfound() {
    return (
                <main className="relative isolate min-h-dvh overflow-hidden bg-neutral-950 text-neutral-100">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden
      >
        {/* radial glows */}
        <div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.35),transparent_60%)] blur-3xl" />

        {/* subtle grid */}
        <svg className="absolute inset-0 h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 py-24 text-center md:gap-14 md:py-32">
        {/* Icon / Illustration */}
        <div className="relative">
          <div className="mx-auto grid size-28 place-items-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm md:size-32">
            <Construction height={120} width={120} />
          </div>

          {/* caution tape */}
          <div className="pointer-events-none absolute -inset-x-6 -bottom-8 select-none md:-inset-x-10">
            <div className="relative mx-auto h-10 max-w-xl rotate-[-6deg] overflow-hidden rounded-lg border border-yellow-400/50 bg-yellow-300/80 shadow-lg">
              <div className="absolute inset-0 animate-[slide_2.5s_linear_infinite] [--stripe:repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,.5)_10px,rgba(0,0,0,.5)_20px)] [background:var(--stripe)] bg-[length:28px_28px]" />
              <span className="relative z-10 grid h-full place-items-center font-mono text-xs uppercase tracking-widest text-white md:text-sm">
                Trenutačno pod izradom!
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 md:space-y-5">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            404
            <span className="sr-only"> — </span>
            <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Stranica pod izradom!
            </span>
          </h1>
          <p className="mx-auto max-w-prose text-balance text-base text-neutral-300 md:text-lg">
            Stranica koju tražite još ne postoji ili je trenutno u izradi. U međuvremenu, evo nekoliko korisnih poveznica.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400 md:px-6 md:py-3.5 md:text-base"
          >
            <Home />
            Nazad na početnu
          </Link>
          <Link
            href="mailto:trycaze@proton.me?subject=Prijava%20Greške&"
            className="inline-flex items-center gap-2 rounded-2xl borer border-white/10 bg-white/5 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400 md:px-6 md:py-3.5 md:text-base"
          >
            <Mail />
            Prijavite grešku
          </Link>
        </div>

        {/* Helpful links */}
        <ul className="grid w-full gap-3 sm:grid-cols-2 md:gap-4">
          {[
            { href: "/blog", title: "Blogovi", desc: "Pročitajte novosti." },
            { href: "/case-studies", title: "Studiji slučajeva", desc: "Pročitajte nova istraživanja." },
            { href: "/services", title: "Usluge", desc: "Saznajte što je novo." },
            { href: "mailto:trycaze@proton.me", title: "Kontakt", desc: "Javite nam se." },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-sm backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs opacity-70 transition group-hover:opacity-100">
                    Odi
                  </span>
                </div>
                <p className="mt-1 max-w-prose text-sm text-neutral-300 md:text-[0.95rem]">
                  {item.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Keyframes for caution tape */}
      <style>{`
        @keyframes slide { from { background-position: 0 0; } to { background-position: 56px 0; } }
      `}</style>
    </main>
    )
}