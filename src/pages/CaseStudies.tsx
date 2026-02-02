import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { TrendingUp, ArrowRight, Quote, Linkedin, MessageCircle, ThumbsUp, Eye, ArrowUp } from 'lucide-react';

export function CaseStudies() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Seo
        title="Case Studies - Jeremy Cabral"
        description="Real results from founders using Jeremy Cabral's growth playbooks and advisory."
        path="/case-studies"
      />
      <Navigation />

      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Real Results. Real Founders.</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped startups and scale-ups break through revenue plateaus and build autonomous growth engines.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Patrick Gallagher Case Study */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-64 sm:h-72 lg:h-[360px] bg-gray-100 lg:col-span-1">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFcnALlLFWmVg/profile-displayphoto-crop_800_800/B56Zp1JnrZG0AI-/0/1762902048031?e=1770854400&v=beta&t=RdUL-rZk6fBKiJymgC979EkfqdkQ0W28dgQGA3BpgGk" 
                  alt="Patrick Gallagher" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">Patrick Gallagher</h3>
                  <p className="text-gray-300">Founder, Fokal</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 lg:col-span-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  <TrendingUp size={16} />
                  <span>Growth Mindset Shift</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Turning 800 LinkedIn connections into 53k+ impressions
                </h2>
                
                <Quote className="text-orange-500 mb-4 opacity-100" size={32} />
                <p className="text-xl text-gray-600 italic mb-10">
                  "Working with Jeremy really shifted me into a growth mindset and made me better equipped for success."
                </p>

                <div className="space-y-8">
                  {/* LinkedIn Stats */}
                  <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                      <Linkedin className="mr-2 text-[#0077b5]" size={24} /> LinkedIn Performance
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="text-xs text-gray-500 font-semibold uppercase mb-2">1st Lead Magnet</div>
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-2xl font-bold text-gray-900">43,181</span>
                          <span className="text-sm text-gray-500">impressions</span>
                        </div>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="flex items-center"><MessageCircle size={14} className="mr-1" /> 634</span>
                          <span className="flex items-center"><ThumbsUp size={14} className="mr-1" /> 114</span>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                        <div className="text-xs text-orange-600 font-semibold uppercase mb-2">Total Since Joining</div>
                        <div className="flex items-baseline space-x-2 mb-2">
                          <span className="text-2xl font-bold text-gray-900">53,677</span>
                          <span className="text-sm text-gray-500">impressions</span>
                        </div>
                         <div className="flex gap-4 text-sm text-gray-600">
                          <span className="flex items-center"><MessageCircle size={14} className="mr-1" /> 727</span>
                          <span className="flex items-center"><ThumbsUp size={14} className="mr-1" /> 181</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reddit Stats */}
                  <div>
                    <h4 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                      <span className="w-6 h-6 bg-[#FF4500] rounded-full flex items-center justify-center mr-2 text-white font-bold text-xs">R</span>
                      Reddit Viral Growth
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <span className="font-medium text-gray-700">Fokal Lead Magnet</span>
                        <div className="flex items-center gap-4 text-sm">
                           <span className="font-bold text-gray-900 flex items-center"><Eye size={16} className="mr-1 text-gray-400" /> 2.7K</span>
                           <span className="text-gray-600 flex items-center"><MessageCircle size={16} className="mr-1 text-gray-400" /> 53</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <span className="font-medium text-gray-700">Rave Booklist Post</span>
                        <div className="flex items-center gap-4 text-sm">
                           <span className="font-bold text-gray-900 flex items-center"><Eye size={16} className="mr-1 text-gray-400" /> 7.6K</span>
                           <span className="text-gray-600 flex items-center"><ArrowUp size={16} className="mr-1 text-gray-400" /> 27</span>
                           <span className="text-gray-600 flex items-center"><MessageCircle size={16} className="mr-1 text-gray-400" /> 18</span>
                        </div>
                      </div>
                       <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <span className="font-medium text-gray-700">AI Search Subreddit</span>
                        <div className="flex items-center gap-4 text-sm">
                           <span className="font-bold text-gray-900 flex items-center"><Eye size={16} className="mr-1 text-gray-400" /> 2,308</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                   <p className="text-sm text-gray-500 mb-4">
                     Patrick started with approx. 800 LinkedIn connections. The results above were achieved through our targeted content playbooks and viral growth strategies.
                   </p>
                   <Link to="/apply" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700">
                     Apply to join the next cohort <ArrowRight className="ml-2" size={20} />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to write your success story?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          We only work with a limited number of founders each quarter. Apply now to see if we're a fit.
        </p>
        <Link to="/apply" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors">
          Work with Me <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}