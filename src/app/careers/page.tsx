import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Work With Me</h1>
          <p className="text-xl text-gray-600 mb-8">
            I don&apos;t build traditional teams. I build networks of elite
            specialists who love autonomy and hate bureaucracy.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Work</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700">100% Remote & Asynchronous</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700">
                  Project-based or Retainer (No full-time employees)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700">Output over hours</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700">
                  Zero meetings unless absolutely necessary
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-200 mb-4">TOP 1%</div>
              <p className="text-gray-600 text-lg">
                I only hire the best. If you&apos;re a specialist who is tired of
                corporate drag and wants to do your best work, let&apos;s talk.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Open Roles
          </h2>

          <div className="space-y-6">
            {/* Role 1 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all hover:shadow-md cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Senior AI Automation Engineer
                    </h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                      CONTRACT
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Build custom n8n/Python workflows for our advisory clients.
                    Must have experience with LangChain and OpenAI API.
                  </p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>

            {/* Role 2 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all hover:shadow-md cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Technical Content Strategist
                    </h3>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                      FREELANCE
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Ghostwrite deep-dive essays on growth and engineering. Not
                    for generic SEO fluff writers.
                  </p>
                </div>
                <ArrowRight className="text-gray-300 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>

            {/* Role 3 */}
            <div className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all hover:shadow-md cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      Executive Assistant (Growth)
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-bold">
                      FILLED
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Manage scheduling, travel, and inbox triage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Don&apos;t see your role?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always looking for talented growth engineers, designers, and
              operators.
            </p>
            <Link href="/apply" className="text-orange-600 font-bold hover:text-orange-700">
              Send a General Application &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
