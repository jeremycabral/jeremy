import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { TrendingUp, Users, Target, CheckCircle, ArrowRight, Rocket, Star, PlayCircle, BarChart3, Mail, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from "motion/react";
import { ClientOnly } from 'vite-react-ssg';
import { useEffect, useState, lazy, Suspense } from 'react';
import founderStoryImg from '../assets/founder-story-1200.jpg';
import heroImg from '../assets/hero-1600.jpg';
import canvaLogo from 'figma:asset/ac0dc2a6934a4f7053429eb1903644a34e7d29f1.png';
import finderLogo from 'figma:asset/46925937296f87bb538c868d04cf09a7c0bc92cc.png';
import bukalapakLogo from 'figma:asset/2864c7bf1dc13676454f9e4f82b130b71f82642f.png';
import showpoLogo from 'figma:asset/8a2bb1e0e8140312f815dc3a7b10f9822128a789.png';
import airtaskerLogo from 'figma:asset/992b4ac11584a5aeb311913c1de2eb4f4fac8e80.png';
import marathonArticleImg from '../assets/marathon-article-1200.jpg';

const Masonry = lazy(async () => {
  const mod = await import('react-responsive-masonry');
  return { default: mod.default };
});
const ResponsiveMasonry = lazy(async () => {
  const mod = await import('react-responsive-masonry');
  return { default: mod.ResponsiveMasonry };
});

export function Home() {
  const [isClient, setIsClient] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const testimonials = [
    {
      name: "Patrick Gallagher",
      role: "Founder, Fokal",
      text: "Working with Jeremy really shifted me into a growth mindset and made me better equipped for success.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFcnALlLFWmVg/profile-displayphoto-crop_800_800/B56Zp1JnrZG0AI-/0/1762902048031?e=1770854400&v=beta&t=RdUL-rZk6fBKiJymgC979EkfqdkQ0W28dgQGA3BpgGk"
    },
    {
      name: "Jon Brodsky",
      role: "ex-Finder USA CEO",
      text: "Repeatable growth processes are definitely the #1 thing I learned from Jeremy. I use his methods at my new startup and have unlocked serious value and cost savings.",
      image: "https://media.intro.co/avatars/1145026vdG176cO.jpg"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonialCards = testimonials.map((t, i) => (
    <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
      <div className="flex items-center mb-4">
        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
        <div>
          <div className="font-bold text-gray-900">{t.name}</div>
          <div className="text-sm text-gray-500">{t.role}</div>
        </div>
      </div>
      <div className="flex text-orange-400 mb-3">
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </div>
      <p className="text-gray-700 leading-relaxed">"{t.text}"</p>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Seo
        title="Jeremy Cabral - Startup and Scale Up Growth Advisor"
        description="I bootstrapped my last company to $100M+ revenue over 17 years. Now, I'm sharing the exact playbooks and AI execution systems to help you do it faster."
        path="/"
      />
      <Navigation />

      {/* Hero Section - Founder Style (Dark) */}
      <section className="relative bg-[#0a0a0a] text-white h-screen min-h-[600px] flex items-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 z-0 w-1/2 h-full bg-orange-600/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-500 font-medium mb-8">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span className="text-sm tracking-wide uppercase">Accepting Applications</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                I Help Founders <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 whitespace-nowrap">
                  Scale to $100M+
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                I bootstrapped my last company to $100M+ revenue over 17 years. Now, I'm sharing the exact playbooks and AI execution systems to help you do it faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.learnlikeme.ai/free-resources" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Free Playbooks <ExternalLink className="ml-2" size={18} />
                </a>
                <Link 
                  to="/apply" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                >
                  Work with Me <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-500 font-medium">
                <div className="flex items-center">
                  <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                  <span>Growth Strategy breakthroughs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                  <span>Access to my network</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                  <span>Systems to scale your business</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                  <span>AI Strategy & Implementation</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[75vh] max-h-[800px] w-auto aspect-[4/5] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <img 
                  src={heroImg}
                  alt="Jeremy Cabral"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating Social Proof Card */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-bold text-white mb-1">$680M</div>
                        <div className="text-gray-300 text-sm">Valuation Achieved</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white mb-1">$30M+</div>
                        <div className="text-gray-300 text-sm">Funds Raised</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            My growth playbooks have been adopted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img src={canvaLogo} alt="Canva" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={airtaskerLogo} alt="Airtasker" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={finderLogo} alt="Finder" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={showpoLogo} alt="Showpo" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            <img src={bukalapakLogo} alt="Bukalapak" className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work Together</h2>
            <p className="text-xl text-gray-600">Tailored support for every stage of scaling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startup Coaching */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-600">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Startup Coaching</h3>
              <p className="text-gray-600 mb-6">For Pre-revenue up to $1M founders finding PMF and building their first growth engine.</p>
              <Link to="/startup-coaching" className="text-orange-600 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Strategy Deep Dive (Featured) */}
            <div className="group bg-gray-900 text-white p-8 rounded-2xl border border-gray-800 hover:border-orange-500 hover:shadow-xl transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Strategy Deep Dive</h3>
              <p className="text-gray-400 mb-6">Intensive problem-solving sessions for founders needing breakthrough clarity on growth strategy.</p>
              <Link to="/coaching" className="text-orange-500 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                Explore Strategy <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Scale-Up Advisory */}
            <div className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-600">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale-Up Advisory</h3>
              <p className="text-gray-600 mb-6">Strategic sprints for above $1M scale-ups. Break plateaus and exit operations.</p>
              <Link to="/scale-up-advisory" className="text-orange-600 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                Apply for Advisory <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Video/Image Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img 
                  src={founderStoryImg}
                  alt="Founder Story" 
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                I'm sharing the insights that I wish I had when I started
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Scaling a business is lonely. I spent 25+ years figuring out the hard way how to grow without burning out.
                </p>
                <p>
                  I built a $100M+ company, but I made a million mistakes. My mission now is to help you skip the mistakes and get straight to the growth.
                </p>
                <p>
                  We don't just talk strategy. We install the systems. We train your team. It's a true partnership.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-800 flex flex-wrap gap-x-12 gap-y-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$100M+</div>
                  <div className="text-sm text-gray-400">Bootstrapped Revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$680M</div>
                  <div className="text-sm text-gray-400">Valuation Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">$30M+</div>
                  <div className="text-sm text-gray-400">Funds Raised</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
               <p className="text-gray-600">Playbooks and essays on scaling.</p>
             </div>
             <Link to="/blog" className="text-orange-600 font-bold hover:text-orange-700">View all posts &rarr;</Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Post 1 */}
             <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                 <img src={marathonArticleImg} className="w-full h-full object-cover" alt="Marathon article" />
              </div>
               <div className="p-6">
                 <div className="text-xs font-bold text-orange-600 uppercase mb-2">Personal Performance</div>
                <a href="https://newsletter.jeremycabral.com/p/how-i-used-ai-to-lose-20kg-in-4-months" target="_blank" rel="noopener noreferrer">
                   <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">How I used AI to lose 20kg in 4 months and run a marathon</h3>
                 </a>
                 <p className="text-gray-600 text-sm mb-4">3,049 ChatGPT prompts and an F1 style crew turned ugly diagnostics into a marathon finish a top sports doctor told me was impossible.</p>
                <a href="https://newsletter.jeremycabral.com/p/how-i-used-ai-to-lose-20kg-in-4-months" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-900 hover:text-orange-600">Read Essay &rarr;</a>
               </div>
             </div>

             {/* Post 2 */}
             <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
               <div className="h-48 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk0MDg3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover" alt="Blog" />
               </div>
               <div className="p-6">
                 <div className="text-xs font-bold text-orange-600 uppercase mb-2">Reflections</div>
                <a href="https://newsletter.jeremycabral.com/p/after-16-years-as-co-founder-of-finder" target="_blank" rel="noopener noreferrer">
                   <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 cursor-pointer">Immersing myself in AI and what the future with AI looks like.</h3>
                 </a>
                 <p className="text-gray-600 text-sm mb-4">When we started Finder, I didn’t realise how significant the impact would be.</p>
                <a href="https://newsletter.jeremycabral.com/p/after-16-years-as-co-founder-of-finder" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-900 hover:text-orange-600">Read Essay &rarr;</a>
               </div>
             </div>

             {/* Newsletter Card */}
             <div className="bg-orange-50 rounded-xl p-8 border border-orange-200 flex flex-col justify-center">
               <div className="w-12 h-12 bg-white text-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                 <Mail size={24} />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">Receive my Weekly Newsletter</h3>
               <p className="text-gray-600 text-sm mb-6">Get actionable growth playbooks, insights and systems in your inbox</p>
              <form
                className="space-y-3"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setNewsletterStatus('loading');
                  try {
                    const response = await fetch('/api/forms/subscribe', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        fullName: newsletterName,
                        email: newsletterEmail,
                        source: 'home-newsletter',
                      }),
                    });

                    if (!response.ok) {
                      throw new Error('Subscription failed');
                    }

                    setNewsletterName('');
                    setNewsletterEmail('');
                    setNewsletterStatus('success');
                  } catch (error) {
                    setNewsletterStatus('error');
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:border-orange-500"
                  required
                  value={newsletterName}
                  onChange={(event) => setNewsletterName(event.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-lg border border-orange-200 focus:outline-none focus:border-orange-500"
                  required
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="w-full py-2 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  {newsletterStatus === 'loading' ? 'Submitting...' : 'Subscribe Free'}
                </button>
                {newsletterStatus === 'success' && (
                  <p className="text-xs text-green-700">Thanks for subscribing.</p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="text-xs text-red-700">Something went wrong. Try again.</p>
                )}
               </form>
             </div>
           </div>
        </div>
      </section>

      {/* Social Proof Masonry */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Results Speak Louder
            </h2>
            <p className="text-xl text-gray-600">
              Join the founders who are redefining what's possible.
            </p>
          </div>

          {isClient ? (
            <ClientOnly>
              {() => (
                <Suspense
                  fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {testimonialCards}
                    </div>
                  }
                >
                  <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter="24px">{testimonialCards}</Masonry>
                  </ResponsiveMasonry>
                </Suspense>
              )}
            </ClientOnly>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialCards}
            </div>
          )}
          
          <div className="mt-12 text-center">
             <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors font-bold">
               View All Case Studies <ArrowRight className="ml-2" size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stop Guessing. Start Scaling.
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            We only work with a limited number of founders each quarter to ensure maximum impact. Apply now to secure your spot.
          </p>
          <Link 
            to="/apply" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
          >
            Start Your Application
          </Link>
          <p className="mt-6 text-orange-200 text-sm">
            Application takes 2 minutes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}