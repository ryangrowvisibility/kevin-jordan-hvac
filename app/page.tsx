const PHONE = "(209) 538-2083";
const TEL = "tel:+12095382083";
const ADDRESS = "1108 S 1st St, Turlock, CA 95380";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Kevin%20Jordan%20Heating%20%26%20Air%20Services&query_place_id=ChIJoR6_TbiqkYARE10mwn1NhYw";
const MAP_EMBED = "https://maps.google.com/maps?q=1108+S+1st+St,+Turlock,+CA+95380&output=embed";
const RATING = 4.3;
const REVIEW_COUNT = 24;

type IconName =
  | "phone" | "snow" | "flame" | "droplet" | "fan" | "wrench" | "home" | "shield"
  | "user" | "clock" | "pin" | "star" | "check" | "calendar" | "message" | "leaf";

function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />,
    snow: <><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></>,
    flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.3 1.2 2.4 2.5 2.8Z" />,
    droplet: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 3c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7Z" />,
    fan: <><circle cx="12" cy="12" r="2" /><path d="M12 10c0-4 1-7 4-7 2 0 3 2 2 4s-4 3-6 3ZM14 12c4 0 7 1 7 4 0 2-2 3-4 2s-3-4-3-6ZM12 14c0 4-1 7-4 7-2 0-3-2-2-4s4-3 6-3ZM10 12c-4 0-7-1-7-4 0-2 2-3 4-2s3 4 3 6Z" /></>,
    wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />,
    home: <><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M9 22V12h6v10" /></>,
    shield: <><path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" /><path d="m9 12 2 2 4-4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    pin: <><path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></>,
    star: <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />,
    check: <path d="M20 6 9 17l-5-5" />,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
    message: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />,
    leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Stars({ value, className = "w-5 h-5" }: { value: number; className?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={`relative inline-block ${className}`}>
            <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[color:var(--color-line)]" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 24 24" className={`${className} text-[color:var(--color-star)]`} fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" />
              </svg>
            </span>
          </span>
        );
      })}
    </span>
  );
}

const SERVICES: { icon: IconName; title: string; body: string; specialty?: boolean }[] = [
  {
    icon: "fan",
    title: "Ductless Mini-Splits",
    body: "Mini-split systems heat and cool a room or zone without ductwork. They're a great fit for older homes without ducts, additions, garage conversions, and rooms that never stay comfortable. Kevin will help you choose the right size and the best spot for each indoor unit.",
    specialty: true,
  },
  {
    icon: "droplet",
    title: "Tankless Water Heaters",
    body: "A tankless water heater heats water on demand, so you don't run out halfway through a shower and you free up the space a big tank takes. We install new tankless units and replace old tank-style heaters.",
    specialty: true,
  },
  {
    icon: "snow",
    title: "AC Repair & Installation",
    body: "When the air conditioner quits in a Central Valley summer, you need it looked at fast. We diagnose and repair AC systems, and when a unit is past saving, we install a properly sized replacement.",
  },
  {
    icon: "flame",
    title: "Heating Repair & Installation",
    body: "Furnace not lighting, blowing cold air, or making new noises? We repair heating systems and install new furnaces and heat pumps so your home stays warm through the winter.",
  },
  {
    icon: "wrench",
    title: "HVAC Repair",
    body: "Strange noises, weak airflow, rising energy bills or a system that short-cycles: these are all signs something needs attention. We find the cause and explain what it will take to fix it.",
  },
  {
    icon: "home",
    title: "Central Heating & Air Service",
    body: "Routine service on central heating and air systems for homes and businesses in Turlock and across Stanislaus County. Regular care helps your system run efficiently and catches small problems early.",
  },
];

const STEPS = [
  { icon: "phone" as IconName, title: "Call the office", body: "Call (209) 538-2083, Monday through Friday. Taylor in the office will ask what's going on and find a time that works for you." },
  { icon: "user" as IconName, title: "Kevin takes a look", body: "Kevin comes out and checks your system, or the space where you want a mini-split or tankless water heater installed." },
  { icon: "message" as IconName, title: "Go over your options", body: "You'll hear what's wrong or what's needed in plain language, including whether a repair or a replacement makes more sense." },
  { icon: "check" as IconName, title: "Get it done", body: "Once you're ready, the work gets scheduled and completed, and you're back to a comfortable home." },
];

