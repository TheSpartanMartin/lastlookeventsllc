import React, { FC, FormEvent, useState } from "react";
import logo from "./assets/business-card-front.png";

type ServiceTierId = "fresh-start" | "keepsake" | "afterglow";

interface Service {
  id: ServiceTierId;
  name: string;
  emoji: string;
  priceLabel: string;
  bullets: readonly string[];
  highlight?: boolean;
}

interface Step {
  id: number;
  title: string;
  body: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

const SERVICES = [
  {
    id: "fresh-start",
    name: "The Fresh Start",
    emoji: "🧼",
    priceLabel: "Starting at $350",
    bullets: [
      "End-of-night venue cleanup only",
      "Trash removal & basic reset of space",
      "Tabletop items consolidated for pickup",
      "Ideal for smaller events or DIY weddings",
    ],
  },
  {
    id: "keepsake",
    name: "The Keepsake Package",
    emoji: "🎁",
    priceLabel: "Starting at $600",
    bullets: [
      "Full venue cleanup & breakdown",
      "Décor, signage, and keepsakes packed & labeled",
      "Next-day delivery to your home or location",
      "Perfect for couples leaving early or traveling",
    ],
    highlight: true,
  },
  {
    id: "afterglow",
    name: "The Afterglow Experience",
    emoji: "✨",
    priceLabel: "Starting at $950",
    bullets: [
      "Everything in The Keepsake Package",
      "Up to 30 days of secure décor storage",
      "Flexible scheduled delivery when you’re ready",
      "Great for honeymoons right after the wedding",
    ],
  },
] as const satisfies readonly Service[];

const STEPS: readonly Step[] = [
  {
    id: 1,
    title: "Share your details",
    body: "Tell us your venue, date, estimated guest count, and general décor plan. We’ll review venue guidelines and send a custom quote with clear expectations.",
  },
  {
    id: 2,
    title: "Event-day coordination",
    body: "We arrive at the agreed-upon time and quietly prepare for breakdown. You focus on your send-off—we’ll handle the checklist.",
  },
  {
    id: 3,
    title: "Aftercare & delivery",
    body: "Décor and keepsakes are packed, labeled, and either left with your person, delivered the next day, or stored with us.",
  },
] as const;

const AREAS: readonly string[] = [
  "Peachtree City",
  "Fayetteville",
  "Newnan",
  "Tyrone",
  "Senoia",
  "Sharpsburg",
  "Golf club & course venues",
  "Barn & farm venues",
] as const;

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "start-cleanup",
    question: "When do you typically start cleanup?",
    answer:
      "Most couples hire us to arrive near the end of the reception, once formal events are finished. We’ll coordinate a specific time based on your timeline and venue rules.",
  },
  {
    id: "venue-planner",
    question: "Do you work directly with our venue or planner?",
    answer:
      "Yes. We’re happy to communicate with your venue coordinator or planner so everyone is on the same page about access, end times, and what needs to be done.",
  },
  {
    id: "storage",
    question: "Can you store our décor while we’re on our honeymoon?",
    answer:
      "Absolutely. Our Afterglow Experience includes up to 30 days of short-term storage with scheduled delivery when you’re back and ready to unpack.",
  },
  {
    id: "pricing",
    question: "Are your prices fixed?",
    answer:
      "Package pricing is a starting point. Final quotes consider guest count, complexity of décor, travel, and venue policies—you’ll always receive a clear breakdown before booking.",
  },
  {
    id: "booking-time",
    question: "How far in advance should we book?",
    answer:
      "As soon as you have a date and venue, reach out. Popular wedding weekends and holidays book quickly, especially in peak seasons.",
  },
] as const;

const CONTACT_INFO: readonly ContactInfo[] = [
  {
    label: "Primary email",
    value: "lastlookllc25@gmail.com",
    href: "mailto:lastlookllc25@gmail.com",
  },
  {
    label: "Alternate email",
    value: "lastlookllc25@gmail.com",
    href: "mailto:lastlookllc25@gmail.com",
  },
  {
    label: "Phone",
    value: "(706) 973-0371",
    href: "tel:17069730371",
  },
  {
    label: "Typical response time",
    value: "Within 1–2 business days",
  },
] as const;

