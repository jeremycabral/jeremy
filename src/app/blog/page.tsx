import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Why Most Startups Die at $2M ARR (And How to Fix It)",
      excerpt:
        "The 'Valley of Death' isn't at the start. It's when you have a team of 15, burning cash, and your founder-led sales stop working.",
      category: "Scaling",
      date: "Oct 24, 2025",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1570848216544-360cfae220f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwam91cm5hbCUyMGNvZmZlZSUyMGxhcHRvcCUyMGNyZWF0aXZlfGVufDF8fHx8MTc2OTQwMTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "The AI Growth Stack: Replacing Your Marketing Agency with Agents",
      excerpt:
        "We replaced a $15k/mo SEO agency with a custom Python script and an LLM chain. Here's the exact architecture.",
      category: "AI & Automation",
      date: "Oct 10, 2025",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMHdoaXRlYm9hcmR8ZW58MXx8fHwxNzY5MzI2ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Founder Mode: The Psychology of High-Performance Leadership",
      excerpt:
        "You don't need work-life balance. You need work-life integration. How to manage your energy when you're working 80 hours a week.",
      category: "Mindset",
      date: "Sep 28, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMGNvbmZlcmVuY2UlMjBzdGFnZSUyMG1pY3xlbnwxfHx8fDE3Njk0MDE0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "SEO Is Not Dead. It Just Got Harder.",
      excerpt:
        "Google's SGE update changed everything. Here is how we are adapting our content strategy for the AI search era.",
      category: "Growth Strategy",
      date: "Sep 15, 2025",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1660675587271-47f1083bc367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMGludGVydmlldyUyMHN0dWRpb3xlbnwxfHx8fDE3Njk0MDE0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="pt-44 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & Essays
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts on building companies, deploying AI, and the psychology of
            being a founder.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Categories - two lines: 3 tags then 2 */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto mb-8">
            <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-semibold sm:col-span-1">
              All
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors">
              Growth Strategy
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors">
              AI & Automation
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors col-start-2">
              Mindset
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors">
              Scaling
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
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
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" /> {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="inline-flex items-center text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </span>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get these in your inbox
              </h3>
              <p className="text-gray-600 mb-6">
                Join 15,000+ founders receiving my weekly deep dives on growth
                and AI.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
