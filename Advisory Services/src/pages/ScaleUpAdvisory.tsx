import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { CheckCircle, TrendingUp, Target, Zap, Calendar, Award, ArrowRight, Download } from 'lucide-react';

export function ScaleUpAdvisory() {
  const resourceUrl = 'https://www.learnlikeme.ai/free-resources';
  const resources = [
    { title: 'Scale-Up Playbook', description: '$1M to $10M frameworks' },
    { title: 'SEO at Scale', description: 'Millions of visitors playbook' },
    { title: 'Pricing Optimization', description: 'Maximize revenue per customer' },
    { title: 'AI Implementation', description: 'Enterprise automation guide' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Scale-Up Advisory - Jeremy Cabral"
        description="Fortnightly advisory sprints for $500K-$10M scale-ups to scale past $10M with AI-native execution."
        path="/scale-up-advisory"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
              <span className="font-semibold">For $500K-$10M Revenue Scale-Ups</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Scale Past $10M With Systematic Growth
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Half-day fortnightly advisory sprints combining $100M+ scale experience with AI-native execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Apply for Advisory <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="#program-details" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fortnightly Sprints</h3>
              <p className="text-gray-600">Half-day strategic sessions every 2 weeks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Outcome-Based</h3>
              <p className="text-gray-600">Results-focused advisory for scale-ups</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Native Execution</h3>
              <p className="text-gray-600">Implementation delivered at unprecedented speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="program-details" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Advisory Pillars
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach to scaling past $10M
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Growth Engineering */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Engineering</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">SEO scaling to millions of visitors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">LinkedIn automation at scale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Strategic PR and media strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Social virality frameworks for brands</span>
                </li>
              </ul>
            </div>

            {/* Revenue Acceleration */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-orange-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Acceleration</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Advanced funnel optimization techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Multi-channel paid advertising strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Strategic partnership development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Pricing and packaging optimization</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered Operations */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-orange-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Custom AI development for your business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Enterprise automation design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Community and software integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Business intelligence and data analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Deep Dive Strategy Sessions
              </h2>
              <p className="text-xl text-orange-50 mb-8">
                Not ready for ongoing advisory? Book a one-off strategy session with comprehensive documentation and actionable playbooks.
              </p>
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/pQ17EnAoNlzccW9ACRB5" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Book a Deep Dive <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Is This Program Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              We partner with ambitious scale-ups ready to invest in growth
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">You're a perfect fit if you:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Have $500K-$10M in annual revenue</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Have proven product-market fit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Are ready for significant investment in growth</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Are implementation-focused, not just strategy-focused</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Want systematic processes that scale to $10M+</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Scale-Ups Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Real experience. Real results. Real speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">$100M+ Bootstrap Experience</h3>
              <p className="text-gray-700 mb-4">
                Not theoretical advice—battle-tested playbooks from scaling a comparison platform to $100M+ revenue across 23 countries without external funding.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Proven at scale, not just startup phase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Bootstrap efficiency with scale-up ambition</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Native Speed</h3>
              <p className="text-gray-700 mb-4">
                What agencies take months to deliver, we execute in weeks. Over 3,000 AI interactions have built our proprietary execution engine.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Custom AI agents for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Automation that actually works</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy + Implementation</h3>
              <p className="text-gray-700 mb-4">
                Unlike consultants who leave you with a deck, we implement. Unlike agencies who execute without strategy, we think strategically first.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Strategic advisory every 2 weeks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Immediate implementation support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fractional Expert Team</h3>
              <p className="text-gray-700 mb-4">
                Access LinkedIn experts, ads specialists, and PR professionals without the overhead of hiring agencies or full-time team members.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">Specialists when you need them</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600 text-sm">No agency markups or bloat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resources for Scale-Ups
            </h2>
            <p className="text-xl text-gray-600">
              Download our advanced playbooks and templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-600 transition-all group"
              >
                <Download className="text-orange-600 mb-4 group-hover:translate-y-1 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Scale Past $10M?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join scale-ups getting $100M+ proven playbooks with AI-native execution. Application-based qualification ensures the right fit.
          </p>
          <Link 
            to="/apply" 
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-lg"
          >
            Apply for Scale-Up Advisory <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
