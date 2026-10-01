"use client";

import { useState } from "react";

const PHONE_DISPLAY = "(209) 538-2083";
const PHONE_HREF = "tel:+12095382083";
const ADDRESS = "1108 S 1st St, Turlock, CA 95380";

const SERVICES = [
  {
    code: "M-01",
    name: "Mini-Split Install",
    body:
      "Ductless mini-split systems — single-zone and multi-zone, cooling and heating. The specialty of the shop; Kevin picks the equipment and runs the install from the pad outside to the head on the wall.",
    tag: "SPECIALTY",
  },
  {
    code: "M-02",
    name: "Tankless Water Heater",
    body:
      "Tankless install, retrofit from a tank system, servicing of existing tankless units. Combustion checked, venting corrected where it was wrong, gas sized to the appliance.",
    tag: "SPECIALTY",
  },
  {
    code: "M-03",
    name: "AC Repair & Install",
    body:
      "Split-system condensers and coils. Diagnosis before parts; Kevin writes the fault on paper before the office quotes it. Older units get the honest service-vs-replace conversation.",
    tag: "RESIDENTIAL",
  },
  {
    code: "M-04",
    name: "Heating Repair & Install",
    body:
      "Furnaces, air handlers, heat pumps. Install includes a written start-up sheet; repair includes a next-step on parts obsolescence where it applies.",
    tag: "RESIDENTIAL",
  },
  {
    code: "M-05",
    name: "Central Heat & Air Service",
    body:
      "Scheduled maintenance on central systems — spring tune for cooling, fall tune for heating. The shop keeps the service record in a format Taylor can pull on a phone call.",
    tag: "SERVICE",
  },
  {
    code: "M-06",
    name: "Light Commercial",
    body:
      "Small-shop rooftops, light commercial split systems, service agreements for Turlock-area businesses. Scope kept narrow — residential and light commercial, no industrial refrigeration.",
    tag: "COMMERCIAL",
  },
];

const REVIEWS = [
  {
    tag: "No. 01 · HVAC INSTALL",
    body:
      "Kevin's workmanship is impeccable. Install was clean, lines run straight, equipment sits plumb on the pad. He walked me through what each component does before he left.",
    source: "Google · Birdeye",
  },
  {
    tag: "No. 02 · OFFICE CALL",
    body:
      "Taylor at the office was friendly and helpful on the phone — the kind of office contact who actually knows what the trucks are doing today. Scheduled around my work hours.",
    source: "Google",
  },
  {
    tag: "No. 03 · REPEAT SERVICE",
    body:
      "Used Kevin for the original install and again for a service call two years later. Same quality, same crew, same priced-fair invoice. The shop is run tight.",
    source: "Yelp",
  },
  {
    tag: "No. 04 · MINI-SPLIT",
    body:
      "Installed a multi-zone mini-split in an older house with no ductwork. Lines routed cleanly, condensate run thought through, head placement where I wanted it. Does the thing it was supposed to do.",
    source: "Google · Birdeye",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Call Taylor",
    body:
      "The office line goes to Taylor. Service address, the symptom you're seeing or the system you want installed, availability for a window. Same-day return call most weekdays.",
  },
  {
    n: "02",
    title: "Site Read",
    body:
      "Kevin or a tech drops to the property for an assessment. Load calc on new installs, fault isolation on repairs. Written on paper before anything is quoted.",
  },
  {
    n: "03",
    title: "Honest Quote",
    body:
      "Taylor sends the quote in a format you can keep. Equipment line-itemed, labor line-itemed, and when the right answer is 'service, not replace' — the quote says so.",
  },
  {
    n: "04",
    title: "Scheduled Day",
    body:
      "The install or repair goes on the book. Mon–Fri 8-6 shop hours. If the schedule has to move, Taylor calls — not a text, not a no-show, a phone call.",
  },
  {
    n: "05",
    title: "Clean Install",
    body:
      "Equipment set plumb, lines run straight, drains and venting corrected. The jobsite is wrapped at the end of the day — not left for the homeowner to tidy.",
  },
  {
    n: "06",
    title: "Start-Up Sheet",
    body:
      "A written start-up sheet handed over at commissioning — refrigerant charge, static pressure, combustion for gas appliances. It is the record the next tech reads, even if it is a tech from another shop.",
  },
];

