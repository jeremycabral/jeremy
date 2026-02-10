import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';
import marathonArticleImg from '../assets/marathon-article-1200.jpg';

export function Blog() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const posts = [
    {
      title: "How I used AI to lose 20kg in 4 months and run a marathon",
      excerpt: "3,049 ChatGPT prompts and an F1 style crew turned ugly diagnostics into a marathon finish a top sports doctor told me was impossible.",
      category: "Personal Performance",
      date: "Oct 24, 2025",
      readTime: "8 min read",
      image: marathonArticleImg,
      link: "https://newsletter.jeremycabral.com/p/how-i-used-ai-to-lose-20kg-in-4-months"
    },
    {
      title: "Immersing myself in AI and what the future with AI looks like.",
      excerpt: "When we started Finder, I didn’t realise how significant the impact would be.",
      category: "Reflections",
      date: "Oct 10, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk0MDg3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "https://newsletter.jeremycabral.com/p/after-16-years-as-co-founder-of-finder"
    },
    {
      title: "Jeremy Cabral: weight loss biohacking",
      excerpt: "The biohacking secrets that helped me transform my health and performance.",
      category: "Health",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      image: "https://i.dailymail.co.uk/1s/2025/11/10/04/103738513-0-image-a-51_1762748468197.jpg",
      link: "https://www.dailymail.co.uk/health/article-15275007/Jeremy-Cabral-weight-loss-biohacking.html"
    },
    {
      title: "Why not all CEOs are built to wake up at 5am",
      excerpt: "Dispelling the myths of the 5am club and finding your own peak performance hours.",
      category: "Leadership",
      date: "Sep 15, 2025",
      readTime: "10 min read",
      image: "https://static.ffx.io/images/$zoom_0.1851%2C$multiply_4%2C$ratio_1.777778%2C$width_1059%2C$x_169%2C$y_175/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/4285dcc0f92224103f6feeaf704d753a19a57e50",
      link: "https://www.afr.com/work-and-careers/management/why-not-all-ceos-are-built-to-wake-up-at-5am-20251024-p5n552"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Blog - Jeremy Cabral"
        description="Insights and essays on scaling, AI execution, and the psychology of being a founder."
        path="/blog"
      />
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights & Essays</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on building companies, deploying AI, and the psychology of being a founder.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post, i) => (
              <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-orange-600">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 max-w-3xl mx-auto">
               <h3 className="text-2xl font-bold text-gray-900 mb-4">Get these in your inbox</h3>
               <p className="text-gray-600 mb-6">
                 Join other founders receiving my weekly deep dives on growth and AI.
               </p>
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={async (event) => {
                  event.preventDefault();
                  setStatus('loading');
                  try {
                    const response = await fetch('/api/forms/subscribe', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email, source: 'blog-newsletter' }),
                    });

                    if (!response.ok) {
                      throw new Error('Subscription failed');
                    }

                    setEmail('');
                    setStatus('success');
                  } catch (error) {
                    setStatus('error');
                  }
                }}
              >
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                 />
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors disabled:cursor-not-allowed disabled:opacity-80"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting...' : 'Subscribe'}
                 </button>
               </form>
              {status === 'success' && (
                <p className="text-xs text-green-700 mt-3 text-center">Thanks for subscribing.</p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-700 mt-3 text-center">Something went wrong. Try again.</p>
              )}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
