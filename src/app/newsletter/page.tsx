import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail size={32} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The Growth Engineering <span className="text-orange-600">Weekly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Every Tuesday, I send one deep dive on how to scale a company using
            systems, psychology, and AI. No fluff, just playbooks.
          </p>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 max-w-lg mx-auto shadow-lg">
            <form className="flex flex-col gap-4">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-600 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-200"
              >
                Join 15,000+ Founders
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              I respect your inbox. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Read by founders from
          </p>
          <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale">
            <span className="text-xl font-bold text-gray-800">Atlassian</span>
            <span className="text-xl font-bold text-gray-800">Canva</span>
            <span className="text-xl font-bold text-gray-800">Shopify</span>
            <span className="text-xl font-bold text-gray-800">Stripe</span>
            <span className="text-xl font-bold text-gray-800">Airbnb</span>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Popular Issues
          </h2>

          <div className="space-y-4">
            <a
              href="#"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 transition-all hover:shadow-md group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    The $100M SEO Strategy (That Google Can&apos;t Kill)
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Read by 12,400+ people
                  </p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-orange-600" />
              </div>
            </a>

            <a
              href="#"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 transition-all hover:shadow-md group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    How to Fire Yourself (A Guide to Delegation)
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Read by 10,200+ people
                  </p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-orange-600" />
              </div>
            </a>

            <a
              href="#"
              className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-400 transition-all hover:shadow-md group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    The Psychology of High-Ticket Sales
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Read by 9,800+ people
                  </p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-orange-600" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
