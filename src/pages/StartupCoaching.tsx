import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { CheckCircle, Users, Target, Zap, TrendingUp, Calendar, ArrowRight, Download } from 'lucide-react';

export function StartupCoaching() {
  const resourceUrl = 'https://www.learnlikeme.ai/free-resources';
  const resources = [
    { title: 'Growth Playbooks', description: 'Battle-tested frameworks' },
    { title: 'LinkedIn Templates', description: 'High-converting content' },
    { title: 'SEO Audits', description: 'Optimize your site' },
    { title: 'AI Automation Guides', description: 'Implement AI today' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Startup Coaching - Jeremy Cabral"
        description="6-week intensive coaching for early-stage founders to build their first growth engine."
        path="/startup-coaching"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
              <span className="font-semibold">For Pre-$500K Revenue Startups</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Startup Into a Growth Machine
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              6-week intensive coaching program teaching battle-tested growth tactics from $100M+ bootstrap success. AI-native execution included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/apply" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Apply for Coaching <ArrowRight className="ml-2" size={20} />
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">6-Week Intensive</h3>
              <p className="text-gray-600">Cohort-based program with 8-10 startups</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Group Coaching</h3>
              <p className="text-gray-600">Learn alongside other ambitious founders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Native Execution</h3>
              <p className="text-gray-600">Implementation tools and automation included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="program-details" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Master
            </h2>
            <p className="text-xl text-gray-600">
              Three core pillars of sustainable startup growth
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
                  <span className="text-gray-700">SEO systems that scale organically</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">LinkedIn automation for lead generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Reddit and social media virality tactics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">PR and media placement strategies</span>
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
                  <span className="text-gray-700">Conversion optimization frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Funnel design and customer journey mapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Paid ads strategy (Google, Meta, LinkedIn)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Partnership development and pricing optimization</span>
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
                  <span className="text-gray-700">Custom AI agents for your business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Automation workflows that save time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Community platform integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Data analysis and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Client */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Is This Program Right for You?
            </h2>
            <p className="text-xl text-gray-600">
              We work best with founders who are ready to implement and commit
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">You're a perfect fit if you:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Have a tech-enabled product with early traction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Are ready to implement what you learn immediately</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Can commit to a 6-week intensive program</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Want to learn from $100M+ bootstrap experience</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">Believe in AI-native execution over traditional methods</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fractional Team */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fractional Team Included
            </h2>
            <p className="text-xl text-gray-600">
              Access expert specialists without agency overhead
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn Expert</h3>
              <p className="text-gray-600">Personal brand building and lead generation</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ads Specialist</h3>
              <p className="text-gray-600">Proven campaigns across all platforms</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">PR Professional</h3>
              <p className="text-gray-600">Media coverage and brand visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free Resources to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Download our proven templates and guides
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Turn Your Startup Into a Growth Machine?
          </h2>
          <p className="text-xl mb-8 text-orange-50">
            Join our next 6-week cohort and learn from battle-tested playbooks. Limited to 8-10 startups per cohort.
          </p>
          <Link 
            to="/apply" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Apply for Startup Coaching <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
