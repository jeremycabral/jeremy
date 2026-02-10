import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Seo } from '../components/Seo';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/forms/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, source: 'newsletter-page' }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setFullName('');
      setEmail('');
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Weekly Newsletter - Jeremy Cabral"
        description="Get actionable growth playbooks, insights and systems in your inbox."
        path="/newsletter"
      />
      <Navigation />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail size={32} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Receive my <span className="text-orange-600">Weekly Newsletter</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get actionable growth playbooks, insights and systems in your inbox.
          </p>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 max-w-lg mx-auto shadow-lg">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
              <label className="sr-only" htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Full name"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-600 text-lg"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
            </div>
            <div>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@company.com" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-600 text-lg"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-orange-200 disabled:cursor-not-allowed disabled:opacity-80"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Subscribe free'}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-xs text-green-700 mt-3">Thanks for subscribing.</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-700 mt-3">Something went wrong. Try again.</p>
            )}
            <p className="text-xs text-gray-500 mt-4">
              I respect your inbox. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