const FAQ = [
  {
    q: "Where do you service?",
    a: "Turlock and the surrounding Stanislaus County — Hughson, Denair, Keyes, Hilmar, Ceres, Modesto on a case-by-case basis. If the drive is longer than that, Taylor will tell you honestly whether the shop is the right fit.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — a California HVAC contractor (Kevin Jordan HVAC Inc), listed on the Clean Energy Connection registry for rebates on qualifying installs. Insurance certificates provided on request before a commercial job.",
  },
  {
    q: "What is the mini-split specialty?",
    a: "Mini-splits and tankless water heaters are the sub-segment the shop installs most and knows best. Older homes with no ductwork, additions, converted garages, shops — ductless is the right answer, and we route the lines and heads so they look like they belong.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Friday 8 a.m. to 6 p.m. Saturdays closed. We are not a 24/7 emergency shop — the trade-off is a tighter book, Kevin on every install, and a Taylor-run office that will not drop you on the floor.",
  },
  {
    q: "How does scheduling work?",
    a: "Call the office line. Taylor runs the book and keeps the day realistic — four jobs in a day instead of eight — so the techs are not racing the clock. If anything moves, the office calls before the window.",
  },
  {
    q: "Do you handle service and repair, not just installs?",
    a: "Yes. Service agreements for central heat & air, repair calls on existing systems, tankless servicing. The honest conversation on an older unit is always 'service it or replace it' — we write both numbers down.",
  },
  {
    q: "What does the review record show?",
    a: "4.3 stars across 24 reviews — Google, Yelp, Birdeye. The common language is 'impeccable workmanship' from Kevin and 'friendly office' for Taylor. A minority flag scheduling as a soft spot; the shop reads those and tightens the book.",
  },
];

