import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Seo
        title="Terms of Service - Jeremy Cabral"
        description="Terms of service for jeremycabral.com."
        path="/terms-of-use"
      />
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="text-orange-600 hover:text-orange-500 mb-4 inline-block font-medium">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-400">Last updated: January 27, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="mb-4">
              Welcome to jeremycabral.com. These Terms of Service (“Terms”) govern your use of the website located at
              https://jeremycabral.com (the “Site”) and any related services, content, or materials provided by Jeremy
              Cabral (collectively, the “Services”).
            </p>
            <p className="mb-4">
              By accessing or using the Site, you agree to abide by these Terms and to comply with all applicable laws
              and regulations. If you do not agree with these Terms, you are prohibited from using or accessing this
              Site or any other services provided by Jeremy Cabral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Limitations of Use</h2>
            <p className="mb-4">
              By using this Site, you warrant on behalf of yourself, your users, and other parties you represent that
              you will not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this Site.</li>
              <li>Remove any copyright or other proprietary notations from any materials on this Site.</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              <li>Knowingly or negligently use this Site or its associated services in a way that abuses or disrupts our networks or any other service provided by Jeremy Cabral.</li>
              <li>Use this Site to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material.</li>
              <li>Use this Site in violation of any applicable laws or regulations.</li>
              <li>Use this Site in conjunction with sending unauthorized advertising or spam.</li>
              <li>Harvest, collect, or gather user data without the user’s explicit consent.</li>
              <li>Use the Site in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
            <p className="mb-4">
              The intellectual property in the materials contained in this Site (including but not limited to
              articles, AI prompts, frameworks, and business insights) is owned by or licensed to Jeremy Cabral and is
              protected by applicable copyright and trademark law.
            </p>
            <p className="mb-4">
              We grant users permission to download one copy of the materials for personal, non-commercial transitory
              use. This constitutes the grant of a license, not a transfer of title. This license shall automatically
              terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by
              Jeremy Cabral at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Professional Disclaimer (No Advice)</h2>
            <p className="mb-4">
              The materials on jeremycabral.com are provided for general information and educational purposes only.
              Jeremy Cabral is a business founder and operator, not a licensed financial, legal, or medical advisor.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Business & Financial: While content may discuss business growth, revenue, and scaling, it does not constitute professional financial or investment advice.</li>
              <li>AI & Technology: AI-related content is based on personal experimentation and current technology trends. We do not warrant the accuracy or fitness of any AI prompts or workflows provided.</li>
              <li>Health & Fitness: Any personal accounts of health or fitness (e.g., marathon training or weight loss) are personal anecdotes and should not be taken as medical advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Liability</h2>
            <p className="mb-4">
              Our Site and the materials on our Site are provided on an 'as is' basis. To the extent permitted by law,
              Jeremy Cabral makes no warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of merchantability, fitness
              for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p className="mb-4">
              In no event shall Jeremy Cabral or his affiliates be liable for any consequential loss (including loss
              of profit, loss of revenue, or loss of data) suffered or incurred by you or any third party arising from
              the use or inability to use this Site, even if Jeremy Cabral has been notified of the possibility of
              such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
            <p className="mb-4">
              The materials appearing on our Site are not comprehensive and are for general information purposes only.
              Jeremy Cabral does not warrant or make any representations concerning the accuracy, likely results, or
              reliability of the use of the materials on this website, or otherwise relating to such materials or on
              any resources linked to this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. External Links</h2>
            <p className="mb-4">
              Jeremy Cabral has not reviewed all of the sites linked to his website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or
              control by Jeremy Cabral. Use of any such linked site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Right to Terminate</h2>
            <p className="mb-4">
              We may suspend or terminate your right to use our Site and terminate these Terms immediately upon
              written notice to you for any breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Severance</h2>
            <p className="mb-4">
              Any term of these Terms which is wholly or partially void or unenforceable is severed to the extent that
              it is void or unenforceable. The validity of the remainder of these Terms is not affected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the laws of New South Wales, Australia. You
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