const App: FC = () => {
  const [isDark, setIsDark] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert("Demo only — wire this form up to your backend or form service.");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        id="top"
        className="min-h-screen bg-[#f4e4cf] text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      >
        {/* HEADER / NAV */}
        <header className="sticky top-0 z-20 border-b border-[#e0cba9] bg-[#f2e1c8]/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
            {/* Logo + wordmark */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-9 overflow-hidden rounded-lg border border-[#d8c19f] bg-[#f6eada] shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <img
                  src={logo}
                  alt="Last Look Events logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="font-logo text-2xl text-[#c9a46a] drop-shadow-sm dark:text-[#e8c982]">
                  Last Look Events
                </div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  Post-Wedding Cleanup &amp; Décor Care
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-800 dark:text-slate-200 md:text-sm">
              <a
                href="#about"
                className="hover:text-[#c39a5e] dark:hover:text-[#f4cf86]"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-[#c39a5e] dark:hover:text-[#f4cf86]"
              >
                Packages
              </a>
              <a
                href="#process"
                className="hover:text-[#c39a5e] dark:hover:text-[#f4cf86]"
              >
                How It Works
              </a>
              <a
                href="#faq"
                className="hover:text-[#c39a5e] dark:hover:text-[#f4cf86]"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="hover:text-[#c39a5e] dark:hover:text-[#f4cf86]"
              >
                Contact
              </a>
            </nav>

            {/* CTA + dark-mode toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c19f] bg-[#f6eada] text-xs font-semibold text-[#9a7c4e] shadow-sm hover:bg-[#ead6b6] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                aria-label="Toggle dark mode"
              >
                {isDark ? "☾" : "☀︎"}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c9a46a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md hover:bg-[#b58c4f] dark:bg-[#f1cd85] dark:text-slate-950 dark:hover:bg-[#e2b96b]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="bg-gradient-to-br from-[#f6e8d4] to-[#ead7b8] px-4 py-12 dark:from-slate-950 dark:to-slate-900 md:py-16">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_minmax(0,1fr)] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-[#f3e0c3] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[#8f6a39] dark:bg-slate-800 dark:text-slate-100">
                  Peachtree City &amp; surrounding venues
                </div>
                <h1 className="font-display text-3xl font-semibold leading-tight text-[#7a5a33] dark:text-[#f5e0ba] sm:text-4xl">
                  We handle the aftermath so you can stay in the glow.
                </h1>
                <p className="mt-4 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  Last Look Events specializes in post-wedding cleanup, décor
                  collection, and short-term storage. Your venue is left
                  spotless, and your keepsakes are handled with care—so you can
                  leave when the party ends, not when the work is done.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[#c9a46a] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:bg-[#b58c4f] dark:bg-[#f1cd85] dark:text-slate-950 dark:hover:bg-[#e2b96b]"
                  >
                    Get a Custom Quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-[#c9a46a] px-5 py-2.5 text-sm font-semibold text-[#8f6a39] hover:bg-[#c9a46a] hover:text-slate-900 dark:border-[#f1cd85] dark:text-[#fbe7b5] dark:hover:bg-[#f1cd85] dark:hover:text-slate-950"
                  >
                    View Packages
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-5 text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-[0.8rem]">
                  <span>✨ Evenings &amp; late-night cleanups</span>
                  <span>🏡 Ideal for golf club &amp; barn venues</span>
                  <span>💌 Décor stored &amp; returned on your schedule</span>
                </div>
              </div>

              <aside className="rounded-xl border border-[#e0cba9] bg-[#fdf2e2] p-5 text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                <h3 className="font-display text-lg font-semibold text-[#7a5a33] dark:text-[#f5e0ba]">
                  Stress-free goodbyes
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Instead of staying late to break down tables, box up décor,
                  and haul it all home, hand us the keys and enjoy your
                  send-off. We’ll take care of the rest.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] text-[#c39a5e] dark:text-[#f1cd85]">
                      ✓
                    </span>
                    <span>End-of-night venue reset &amp; trash removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] text-[#c39a5e] dark:text-[#f1cd85]">
                      ✓
                    </span>
                    <span>
                      Décor, signage, and sentimental items packed &amp; labeled
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[3px] text-[#c39a5e] dark:text-[#f1cd85]">
                      ✓
                    </span>
                    <span>Short-term storage and scheduled delivery</span>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="px-4 py-12 md:py-16">
            <div className="mx-auto max-w-5xl">
              <header className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  About Last Look Events
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                  A boutique service for the end of your best day.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  Based in Peachtree City, Georgia, Last Look Events was created
                  for couples who want to fully enjoy their celebration—without
                  worrying about who’s taking down the centerpieces or
                  collecting the card box.
                </p>
              </header>

              <div className="grid gap-8 md:grid-cols-[1.2fr_minmax(0,1fr)] md:items-start">
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                    We partner with local venues, planners, and couples to
                    ensure a smooth, respectful, and discreet breakdown at the
                    end of your event. From golf course clubhouses to barn
                    venues and private properties, we understand how to work
                    within venue guidelines while treating your décor like the
                    keepsakes they are.
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm text-slate-800 dark:text-slate-100 sm:grid-cols-2">
                    {[
                      "Weddings & rehearsal dinners",
                      "Engagement parties & showers",
                      "Anniversary & milestone events",
                      "Corporate celebrations",
                      "Small private events & backyard weddings",
                      "Golf club & country club venues",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#e0cba9] bg-[#fdf2e2] px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[#e0cba9] bg-[#fdf2e2] p-5 text-sm text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  <strong className="block text-[#7a5a33] dark:text-[#f5e0ba]">
                    Our mission:
                  </strong>
                  <span>
                    To provide stress-free, detail-oriented event cleanup and
                    décor care so clients can fully enjoy their celebration—
                    without worrying about the mess.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section
            id="services"
            className="bg-[#f8ecdc] px-4 py-12 dark:bg-slate-900 md:py-16"
          >
            <div className="mx-auto max-w-5xl">
              <header className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  Packages
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                  Choose the level of “last look” you need.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  Every event is unique. These starting packages help you get a
                  sense of pricing—final quotes are based on guest count, venue
                  rules, and travel distance.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-3">
                {SERVICES.map((service) => (
                  <article
                    key={service.id}
                    className={[
                      "relative flex flex-col rounded-xl border bg-[#fdf4e4] p-5 text-sm text-slate-800 shadow-md dark:bg-slate-900 dark:text-slate-100",
                      service.highlight
                        ? "border-[#d8c19f] dark:border-amber-300/60"
                        : "border-[#e0cba9] dark:border-slate-700",
                    ].join(" ")}
                  >
                    {service.highlight && (
                      <span className="absolute right-4 top-3 rounded-full bg-[#f3e0c3] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#8f6a39] dark:bg-slate-800 dark:text-amber-200">
                        Most Popular
                      </span>
                    )}
                    <div className="text-2xl">{service.emoji}</div>
                    <div className="mt-2 font-semibold text-[#7a5a33] dark:text-[#f5e0ba]">
                      {service.name}
                    </div>
                    <div className="text-sm font-semibold text-[#b28342] dark:text-amber-200">
                      {service.priceLabel}
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <p className="mt-6 text-xs text-slate-700 dark:text-slate-300 sm:text-sm">
                <strong>Add-ons:</strong> Brunch or day-after cleanup, décor
                setup, additional storage time, multiple drop-off locations,
                holiday-weekend events, and more. Mention your needs in your
                quote request and we’ll build a custom package.
              </p>
            </div>
          </section>

          {/* PROCESS */}
          <section className="px-4 py-12 md:py-16" id="process">
            <div className="mx-auto max-w-5xl">
              <header className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  How it works
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                  Simple, thoughtful, and venue-friendly.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  We coordinate with your venue and/or planner so your breakdown
                  plan is just as intentional as your timeline.
                </p>
              </header>

              <div className="grid gap-5 md:grid-cols-3">
                {STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="relative rounded-xl border border-[#e0cba9] bg-[#fdf2e2] p-5 text-sm text-slate-700 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <div className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#c9a46a] text-xs font-bold text-slate-900 dark:bg-amber-300 dark:text-slate-950">
                      {step.id}
                    </div>
                    <div className="ml-10 font-semibold text-[#7a5a33] dark:text-[#f5e0ba]">
                      {step.title}
                    </div>
                    <p className="ml-10 mt-2">{step.body}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-lg border border-[#e0cba9] bg-[#f7ebda] px-4 py-3 text-xs text-slate-700 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-slate-200 sm:text-sm">
                Need help earlier in the day? Ask about adding light décor setup
                or room flips between ceremony and reception.
              </p>
            </div>
          </section>

          {/* AREA + TESTIMONIAL */}
          <section className="px-4 py-12 md:py-16">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_minmax(0,1fr)]">
              <div>
                <header className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                    Service area
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                    Based in Peachtree City, serving the Southside &amp; beyond.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                    We primarily serve venues within ~30 miles of Peachtree
                    City, Georgia. Travel outside this radius may incur an
                    additional fee—just mention your venue in your inquiry.
                  </p>
                </header>
                <div className="flex flex-wrap gap-2 text-xs text-slate-800 dark:text-slate-100 sm:text-sm">
                  {AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[#e0cba9] bg-[#fdf4e4] px-3 py-1 dark:border-slate-700 dark:bg-slate-900"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <aside>
                <header className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                    Client notes
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba]">
                    Thoughtful endings matter.
                  </h2>
                </header>
                <div className="rounded-xl border border-[#e0cba9] bg-[#fdf4e4] p-5 text-sm text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  <p className="italic">
                    “We left our reception when the sparkler tunnel ended—and
                    that was it. The next morning, everything was boxed,
                    labeled, and waiting for us. It was the easiest part of the
                    whole wedding.”
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#9a7c4e] dark:text-slate-400">
                    — Future Last Look Events couple (your review here!)
                  </p>
                </div>
              </aside>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="bg-[#f5ead9] px-4 py-12 dark:bg-slate-900 md:py-16"
          >
            <div className="mx-auto max-w-5xl">
              <header className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  FAQ
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                  Questions we’re often asked.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  Don’t see your question here? Include it in your quote request
                  and we’ll get you a clear, honest answer.
                </p>
              </header>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.id}
                    className="group rounded-lg border border-[#e0cba9] bg-[#fdf4e4] p-4 text-sm text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-[#7a5a33] dark:text-[#f5e0ba]">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="bg-[#f2e1c8] px-4 py-12 dark:bg-slate-950 md:py-16"
          >
            <div className="mx-auto max-w-5xl">
              <header className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7c4e] dark:text-slate-400">
                  Contact
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-[#7a5a33] dark:text-[#f5e0ba] sm:text-3xl">
                  Ready to plan your “last look”?
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                  Share a few details about your event and we’ll follow up with
                  a custom quote and availability.
                </p>
              </header>

              <div className="grid gap-8 md:grid-cols-[1.1fr_minmax(0,1fr)]">
                {/* Contact info card */}
                <div className="rounded-xl border border-[#e0cba9] bg-[#fdf4e4] p-5 text-sm text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {CONTACT_INFO.map((info) => (
                    <div key={info.label} className="mb-3 last:mb-4">
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#9a7c4e] dark:text-slate-400">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-[#b28342] underline-offset-2 hover:underline dark:text-amber-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div>{info.value}</div>
                      )}
                    </div>
                  ))}

                  <p className="mb-4 text-sm text-slate-700 dark:text-slate-300">
                    Prefer email? Click below to open a pre-filled message with
                    space for your event details.
                  </p>

                  <a
                    className="inline-flex items-center justify-center rounded-full bg-[#c9a46a] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md hover:bg-[#b58c4f] dark:bg-[#f1cd85] dark:text-slate-950 dark:hover:bg-[#e2b96b]"
                    href="mailto:lastlookllc25@gmail.com?subject=Last%20Look%20Events%20Quote%20Request&body=Hi%20Last%20Look%20Events%2C%0D%0A%0D%0AWe%E2%80%99d%20love%20a%20quote%20for%20post-event%20cleanup%20services.%20Here%20are%20our%20details%3A%0D%0A%0D%0A-%20Names%3A%0D%0A-%20Event%20type%20(wedding%2C%20reception%2C%20etc.)%3A%0D%0A-%20Date%3A%0D%0A-%20Venue%20name%20and%20city%3A%0D%0A-%20Estimated%20guest%20count%3A%0D%0A-%20Requested%20package%20(Fresh%20Start%2C%20Keepsake%2C%20Afterglow%2C%20or%20custom)%3A%0D%0A-%20Any%20special%20notes%20or%20add-ons%3A%0D%0A%0D%0AThank%20you!"
                  >
                    Email us to request a quote
                  </a>
                </div>

                {/* Front-end-only form */}
                <form
                  className="rounded-xl border border-[#e0cba9] bg-[#fdf4e4] p-5 text-sm text-slate-800 shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  onSubmit={handleSubmit}
                >
                  <FormField id="name" label="Name(s)">
                    <input
                      id="name"
                      type="text"
                      placeholder="First & last name(s)"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="email" label="Email">
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="phone" label="Phone">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 555-5555"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="event" label="Event type & date">
                    <input
                      id="event"
                      type="text"
                      placeholder="Wedding – October 4, 2025"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="venue" label="Venue & city">
                    <input
                      id="venue"
                      type="text"
                      placeholder="Venue name, city"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="guests" label="Estimated guest count">
                    <input
                      id="guests"
                      type="text"
                      placeholder="e.g., 120"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="package" label="Package interest">
                    <input
                      id="package"
                      type="text"
                      placeholder="Fresh Start, Keepsake, Afterglow, or custom"
                      className="w-full rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <FormField id="details" label="Event details">
                    <textarea
                      id="details"
                      placeholder="Share décor, timeline, or special requests."
                      className="w-full min-h-[120px] rounded-md border border-[#e0cba9] px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-[#c9a46a] focus:outline-none focus:ring-1 focus:ring-[#c9a46a] dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-amber-300 dark:focus:ring-amber-300"
                    />
                  </FormField>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#c9a46a] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-md hover:bg-[#b58c4f] dark:bg-[#f1cd85] dark:text-slate-950 dark:hover:bg-[#e2b96b]"
                  >
                    Submit (demo)
                  </button>
                  <p className="mt-2 text-[0.7rem] text-slate-700 dark:text-slate-400">
                    This sample form doesn’t send automatically—connect it to
                    your form service or backend when you’re ready to launch.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 px-4 py-5 text-xs text-slate-200">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
            <div>© 2025 Last Look Events. All rights reserved.</div>
            <div className="space-x-4">
              <a href="#top" className="hover:underline">
                Back to top
              </a>
              <a href="#contact" className="hover:underline">
                Book now
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Website by{" "}
            <a
              href="https://spartanmartinwds.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-200 underline-offset-2 hover:underline"
            >
              Spartan Martin Web Design Studio
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

interface FormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

const FormField: FC<FormFieldProps> = ({ id, label, children }) => (
  <div className="mb-3">
    <label
      htmlFor={id}
      className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#9a7c4e] dark:text-slate-400"
    >
      {label}
    </label>
    {children}
  </div>
);

export default App;
