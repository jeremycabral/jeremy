import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mic, PlayCircle, ExternalLink, ArrowRight } from "lucide-react";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">In The Media</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Interviews, podcasts, and articles featuring my thoughts on
            bootstrapping, scaling, and the future of AI.
          </p>
        </div>
      </section>

      {/* Featured Podcast */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1660675587271-47f1083bc367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMGludGVydmlldyUyMHN0dWRpb3xlbnwxfHx8fDE3Njk0MDE0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="My First Million Podcast"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle size={64} className="text-white fill-orange-600 stroke-orange-600" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-flex items-center space-x-2 text-orange-500 font-bold uppercase tracking-wider text-sm mb-4">
                <Mic size={16} /> <span>Featured Podcast</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My First Million: How to Scale to $100M Without VC Funding
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                I sat down with Sam and Shaan to discuss the gritty details of
                bootstrapping. We covered the early days of Finder, the SEO
                strategies that built our moat, and why I believe AI is the
                biggest opportunity since the internet.
              </p>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors inline-flex items-center">
                Listen on Spotify <ExternalLink className="ml-2" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Appearances */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Recent Appearances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The Bootstrapped Founder", type: "Podcast", outlet: "Arvid Kahl", date: "Jan 2026" },
              { title: "Scaling from Zero to One", type: "Interview", outlet: "Indie Hackers", date: "Dec 2025" },
              { title: "The End of SEO as We Know It", type: "Article", outlet: "TechCrunch", date: "Nov 2025" },
              { title: "Building AI Agents for Real Business", type: "Podcast", outlet: "AI Native", date: "Oct 2025" },
              { title: "Why I Left a $650M Company", type: "Essay", outlet: "Medium", date: "Sep 2025" },
              { title: "Growth Tactics for 2026", type: "Keynote", outlet: "SaaStr", date: "Aug 2025" },
            ].map((item, i) => (
              <a
                href="#"
                key={i}
                className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase">
                    {item.type}
                  </div>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-medium">{item.outlet}</span>
                  <ExternalLink
                    size={14}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Want to interview me?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I&apos;m always open to discussing growth, bootstrapping, and AI with
          interesting hosts and journalists.
        </p>
        <Link
          href="/apply"
          className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
        >
          Request Interview <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