const FAQ = [
  {
    q: "What areas do you serve?",
    a: "We're based at 1108 S 1st St in Turlock and serve homes and businesses in Turlock and throughout Stanislaus County. If you're not sure whether you're in our area, just give us a call.",
  },
  {
    q: "What are your hours?",
    a: "The office is open Monday through Friday, 8 a.m. to 6 p.m. We're closed Saturdays. The best way to reach us is by phone at (209) 538-2083.",
  },
  {
    q: "Is a ductless mini-split right for my home?",
    a: "Mini-splits work well when you don't have ductwork, when you're adding a room or converting a garage, or when one area of the house never stays comfortable. Each indoor unit has its own controls, so you only heat or cool the rooms you're using. Kevin can look at your space and tell you whether a mini-split makes sense.",
  },
  {
    q: "Should I switch to a tankless water heater?",
    a: "Tankless water heaters provide hot water on demand and take up far less space than a tank. They're a good option if you run out of hot water often or your old tank is near the end of its life. We'll go over whether your home is a good fit before you decide.",
  },
  {
    q: "Should I repair my AC or replace it?",
    a: "It depends on the age of the system, what's wrong, and how much the repair costs compared to a new unit. We'll explain what we find and give you both options so you can make the call.",
  },
  {
    q: "Are you licensed?",
    a: "Yes. Kevin Jordan HVAC Inc is a licensed California HVAC contractor, and the business is listed with Clean Energy Connection.",
  },
  {
    q: "How long have you been in business?",
    a: "Kevin Jordan has been serving Turlock and Stanislaus County since 2017. Kevin does the technical work himself, and Taylor runs the office and scheduling.",
  },
];

const TOWNS = ["Turlock", "Modesto", "Ceres", "Hughson", "Denair", "Keyes", "Patterson", "Oakdale"];

