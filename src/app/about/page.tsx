import Link from "next/link";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Music } from "lucide-react";
import profilePic from "../../../Advisory Services/src/assets/4d3a20915779a0aa9be4b813fd1f75dbed9f11b3.png";

export default function AboutPage() {
  const profileSrc = typeof profilePic === "string" ? profilePic : profilePic.src;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Founder. Builder. <br />
                <span className="text-orange-500">Growth Obsessive.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I&apos;m Jeremy Cabral. I spent the last 25+ years building a
                bootstrap startup from a bedroom idea to a $100M+ revenue global
                platform. Now, I help other founders do it faster.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/apply"
                  className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/newsletter"
                  className="px-8 py-4 border border-gray-700 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
                >
                  Weekly Newsletter
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={profileSrc}
                  alt="Jeremy Cabral"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-serif italic text-lg">
                  &quot;Business is the ultimate sport. The scoreboard is revenue,
                  but the trophy is freedom.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$30M</div>
              <div className="text-sm text-gray-500 font-medium">Funds Raised</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$650M</div>
              <div className="text-sm text-gray-500 font-medium">Valuation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$100M+</div>
              <div className="text-sm text-gray-500 font-medium">
                Bootstrapped Revenue
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-sm text-gray-500 font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg prose-orange">
          <h2 className="text-3xl font-bold text-gray-900">The Journey</h2>

          <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
            <li>Being a part of a company that bootstrapped its way to $100m+ revenue.</li>
            <li>Expanding into 20+ countries helping over 35+ million people a year.</li>
            <li>Supporting 1,100+ Finder crew to achieve their full potential at Finder (and beyond).</li>
          </ul>

          <p>
            I have always obsessed over building a better product - chipping away every day at another guide to educate, building another comparison, leaving no stone unturned in our quest to help people better understand the products they were considering and improve their financial decisions.
          </p>
          <p>
            Over time, those incremental ‘unlocks’ every day led Finder to being a brand trusted by millions globally. This of course was only possible because of the remarkable crew that joined us on this mission.
          </p>
          <p>
            I had the privilege of leading and working alongside our crew for so long, who passionately worked on something they knew would be bigger than themselves. We built incredible camaraderie, friendship and have overcome every challenge that’s come our way, building lasting impact that none of us could have created alone.
          </p>
          <p>
            We set ambitious goals, and always found ways to achieve them no matter how impossible they seemed. Our successes are marked by the medals honouring our achievements on our office walls, and just as much by how we have risen from setbacks, stronger each time.
          </p>
          <p>
            I have loved deeply the complexity of growing and scaling Finder. I’ll still continue to provide my guidance on the road ahead as a Special Advisor, shareholder and in board meetings.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-12">
            Why I&apos;m Doing This Now
          </h3>
          <p>
            After leaving Finder, I realized something: Most founders are making the exact same mistakes I made in years 1-5.
          </p>
          <p>
            They&apos;re burning out on operations. They&apos;re guessing at growth channels. They&apos;re hiring expensive agencies that don&apos;t deliver.
          </p>
          <p>
            I built this advisory practice to give founders the cheat codes. To combine my 25+ years of battle scars with the new power of AI execution.
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl mt-12 not-prose border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Music className="text-orange-600 mr-2" size={20} />
              When I&apos;m Not Working
            </h4>
            <p className="text-gray-600 mb-0">
              When I&apos;m not scaling businesses, I love hanging out with my wife and twin girls and travelling the world. I&apos;m also a massive music nerd. You&apos;ll find me playing guitar, collecting vinyl, or at a gig. I also recently lost 20kg and ran a marathon—applying the same discipline to health as I do to business.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Operating Principles</h2>
            <p className="text-gray-400">
              How I work and what I expect from founders I work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                Speed Over Perfection
              </h3>
              <p className="text-gray-400">
                The market doesn&apos;t reward perfect plans. It rewards fast
                execution. We ship, we learn, we iterate.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                Systems Over Hustle
              </h3>
              <p className="text-gray-400">
                Hustle gets you to $1M. Systems get you to $100M. If you can&apos;t
                automate it or delegate it, you&apos;re the bottleneck.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                Brutal Honesty
              </h3>
              <p className="text-gray-400">
                I will tell you what you need to hear, not what you want to
                hear. Growth requires confronting reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
