import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { Mic, Users, Video, ArrowRight, Download } from 'lucide-react';

export function Speaking() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Book me for a Speaking Event - Jeremy Cabral"
        description="Keynotes on scaling to $100M+, AI-driven GTM systems, and bootstrapped growth."
        path="/speaking"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMGNvbmZlcmVuY2UlMjBzdGFnZSUyMG1pY3xlbnwxfHx8fDE3Njk0MDE0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Speaking Stage"
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Keynotes That <span className="text-orange-600">Ignite Action.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            I don't just speak about growth. I share the raw, unpolished truth about scaling a company to $100M+ and the mindset required to survive the journey.
          </p>
          <a 
            href="mailto:advisory@jeremycabral.com?subject=Speaking Engagement Enquiry: Jeremy Cabral"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
          >
            Request to Speak <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Signature Topics</h2>
            <p className="text-gray-600">Tailored keynotes for founders, product teams, and corporate innovators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Founder's Trap</h3>
              <p className="text-gray-600 mb-4">
                Why 90% of founders become their own bottleneck, and the specific systems required to fire yourself from operations.
              </p>
              <div className="text-sm font-semibold text-orange-600">Best for: Founder Summits, Incubators</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Mic size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Native Growth</h3>
              <p className="text-gray-600 mb-4">
                How to rebuild your entire GTM motion with AI agents. Forget "chatbots"—we're talking about autonomous revenue systems.
              </p>
              <div className="text-sm font-semibold text-orange-600">Best for: Tech Conferences, Growth Teams</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bootstrap to $100M</h3>
              <p className="text-gray-600 mb-4">
                The untold story of scaling without VC funding. The cash flow crunches, the hiring mistakes, and the eventual exit.
              </p>
              <div className="text-sm font-semibold text-orange-600">Best for: Startup Events, Corporate Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Past Events */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Previously Spoken At
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold text-gray-800">SaaStr</span>
            <span className="text-2xl font-bold text-gray-800">TechCrunch Disrupt</span>
            <span className="text-2xl font-bold text-gray-800">Web Summit</span>
            <span className="text-2xl font-bold text-gray-800">StartCon</span>
            <span className="text-2xl font-bold text-gray-800">Growth Marketing Summit</span>
            <span className="text-2xl font-bold text-gray-800">Search Marketing Summit</span>
          </div>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Podcasts I've Appeared On</h2>
            <p className="text-gray-600">Deep dives into growth, leadership, and the founder journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-gray-900 mb-1">Mentored</div>
              <div className="text-orange-600 font-medium">with Mark Bouris</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-gray-900 mb-1">The Lazy CEO Podcast</div>
              <div className="text-orange-600 font-medium">with Jane Lu</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-gray-900 mb-1">CUB Podcast</div>
              <div className="text-orange-600 font-medium">with Daniel Hakim</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-gray-900 mb-1">Growth and Banter</div>
              <div className="text-orange-600 font-medium">with Blake Micola</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-gray-900 mb-1">Never Not Building</div>
              <div className="text-orange-600 font-medium">with Andrew Raso</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-700 font-medium mb-4">And more coming in 2026.</p>
            <p className="text-gray-600 mb-6">Contact me if you want me on your podcast:</p>
            <a 
              href="mailto:advisory@jeremycabral.com?subject=Podcast Enquiry: Jeremy Cabral"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-bold"
            >
              <Mic className="mr-2" size={20} /> Invite to Podcast
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