export default function Page() {
  return (
    <>
      {/* Utility strip */}
      <div className="hidden md:block bg-[color:var(--color-navy-deep)] text-white/85 text-sm">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center justify-between">
          <span className="flex items-center gap-2"><Icon name="pin" className="w-4 h-4" /> Serving Turlock & Stanislaus County</span>
          <span className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Icon name="clock" className="w-4 h-4" /> Mon–Fri 8am–6pm</span>
            <span className="flex items-center gap-2"><Icon name="shield" className="w-4 h-4" /> Licensed CA HVAC Contractor</span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[color:var(--color-line)]">
        <div className="max-w-6xl mx-auto px-6 h-18 py-3 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-[color:var(--color-navy)] text-white flex items-center justify-center">
              <Icon name="fan" className="w-6 h-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-heading)] font-extrabold text-lg text-[color:var(--color-navy-deep)]">Kevin Jordan</span>
              <span className="block text-sm text-[color:var(--color-muted)] font-semibold">Heating & Air</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 font-semibold text-[color:var(--color-ink)]" aria-label="Main">
            <a href="#services" className="hover:text-[color:var(--color-cta)]">Services</a>
            <a href="#reviews" className="hover:text-[color:var(--color-cta)]">Reviews</a>
            <a href="#about" className="hover:text-[color:var(--color-cta)]">About</a>
            <a href="#area" className="hover:text-[color:var(--color-cta)]">Service Area</a>
            <a href="#faq" className="hover:text-[color:var(--color-cta)]">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden md:flex flex-col items-end leading-tight">
              <span className="text-xs font-semibold text-[color:var(--color-muted)]">Call us today</span>
              <span className="font-[family-name:var(--font-heading)] font-extrabold text-lg text-[color:var(--color-navy-deep)]">{PHONE}</span>
            </a>
            <a href={TEL} className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--color-cta)] hover:bg-[color:var(--color-cta-hover)] text-white font-bold px-4 md:px-5 h-12 transition-colors active:scale-[0.98] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-navy)]" aria-label={`Call ${PHONE}`}>
              <Icon name="phone" className="w-5 h-5" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="bg-[color:var(--color-tint)]">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-white border border-[color:var(--color-line)] px-3 py-1 text-sm font-semibold text-[color:var(--color-navy)]">
                <Icon name="pin" className="w-4 h-4" /> Locally owned in Turlock since 2017
              </p>
              <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-extrabold">
                Heating, AC &amp; Mini‑Split Installation in Turlock,&nbsp;CA
              </h1>
              <p className="mt-5 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl">
                Repairs and new installs for homes and businesses across Stanislaus County, including ductless mini-splits and tankless water heaters. Owner Kevin Jordan does the work himself, and customers call it impeccable.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--color-cta)] hover:bg-[color:var(--color-cta-hover)] text-white font-bold text-lg px-7 h-14 shadow-sm transition-colors active:scale-[0.98]">
                  <Icon name="phone" className="w-5 h-5" /> Call {PHONE}
                </a>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--color-navy)] text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white font-bold text-lg px-7 h-14 transition-colors active:scale-[0.98]">
                  See Our Services
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[color:var(--color-ink)] font-semibold">
                <span className="flex items-center gap-2">
                  <Stars value={RATING} /> <span>{RATING} on Google</span>
                </span>
                <span className="text-[color:var(--color-muted)]">{REVIEW_COUNT} reviews</span>
                <span className="flex items-center gap-1.5"><Icon name="calendar" className="w-5 h-5 text-[color:var(--color-navy)]" /> Since 2017</span>
                <span className="flex items-center gap-1.5"><Icon name="shield" className="w-5 h-5 text-[color:var(--color-navy)]" /> Licensed CA HVAC contractor</span>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-[color:var(--color-line)] shadow-[0_12px_40px_-12px_rgba(20,35,80,0.18)] overflow-hidden">
                <div className="bg-[color:var(--color-navy)] text-white px-7 py-5">
                  <p className="text-sm font-semibold text-white/75">What customers say</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="font-[family-name:var(--font-heading)] text-4xl font-extrabold">{RATING}</span>
                    <div>
                      <Stars value={RATING} />
                      <p className="text-sm text-white/80">from {REVIEW_COUNT} Google reviews</p>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-lg leading-relaxed">
                    &ldquo;Reviewers describe Kevin&rsquo;s work as <strong>impeccable</strong>, and say Taylor in the office is <strong>friendly and helpful</strong>.&rdquo;
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">Summary of Google reviews</p>
                  <ul className="mt-6 space-y-3 border-t border-[color:var(--color-line)] pt-5">
                    <li className="flex items-start gap-3"><Icon name="clock" className="w-5 h-5 mt-0.5 text-[color:var(--color-navy)]" /> <span><strong>Mon–Fri</strong> 8am–6pm · Sat closed</span></li>
                    <li className="flex items-start gap-3"><Icon name="pin" className="w-5 h-5 mt-0.5 text-[color:var(--color-navy)]" /> <span>{ADDRESS}</span></li>
                    <li className="flex items-start gap-3"><Icon name="phone" className="w-5 h-5 mt-0.5 text-[color:var(--color-navy)]" /> <a href={TEL} className="font-bold text-[color:var(--color-navy)] hover:underline">{PHONE}</a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-[color:var(--color-line)] bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "user" as IconName, title: "Owner does the work", sub: "Kevin handles the technical work" },
              { icon: "shield" as IconName, title: "Licensed contractor", sub: "Kevin Jordan HVAC Inc" },
              { icon: "fan" as IconName, title: "Mini-split specialists", sub: "Plus tankless water heaters" },
              { icon: "leaf" as IconName, title: "Clean Energy Connection", sub: "Listed contractor" },
            ].map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <span className="shrink-0 w-11 h-11 rounded-lg bg-[color:var(--color-navy-soft)] text-[color:var(--color-navy)] flex items-center justify-center">
                  <Icon name={t.icon} className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-bold text-[color:var(--color-navy-deep)]">{t.title}</span>
                  <span className="block text-sm text-[color:var(--color-muted)]">{t.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="font-bold text-[color:var(--color-cta)]">Our services</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Heating and cooling for Turlock homes and businesses</h2>
              <p className="mt-4 text-lg text-[color:var(--color-muted)]">
                From a quick repair to a brand-new system, we handle the heating, cooling and hot water needs of homes and businesses across Stanislaus County.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <article key={s.title} className={`relative rounded-2xl bg-white p-7 border transition-shadow hover:shadow-[0_12px_32px_-14px_rgba(20,35,80,0.25)] ${s.specialty ? "border-[color:var(--color-cta)] border-2" : "border-[color:var(--color-line)]"}`}>
                  {s.specialty && (
                    <span className="absolute top-5 right-5 rounded-full bg-[color:var(--color-cta)] text-white text-xs font-bold px-2.5 py-1">Specialty</span>
                  )}
                  <span className="w-12 h-12 rounded-xl bg-[color:var(--color-navy-soft)] text-[color:var(--color-navy)] flex items-center justify-center">
                    <Icon name={s.icon} className="w-7 h-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-[color:var(--color-muted)]">{s.body}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-[color:var(--color-navy)] hover:text-[color:var(--color-cta)]">
                    Ask about this service <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 md:py-24 bg-[color:var(--color-tint)] scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-bold text-[color:var(--color-cta)]">Reviews</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Rated {RATING} from {REVIEW_COUNT} Google reviews</h2>
                <div className="mt-3 flex items-center gap-2"><Stars value={RATING} className="w-6 h-6" /></div>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--color-navy)] text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white font-bold px-6 h-12 transition-colors">
                Read all reviews on Google
              </a>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <figure className="rounded-2xl bg-white border border-[color:var(--color-line)] p-8">
                <Stars value={5} />
                <blockquote className="mt-4 text-xl leading-relaxed text-[color:var(--color-ink)]">
                  Customers who&rsquo;ve had heating and air work done describe Kevin&rsquo;s workmanship as impeccable.
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-[color:var(--color-muted)]">Google reviewers · HVAC installation and repair</figcaption>
              </figure>
              <figure className="rounded-2xl bg-white border border-[color:var(--color-line)] p-8">
                <Stars value={5} />
                <blockquote className="mt-4 text-xl leading-relaxed text-[color:var(--color-ink)]">
                  Reviewers single out Taylor in the office as friendly and helpful when they call to set up service.
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-[color:var(--color-muted)]">Google reviewers · Scheduling and customer care</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-bold text-[color:var(--color-cta)]">About us</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">A Turlock HVAC company you can actually reach</h2>
              <div className="mt-6 space-y-4 text-lg text-[color:var(--color-muted)]">
                <p>
                  Kevin Jordan Heating & Air has been taking care of heating and cooling in Turlock and Stanislaus County since 2017. It&rsquo;s a local business, owned and run by Kevin Jordan.
                </p>
                <p>
                  Kevin does the technical work on every job, so the person who looks at your system is the person who owns the company. Taylor runs the office, answers the phone and handles scheduling, so you have one friendly person to talk to from the first call to the finished job.
                </p>
                <p>
                  Along with everyday heating and AC repair, Kevin specializes in ductless mini-split systems and tankless water heaters, two upgrades that can make an older home far more comfortable and efficient.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "user" as IconName, title: "Kevin on every job", body: "The owner does the work himself. No guessing who's showing up." },
                { icon: "phone" as IconName, title: "A real office", body: "Call during business hours and talk to Taylor, not a call center." },
                { icon: "fan" as IconName, title: "Mini-split know-how", body: "A specialty in ductless systems for homes without ductwork." },
                { icon: "pin" as IconName, title: "Local since 2017", body: "Based on S 1st St in Turlock, serving Stanislaus County." },
              ].map((d) => (
                <div key={d.title} className="rounded-2xl bg-[color:var(--color-tint)] p-6">
                  <span className="w-11 h-11 rounded-lg bg-white text-[color:var(--color-navy)] flex items-center justify-center border border-[color:var(--color-line)]">
                    <Icon name={d.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-[color:var(--color-muted)]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-24 bg-[color:var(--color-tint)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl">
              <p className="font-bold text-[color:var(--color-cta)]">How it works</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Getting help is simple</h2>
            </div>
            <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white border border-[color:var(--color-line)] p-7">
                  <span className="w-11 h-11 rounded-full bg-[color:var(--color-navy)] text-white font-[family-name:var(--font-heading)] font-extrabold text-lg flex items-center justify-center">{i + 1}</span>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-[color:var(--color-muted)]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-bold text-[color:var(--color-cta)]">Service area</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Serving Turlock and Stanislaus County</h2>
              <p className="mt-4 text-lg text-[color:var(--color-muted)]">
                Our shop is at 1108 S 1st St in Turlock. We work on homes and businesses throughout Stanislaus County, including:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {TOWNS.map((t) => (
                  <li key={t} className="rounded-full bg-[color:var(--color-navy-soft)] text-[color:var(--color-navy-deep)] font-semibold px-4 py-2">{t}</li>
                ))}
              </ul>
              <p className="mt-6 text-[color:var(--color-muted)]">Not sure if you&rsquo;re in our area? <a href={TEL} className="font-bold text-[color:var(--color-navy)] underline underline-offset-4">Give us a call</a>.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[color:var(--color-line)] aspect-[4/3]">
              <iframe
                title="Map of Kevin Jordan Heating & Air in Turlock, CA"
                src={MAP_EMBED}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 bg-[color:var(--color-tint)] scroll-mt-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-bold text-[color:var(--color-cta)]">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Common questions</h2>
            <div className="mt-10 space-y-3">
              {FAQ.map((f, i) => (
                <details key={f.q} className="group rounded-xl bg-white border border-[color:var(--color-line)]" open={i === 0}>
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-bold text-lg text-[color:var(--color-navy-deep)]">
                    {f.q}
                    <span className="faq-icon shrink-0 w-8 h-8 rounded-full bg-[color:var(--color-navy-soft)] text-[color:var(--color-navy)] flex items-center justify-center text-xl transition-transform" aria-hidden="true">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-[color:var(--color-muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[color:var(--color-navy)] text-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Need heating or AC help in Turlock?</h2>
              <p className="mt-3 text-lg text-white/80">Call the office Monday–Friday, 8am–6pm. Taylor will get you on Kevin&rsquo;s schedule.</p>
            </div>
            <a href={TEL} className="inline-flex items-center justify-center gap-3 rounded-lg bg-[color:var(--color-cta)] hover:bg-[color:var(--color-cta-hover)] text-white font-bold text-xl px-8 h-16 shrink-0 transition-colors active:scale-[0.98]">
              <Icon name="phone" className="w-6 h-6" /> Call {PHONE}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[color:var(--color-line)] pb-20 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-[family-name:var(--font-heading)] font-extrabold text-lg text-[color:var(--color-navy-deep)]">Kevin Jordan Heating & Air</p>
            <p className="mt-3 text-[color:var(--color-muted)]">Heating, air conditioning, mini-splits and tankless water heaters in Turlock and Stanislaus County since 2017.</p>
          </div>
          <div>
            <p className="font-bold text-[color:var(--color-navy-deep)]">Contact</p>
            <ul className="mt-3 space-y-2 text-[color:var(--color-muted)]">
              <li><a href={TEL} className="font-bold text-[color:var(--color-navy)] hover:underline">{PHONE}</a></li>
              <li>{ADDRESS}</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Get directions</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[color:var(--color-navy-deep)]">Hours</p>
            <ul className="mt-3 space-y-2 text-[color:var(--color-muted)]">
              <li>Monday–Friday: 8am–6pm</li>
              <li>Saturday: Closed</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-[color:var(--color-navy-deep)]">Services</p>
            <ul className="mt-3 space-y-2 text-[color:var(--color-muted)]">
              {SERVICES.map((s) => <li key={s.title}><a href="#services" className="hover:underline">{s.title}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-[color:var(--color-line)]">
          <div className="max-w-6xl mx-auto px-6 py-5 text-sm text-[color:var(--color-muted)] flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Kevin Jordan HVAC Inc. All rights reserved.</span>
            <span>Licensed California HVAC contractor</span>
          </div>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-2 p-3 bg-white border-t border-[color:var(--color-line)] shadow-[0_-6px_20px_-10px_rgba(20,35,80,0.25)]">
        <a href={TEL} className="flex items-center justify-center gap-2 rounded-lg bg-[color:var(--color-cta)] text-white font-bold h-12">
          <Icon name="phone" className="w-5 h-5" /> Call Now
        </a>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border-2 border-[color:var(--color-navy)] text-[color:var(--color-navy)] font-bold h-12">
          <Icon name="pin" className="w-5 h-5" /> Directions
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Kevin Jordan Heating & Air Services",
            telephone: "+1-209-538-2083",
            foundingDate: "2017",
            founder: { "@type": "Person", name: "Kevin Jordan" },
            address: {
              "@type": "PostalAddress",
              streetAddress: "1108 S 1st St",
              addressLocality: "Turlock",
              addressRegion: "CA",
              postalCode: "95380",
              addressCountry: "US",
            },
            openingHours: "Mo-Fr 08:00-18:00",
            areaServed: ["Turlock", "Stanislaus County"],
            hasMap: MAPS_URL,
            aggregateRating: { "@type": "AggregateRating", ratingValue: RATING, reviewCount: REVIEW_COUNT },
          }),
        }}
      />
    </>
  );
}
