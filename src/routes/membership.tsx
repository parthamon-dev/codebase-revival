import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarClock, Check, Download, RefreshCw, ShieldCheck, Sparkles, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Section } from "@/components/site/Section";
import { JoinMembershipButton } from "@/components/site/JoinMembershipButton";
import { materials } from "@/data/sample";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Learning Materials Membership — RM20/month | PUPUK Education" },
      { name: "description", content: "Unlimited access to membership-eligible worksheets, notes and revision packs for RM20 a month. Renews monthly, cancel anytime." },
      { property: "og:title", content: "PUPUK Membership — RM20/month" },
      { property: "og:description", content: "One simple monthly plan for eligible learning materials made by real educators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MembershipPage,
});

const benefits = [
  { icon: Download, tone: "bg-mint", t: "Unlimited downloads", d: "Download every worksheet, note and revision pack marked “Membership eligible”." },
  { icon: Sparkles, tone: "bg-sky", t: "New resources regularly", d: "Fresh eligible materials are added by our educators throughout the year." },
  { icon: BookOpen, tone: "bg-peach", t: "Made by real educators", d: "Content organised by subject, level and topic so revision stays focused." },
  { icon: ShieldCheck, tone: "bg-butter", t: "Secure payment", d: "Pay safely through Razorpay with card or other supported methods." },
];

const steps = [
  { icon: Check, t: "Join", d: "Sign in and pay RM20 securely through Razorpay." },
  { icon: CalendarClock, t: "Access activated", d: "Our team activates your access, usually within one working day." },
  { icon: RefreshCw, t: "Renews monthly", d: "RM20 is charged automatically each month so access continues." },
  { icon: XCircle, t: "Cancel anytime", d: "Stop renewal whenever you like — access lasts until the end of your paid month." },
];

function MembershipPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="bg-hero">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Learning Materials Membership</p>
              <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] md:text-6xl">Every eligible resource. <span className="text-primary">One small monthly fee.</span></h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">Stop paying item by item. Membership unlocks all learning materials marked “Membership eligible” for RM20 a month.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-peach" />
              <div className="relative rounded-[2.5rem] bg-card p-8 text-center shadow-lift">
                <p className="font-bold text-muted-foreground">Monthly plan</p>
                <p className="mt-2 font-display text-7xl font-extrabold">RM20<span className="text-xl text-muted-foreground">/month</span></p>
                <ul className="mt-6 space-y-2 text-left">
                  {["Renews automatically every month", "Cancel anytime", "Eligible resources only"].map((f) => (
                    <li key={f} className="flex items-center gap-2 font-semibold"><Check className="size-5 text-primary" /> {f}</li>
                  ))}
                </ul>
                <JoinMembershipButton />
              </div>
            </div>
          </div>
        </section>

        <Section eyebrow="Benefits" title="What you get as a member">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.t} className={`rounded-[2rem] p-7 ${b.tone}`}>
                <span className="grid size-12 place-items-center rounded-2xl bg-card text-primary shadow-soft"><b.icon className="size-6" /></span>
                <h3 className="mt-5 text-xl font-extrabold">{b.t}</h3>
                <p className="mt-2 text-foreground/75">{b.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Cost & renewal" title="How billing works">
          <ol className="grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="card-soft p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"><s.icon className="size-5" /></span>
                <p className="mt-4 font-bold">{i + 1}. {s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Preview" title="A taste of the library" intro="Examples of the kinds of materials in our library. Eligibility is shown on each item.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <article key={m.title} className="card-soft overflow-hidden">
                <div className={`grid aspect-[4/3] place-items-center text-6xl ${m.tone}`} aria-hidden>{m.emoji}</div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-primary">{m.subject} · {m.grade}</p>
                  <h3 className="mt-1 text-lg font-extrabold leading-snug">{m.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-3xl px-4 pb-20 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold">Ready to start learning?</h2>
          <p className="mt-2 text-muted-foreground">RM20/month · renews monthly · cancel anytime</p>
          <div className="mx-auto max-w-sm"><JoinMembershipButton /></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
