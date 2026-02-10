import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowRight, Quote } from "lucide-react";

export default function CaseStudiesPage() {
  const cases = [
    {
      company: "TechFlow",
      founder: "Sarah Jenkins",
      result: "$10k to $100k MRR",
      timeframe: "6 Months",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      quote:
        "The playbooks completely transformed our GTM strategy. We were stuck at $10k MRR for a year. Jeremy's framework for SEO and automated outreach unlocked a flood of leads.",
      tags: ["SaaS", "B2B", "SEO"],
    },
    {
      company: "DataScale",
      founder: "Michael Chen",
      result: "Saved 40 hrs/week",
      timeframe: "3 Months",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      quote:
        "I was skeptical about 'advisors', but this isn't advice. It's an execution framework. The AI implementation alone saved us 40 hours a week on manual data entry and lead qualification.",
      tags: ["AI", "Operations", "Automation"],
    },
    {
      company: "Spark AI",
      founder: "Elena Rodriguez",
      result: "Broke $2M Plateau",
      timeframe: "4 Sprints",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      quote:
        "The 'Scale-Up' advisory sprints are intense but exactly what we needed. We were hitting a ceiling at $2M ARR. The new pricing strategy and sales motion blew right through it.",
      tags: ["Scale-Up", "Pricing", "Sales"],
    },
    {
      company: "Loop",
      founder: "David Kim",
      result: "300% Traffic Growth",
      timeframe: "9 Months",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      quote:
        "Battle-tested is the right word. No fluff, just tactics that work. We implemented the 'Hub & Spoke' content strategy and our organic traffic tripled in under a year.",
      tags: ["SEO", "Content", "Growth"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Real Results. Real Founders.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we&apos;ve helped startups and scale-ups break through revenue
            plateaus and build autonomous growth engines.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
                  <img
                    src={c.image}
                    alt={c.founder}
                    className="relative z-10 w-full rounded-2xl shadow-xl border border-gray-100 aspect-video object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 z-20">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-gray-900">
                          {c.founder}
                        </div>
                        <div className="text-sm text-gray-500">{c.company}</div>
                      </div>
                      <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg text-sm">
                        {c.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="flex gap-2 mb-6">
                  {c.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Quote className="text-orange-600 mb-6 opacity-50" size={48} />

                <p className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                  &quot;{c.quote}&quot;
                </p>

                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Timeframe
                    </div>
                    <div className="font-bold text-gray-900">{c.timeframe}</div>
                  </div>
                  <div className="w-px h-10 bg-gray-200"></div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                      Outcome
                    </div>
                    <div className="font-bold text-green-600">{c.result}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/apply"
                    className="text-orange-600 font-bold hover:text-orange-700 inline-flex items-center"
                  >
                    Get Similar Results <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Ready to write your success story?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          We only work with a limited number of founders each quarter. Apply now
          to see if we&apos;re a fit.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
        >
          Work with Me <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