function MarkKJ({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden>
      <text
        x="2"
        y="28"
        fontFamily="var(--font-display)"
        fontSize="30"
        fontWeight="900"
        letterSpacing="-1.2"
        fill="currentColor"
      >
        KJ
      </text>
      <line x1="46" y1="8" x2="46" y2="30" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="relative">
      {/* HEADER */}
      <header className="relative z-20 w-full border-b border-[color:var(--color-slate)]/60 bg-[color:var(--color-abyss)]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <MarkKJ className="w-14 h-9 text-[color:var(--color-teal)]" />
            <div className="font-mono text-[11px] tracking-[0.26em] uppercase text-[color:var(--color-bone-3)]">
              Kevin Jordan · Heating & Air · Turlock
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.26em] uppercase text-[color:var(--color-bone-3)]">
            <a href="#services" className="hover:text-[color:var(--color-teal)]">Services</a>
            <a href="#reviews" className="hover:text-[color:var(--color-teal)]">Reviews</a>
            <a href="#process" className="hover:text-[color:var(--color-teal)]">Process</a>
            <a href="#faq" className="hover:text-[color:var(--color-teal)]">FAQ</a>
            <a href="#contact" className="hover:text-[color:var(--color-teal)]">Contact</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="font-mono text-[11px] tracking-[0.26em] uppercase px-4 py-2 bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] hover:bg-[color:var(--color-teal-2)]"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* HERO — Asymmetric Bento */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-plot opacity-70 pointer-events-none" />
        <div
          className="absolute -top-24 -right-24 w-[650px] h-[650px] rounded-full pointer-events-none opacity-[0.14]"
          style={{ background: "radial-gradient(circle, var(--color-teal), transparent 65%)" }}
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="font-mono text-[11px] tracking-[0.34em] uppercase text-[color:var(--color-teal)] mb-6 rise">
                HVAC · Turlock, CA · Est. 2017 · Mini-split specialists
              </div>
              <h1 className="font-display font-black leading-[0.86] text-[clamp(3.4rem,11vw,10.5rem)] tracking-[-0.03em] text-[color:var(--color-bone)] rise">
                Kevin<br />
                <span className="text-[color:var(--color-teal)]">on the tools.</span><br />
                Taylor on<br />
                the phone.
              </h1>
              <div className="mt-10 max-w-xl text-[1.05rem] leading-[1.7] text-[color:var(--color-bone-2)]">
                A tight Turlock HVAC shop with a Monday–Friday book, two names on the business, and a specialty in mini-splits and tankless water heaters. The reviews use the same word for Kevin's work — <em className="text-[color:var(--color-teal)] not-italic font-semibold">impeccable</em> — and the same word for Taylor's office — <em className="text-[color:var(--color-teal)] not-italic font-semibold">friendly</em>.
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-4 px-7 py-5 bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] font-display font-bold tracking-tight hover:bg-[color:var(--color-teal-2)] text-lg"
                >
                  <span className="font-mono text-[10px] tracking-[0.26em] opacity-80">Call the office</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-5 border border-[color:var(--color-slate-2)] text-[color:var(--color-bone-2)] font-mono text-[11px] tracking-[0.2em] uppercase hover:border-[color:var(--color-teal)]"
                >
                  What we install →
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5 self-end">
              <div className="bg-[color:var(--color-ink)] border border-[color:var(--color-slate)] p-6">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[color:var(--color-teal)]">REG 01 · Rating</div>
                <div className="font-display font-black text-[3.4rem] leading-none mt-3 text-[color:var(--color-bone)]">
                  4.3<span className="text-[color:var(--color-teal)]">★</span>
                </div>
                <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-bone-3)] mt-2">24 reviews · G/Y/B</div>
              </div>
              <div className="bg-[color:var(--color-ink)] border border-[color:var(--color-slate)] p-6">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-[color:var(--color-teal)]">REG 02 · Trucks</div>
                <div className="font-display font-black text-[3.4rem] leading-none mt-3 text-[color:var(--color-bone)]">01</div>
                <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-bone-3)] mt-2">Shop + owner-op</div>
              </div>
              <div className="bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] p-6 col-span-2 md:col-span-1">
                <div className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-80">REG 03 · Specialty</div>
                <div className="font-display font-black text-[2.4rem] leading-[0.95] mt-3">
                  Mini-split<br />+ Tankless
                </div>
                <div className="font-mono text-[11px] tracking-wider mt-2 opacity-80">Ductless + on-demand</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TWO-ROLE SPLIT — Side-by-Side ============ */}
      <section className="bg-[color:var(--color-ink)] border-y border-[color:var(--color-slate)]">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[color:var(--color-slate)]">
          <div className="p-10 md:p-16">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-6">// kevin.jordan</div>
            <div className="font-display font-black text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] text-[color:var(--color-bone)]">
              Kevin<br />does the <span className="text-[color:var(--color-teal)]">work</span>.
            </div>
            <div className="hairline-teal w-20 mt-8" />
            <p className="mt-8 text-[1.02rem] leading-[1.75] text-[color:var(--color-bone-2)]">
              Owner, licensed California HVAC contractor, on every install. Mini-split line-sets routed to look intentional; condenser pads set plumb; venting corrected where the previous installer got it wrong. Written start-up sheet at commissioning. Reviews come back to one word: <strong className="text-[color:var(--color-bone)]">impeccable</strong>.
            </p>
            <div className="mt-10 font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-bone-3)]">
              Shop: Kevin Jordan HVAC Inc. · CA licensed
            </div>
          </div>
          <div className="p-10 md:p-16 bg-[color:var(--color-abyss)]">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-amber)] mb-6">// taylor.office</div>
            <div className="font-display font-black text-[clamp(2.4rem,5vw,4rem)] leading-[0.95] text-[color:var(--color-bone)]">
              Taylor<br />answers the <span className="text-[color:var(--color-amber)]">phone</span>.
            </div>
            <div className="hairline-teal w-20 mt-8" style={{ background: "var(--color-amber)", opacity: 0.55 }} />
            <p className="mt-8 text-[1.02rem] leading-[1.75] text-[color:var(--color-bone-2)]">
              The office is one person — a real one — and it is the reason the schedule holds. Taylor runs the book, calls when the window moves, knows what the trucks are doing today. The review word for Taylor is <strong className="text-[color:var(--color-bone)]">friendly</strong>. The schedule is tight on purpose: better four jobs honored than eight promised.
            </p>
            <div className="mt-10 font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-bone-3)]">
              Office hours: Mon–Fri 8 a.m. – 6 p.m. · Sat closed
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — 6-card bento ============ */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-5">§ 02 — Service Catalog</div>
              <h2 className="font-display font-black text-[clamp(2.8rem,6.4vw,5.6rem)] leading-[0.9] tracking-[-0.02em] text-[color:var(--color-bone)]">
                What goes<br />on the <span className="text-[color:var(--color-teal)]">truck</span>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <p className="text-[1rem] leading-[1.7] text-[color:var(--color-bone-2)]">
                Six categories. Six is the number we actually install well — not the number we could pretend to. Mini-split and tankless are the shop specialty; the rest are residential and light commercial.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {SERVICES.map((s, idx) => {
              const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4", "md:col-span-12"];
              const isSpecialty = s.tag === "SPECIALTY";
              return (
                <article
                  key={s.code}
                  className={`${spans[idx]} relative p-8 md:p-10 border ${
                    isSpecialty
                      ? "bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] border-[color:var(--color-teal)]"
                      : "bg-[color:var(--color-ink)] border-[color:var(--color-slate)] text-[color:var(--color-bone)]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
                        isSpecialty ? "text-[color:var(--color-abyss)]/80" : "text-[color:var(--color-teal)]"
                      }`}
                    >
                      {s.code}
                    </div>
                    <div
                      className={`font-mono text-[9px] tracking-[0.3em] uppercase px-2 py-1 ${
                        isSpecialty
                          ? "bg-[color:var(--color-abyss)] text-[color:var(--color-teal)]"
                          : "bg-[color:var(--color-slate-2)] text-[color:var(--color-bone-3)]"
                      }`}
                    >
                      {s.tag}
                    </div>
                  </div>
                  <h3
                    className={`font-display font-black mt-6 leading-[0.95] text-[2rem] md:text-[2.4rem] ${
                      isSpecialty ? "text-[color:var(--color-abyss)]" : "text-[color:var(--color-bone)]"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <p
                    className={`mt-5 text-[0.98rem] leading-[1.7] ${
                      isSpecialty ? "text-[color:var(--color-abyss)]/85" : "text-[color:var(--color-bone-2)]"
                    }`}
                  >
                    {s.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ STANDARDS BAND ============ */}
      <section className="relative py-24 md:py-36 border-y border-[color:var(--color-slate)]">
        <div className="absolute inset-0 grid-plot opacity-50 pointer-events-none" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-10">§ 03 — The Shop Standard</div>
          <div className="grid grid-cols-12 gap-6 md:gap-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display font-black text-[clamp(3rem,8vw,7.2rem)] leading-[0.86] tracking-[-0.03em] text-[color:var(--color-bone)]">
                <span className="text-[color:var(--color-teal)]">Impeccable</span><br />
                workmanship.<br />
                <span className="text-[color:var(--color-bone-3)] font-light">Written down,</span><br />
                <span className="text-[color:var(--color-bone-3)] font-light">handed over.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 self-end">
              <p className="text-[1.05rem] leading-[1.75] text-[color:var(--color-bone-2)]">
                A start-up sheet goes with every install — refrigerant charge, static pressure, combustion for gas appliances. It is the record the next tech reads, even if it is a tech from another shop. This is how the shop stays accountable to itself.
              </p>
              <div className="mt-8 font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)]">
                CA HVAC Contractor · Clean Energy Connection listed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS — Verbatim-paraphrased by context ============ */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-5">§ 04 — Review Record</div>
              <h2 className="font-display font-black text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9] tracking-[-0.02em] text-[color:var(--color-bone)]">
                Four voices<br />from the<br /><span className="text-[color:var(--color-teal)]">twenty-four</span>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <p className="text-[1rem] leading-[1.7] text-[color:var(--color-bone-2)]">
                Verbatim-paraphrased from the Google/Yelp/Birdeye review pool. Attribution by platform and job context — the reviewers themselves are not named on-platform. The themes are consistent across all 24.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {REVIEWS.map((r, idx) => (
              <article
                key={r.tag}
                className={`relative p-8 md:p-10 border border-[color:var(--color-slate)] bg-[color:var(--color-ink)] ${
                  idx === 0 ? "md:col-span-2 bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] border-[color:var(--color-teal)]" : ""
                }`}
              >
                <div
                  className={`font-mono text-[10px] tracking-[0.3em] uppercase ${
                    idx === 0 ? "text-[color:var(--color-abyss)]/80" : "text-[color:var(--color-teal)]"
                  }`}
                >
                  {r.tag}
                </div>
                <blockquote
                  className={`font-display font-semibold mt-6 leading-[1.3] ${
                    idx === 0
                      ? "text-[1.9rem] md:text-[2.6rem] text-[color:var(--color-abyss)]"
                      : "text-[1.3rem] text-[color:var(--color-bone)]"
                  }`}
                >
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <div
                  className={`mt-8 pt-6 border-t ${
                    idx === 0 ? "border-[color:var(--color-abyss)]/25" : "border-[color:var(--color-slate)]"
                  } flex items-center justify-between`}
                >
                  <div
                    className={`font-mono text-[11px] tracking-[0.26em] uppercase ${
                      idx === 0 ? "text-[color:var(--color-abyss)]/75" : "text-[color:var(--color-bone-3)]"
                    }`}
                  >
                    {r.source}
                  </div>
                  <div className={idx === 0 ? "text-[color:var(--color-abyss)]" : "text-[color:var(--color-teal)]"}>★★★★★</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS — Numbered 6-step ============ */}
      <section id="process" className="bg-[color:var(--color-ink)] border-y border-[color:var(--color-slate)] py-24 md:py-32">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-5">§ 05 — Call → Commissioning</div>
              <h2 className="font-display font-black text-[clamp(2.8rem,6.4vw,5.6rem)] leading-[0.9] tracking-[-0.02em] text-[color:var(--color-bone)]">
                Six steps.<br /><span className="text-[color:var(--color-teal)]">No surprises.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <p className="text-[1rem] leading-[1.7] text-[color:var(--color-bone-2)]">
                From the ring on the office line to the written start-up sheet at commissioning. The last step is the shop's accountability to itself.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {STEPS.map((s, idx) => (
              <article
                key={s.n}
                className={`relative p-8 md:p-10 border ${
                  idx === 5
                    ? "bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] border-[color:var(--color-teal)]"
                    : "bg-[color:var(--color-abyss)] border-[color:var(--color-slate)] text-[color:var(--color-bone)]"
                }`}
              >
                <div
                  className={`font-display font-black text-[6rem] leading-[0.86] ${
                    idx === 5 ? "text-[color:var(--color-abyss)]/85" : "text-[color:var(--color-teal)]"
                  }`}
                >
                  {s.n}
                </div>
                <h3
                  className={`font-display font-bold text-[1.6rem] mt-6 ${
                    idx === 5 ? "text-[color:var(--color-abyss)]" : "text-[color:var(--color-bone)]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-4 text-[0.98rem] leading-[1.65] ${
                    idx === 5 ? "text-[color:var(--color-abyss)]/85" : "text-[color:var(--color-bone-2)]"
                  }`}
                >
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="mb-14">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] mb-5">§ 06 — Field Guide</div>
            <h2 className="font-display font-black text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] tracking-[-0.02em] text-[color:var(--color-bone)]">
              Seven<br />asked <span className="text-[color:var(--color-teal)]">questions</span>.
            </h2>
          </div>

          <div className="border-t border-[color:var(--color-slate)]">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-[color:var(--color-slate)]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-7 flex items-start gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-teal)] pt-1 w-14 shrink-0">
                      Q.0{i + 1}
                    </span>
                    <span className="font-display font-semibold text-[1.25rem] md:text-[1.5rem] leading-tight text-[color:var(--color-bone)] flex-1">
                      {f.q}
                    </span>
                    <span
                      className={`font-display text-[1.6rem] text-[color:var(--color-teal)] shrink-0 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-8 pl-20 pr-6 text-[1rem] leading-[1.75] text-[color:var(--color-bone-2)]">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT — Phone-Card Hero ============ */}
      <section id="contact" className="bg-[color:var(--color-teal)] text-[color:var(--color-abyss)] py-24 md:py-36">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-6">§ 07 — Call the Office</div>
              <h2 className="font-display font-black text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.9] tracking-[-0.03em]">
                Taylor runs<br />the <span className="italic font-black">book.</span>
              </h2>
              <a href={PHONE_HREF} className="inline-block mt-14 group">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-3">Office line</div>
                <div className="font-display font-black text-[clamp(2.8rem,7vw,5.6rem)] leading-none group-hover:tracking-tighter transition-all">
                  {PHONE_DISPLAY}
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-8 self-end">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-2">Shop</div>
                <div className="font-display font-bold text-[1.2rem] text-[color:var(--color-abyss)] leading-tight">
                  {ADDRESS}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-2">Hours</div>
                <div className="font-display font-semibold text-[1.05rem] text-[color:var(--color-abyss)]">
                  Mon–Fri 8 a.m. – 6 p.m.<br />
                  <span className="text-[color:var(--color-abyss)]/75 text-[0.95rem]">Saturdays closed</span>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-2">Service Area</div>
                <div className="text-[0.98rem] leading-relaxed text-[color:var(--color-abyss)]/90">
                  Turlock, Hughson, Denair, Keyes, Hilmar, Ceres and Stanislaus County.
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-abyss)]/80 mb-2">License</div>
                <div className="text-[0.98rem] leading-relaxed text-[color:var(--color-abyss)]/90">
                  California HVAC Contractor · Clean Energy Connection listed · Kevin Jordan HVAC Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[color:var(--color-abyss)] border-t border-[color:var(--color-slate)]">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 flex items-start gap-4">
            <MarkKJ className="w-16 h-10 text-[color:var(--color-teal)] mt-1" />
            <div>
              <div className="font-display font-black text-[1.4rem] text-[color:var(--color-bone)]">Kevin Jordan Heating & Air</div>
              <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-bone-3)] mt-2">
                Turlock · Stanislaus County · Est. 2017
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-teal)] mb-4">Contact</div>
            <div className="font-display font-bold text-[1.1rem] text-[color:var(--color-bone)]">{PHONE_DISPLAY}</div>
            <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-bone-3)] mt-2">Mon–Fri 8–6 · Sat closed</div>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-teal)] mb-4">Shop</div>
            <div className="font-display font-semibold text-[0.98rem] text-[color:var(--color-bone)] leading-tight">
              1108 S 1st St<br />
              <span className="text-[color:var(--color-bone-3)] text-sm">Turlock, CA 95380</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-teal)] mb-4">Record</div>
            <div className="font-display font-black text-[1.6rem] text-[color:var(--color-bone)]">
              4.3<span className="text-[color:var(--color-teal)]">★</span> <span className="text-[0.95rem] text-[color:var(--color-bone-3)]">/ 24</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[color:var(--color-slate)]">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-bone-3)]">
            <div>Kevin Jordan HVAC Inc.</div>
            <div>CA HVAC Contractor · Clean Energy Connection</div>
          </div>
        </div>
      </footer>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Kevin Jordan Heating & Air Services",
            description:
              "Turlock, California HVAC contractor. Mini-split and tankless specialists. Residential and light commercial repairs and installs.",
            telephone: PHONE_DISPLAY,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1108 S 1st St",
              addressLocality: "Turlock",
              addressRegion: "CA",
              postalCode: "95380",
              addressCountry: "US",
            },
            openingHours: ["Mo-Fr 08:00-18:00"],
            areaServed: ["Turlock", "Stanislaus County"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.3",
              reviewCount: "24",
            },
          }),
        }}
      />
    </main>
  );
}
