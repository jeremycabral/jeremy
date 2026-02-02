import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { PlayCircle, Mic, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import catchingUpWithCub from 'figma:asset/fec744216662ed19997130bae5f89e6e4f4bd26b.png';

export function Media() {
  const podcasts = [
    {
      showName: "Never Not Building",
      title: 'Jeremy Cabral: "I Bootstrapped A $100M+ Company Without Funding"',
      description: "Jeremy Cabral spent nearly two decades helping build Finder into a global platform used by tens of millions of people each year. In this episode, we talk through how that growth actually happened, how Finder used content and SEO as long-term infrastructure, and why flywheels mattered more than targets.",
      image: "https://img.youtube.com/vi/vF9fUnF4z9I/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=vF9fUnF4z9I"
    },
    {
      showName: "Catching Up With CUB",
      title: "#260 Jeremy Cabral - How Finder Found Success",
      description: "Daniel catches up with Jeremy Cabral, Co-Founder & COO of Finder. From launching a blog in his bedroom to building a business that spans 80+ countries, Jeremy’s journey is remarkable. They dive into the art of building category-defining companies and how to lead through seasons of challenge and reinvention.",
      image: catchingUpWithCub,
      link: "https://cub.club/podcast/260-jeremy-cabral-how-finder-found-success/"
    },
    {
      showName: "The How Story",
      title: "Things Every Start-up Founder Should Know | Ft Jeremy Cabral",
      description: "Jeremy Cabral is best known as the co-founder of Finder, one of Australia’s most successful comparison platforms. In this episode, Jeremy shares the hustle, risks, and lessons behind those achievements, and what it really takes to back yourself as a founder and leader.",
      image: "https://i.ytimg.com/vi/47KTmn64KMo/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=o5Z_Z5Z5Z5o"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Seo
        title="Media Appearances - Jeremy Cabral"
        description="Media and podcast appearances on scaling, leadership, and bootstrapped growth."
        path="/media"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media & <span className="text-orange-500">Podcasts</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conversations on scaling, leadership, and the founder journey.
          </p>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {podcasts.map((podcast, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
                    <ImageWithFallback 
                      src={podcast.image} 
                      alt={podcast.title}
                      className="w-full h-full object-cover"
                    />
                    <a 
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity group"
                    >
                      <PlayCircle size={64} className="text-white drop-shadow-lg" />
                    </a>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="text-orange-600 font-bold text-sm uppercase tracking-wide mb-2 flex items-center">
                    <Mic size={16} className="mr-2" />
                    {podcast.showName}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {podcast.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {podcast.description}
                  </p>
                  <a 
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 font-bold hover:text-orange-600 transition-colors"
                  >
                    Listen to Episode <ExternalLink size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want me on your podcast?</h3>
            <p className="text-gray-600 mb-8">I love sharing deep dives on growth, bootstrapping, and AI systems.</p>
            <a 
              href="mailto:advisory@jeremycabral.com?subject=Podcast Enquiry: Jeremy Cabral"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              Invite to Podcast
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
