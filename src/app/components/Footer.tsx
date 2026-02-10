import Link from "next/link";
import { Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="text-2xl font-bold text-orange-600">
                Jeremy Cabral.
              </div>
              <div className="text-sm font-medium text-gray-400 mt-1">
                Growth Advisor
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Proven growth engine as a service. Built Australia&apos;s largest
              bootstrap success, now sharing the playbook.
            </p>
            <div className="flex gap-4">
              <a
                href="https://au.linkedin.com/in/jeremycabral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/jeremycabral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/jeremyjcabral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://substack.com/@jeremyjcabral"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/startup-coaching"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Startup Group Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/scale-up-advisory"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Scale-Up Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Strategy Deep Dives
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.learnlikeme.ai/free-resources/founders-operating-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Founder Operating System
                </a>
              </li>
              <li>
                <a
                  href="https://www.learnlikeme.ai/free-resources/founders-operating-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  LinkedIn Growth
                </a>
              </li>
              <li>
                <a
                  href="https://www.learnlikeme.ai/free-resources/life-planning-retreat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Life Planning
                </a>
              </li>
              <li>
                <a
                  href="https://www.learnlikeme.ai/free-resources/book-summary-principles-of-building-ai-agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-600 transition-colors"
                >
                  Building AI Agents
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jeremy Cabral. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms-of-use" className="hover:text-orange-600 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-orange-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
