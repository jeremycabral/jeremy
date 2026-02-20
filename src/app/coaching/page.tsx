import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Rocket, TrendingUp, CheckCircle, ArrowRight, Target } from "lucide-react";

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Three Paths. One Goal: <span className="text-orange-600">Growth.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re just finding your footing or scaling a mountain, I
            have a battle-tested framework designed for your specific stage.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Startup Coaching */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-orange-200 transition-all shadow-lg hover:shadow-xl flex flex-col">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Rocket className="text-orange-600" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Startup Coaching</h2>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold w-fit mb-6">
              Up to $1M Revenue
            </div>

            <p className="text-gray-600 text-base mb-8 flex-grow">
              For early-stage founders who need to find product-market fit, build their
              first growth engines, and automate operations.
            </p>

            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">6-Week Intensive Group Cohort</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">SEO & Social Virality Foundation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Repeatable growth system</span>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-auto">
              <Link
                href="/startup-coaching"
                className="w-full py-3 text-center border-2 border-orange-600 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              >
                View Program
              </Link>
              <Link
                href="/apply/startup"
                className="w-full py-3 text-center bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
              >
                Apply for Coaching
              </Link>
            </div>
          </div>

          {/* Scale-Up Advisory */}
          <div className="bg-[#0a0a0a] text-white border border-gray-800 rounded-3xl p-8 hover:border-orange-500/30 transition-all shadow-2xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">Scale-Up Advisory</h2>
              <div className="inline-block px-3 py-1 bg-orange-900/50 border border-orange-500/30 text-orange-400 rounded-full text-xs font-semibold w-fit mb-6">
                $1M+ Revenue
              </div>

              <p className="text-gray-400 text-base mb-8 flex-grow">
                For scaling founders who need to break revenue plateaus, build
                enterprise-grade systems, and exit daily operations.
              </p>

              <ul className="space-y-4 mb-10 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300">Fortnightly Strategic Sprints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300">Advanced Funnel & Ad Strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300">Custom AI Org Design</span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 mt-auto">
                <Link
                  href="/scale-up-advisory"
                  className="w-full py-3 text-center border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  View Advisory
                </Link>
                <Link
                  href="/apply/scaleup"
                  className="w-full py-3 text-center bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20"
                >
                  Apply for Advisory
                </Link>
              </div>
            </div>
          </div>

          {/* Strategy Deep Dive */}
          <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-orange-200 transition-all shadow-lg hover:shadow-xl flex flex-col">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-orange-600" size={28} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Strategy Deep Dive</h2>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold w-fit mb-6">
              Specific Problem Solving
            </div>

            <p className="text-gray-600 text-base mb-8 flex-grow">
              Intensive problem-solving sessions for founders needing breakthrough clarity on growth strategy.
            </p>

            <ul className="space-y-4 mb-10 text-sm">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">1-on-1 Strategy Session</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Growth Roadmapping</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-700">Unblock Specific Constraints</span>
              </li>
            </ul>

            <div className="flex flex-col gap-3 mt-auto">
              <Link
                href="/coaching"
                className="w-full py-3 text-center border-2 border-orange-600 text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="https://api.leadconnectorhq.com/widget/booking/pQ17EnAoNlzccW9ACRB5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
              >
                Book Deep Dive
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure which path is right?</h2>
        <p className="text-gray-600 mb-8">Book a discovery call and we can discuss where you fit.</p>
        <Link
          href="https://api.leadconnectorhq.com/widget/booking/pQ17EnAoNlzccW9ACRB5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-semibold hover:text-orange-700 flex items-center justify-center"
        >
          Book a Discovery Call <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
