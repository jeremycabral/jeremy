"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Send, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import canvaLogo from "../../../Advisory Services/src/assets/ac0dc2a6934a4f7053429eb1903644a34e7d29f1.png";
import finderLogo from "../../../Advisory Services/src/assets/46925937296f87bb538c868d04cf09a7c0bc92cc.png";
import showpoLogo from "../../../Advisory Services/src/assets/8a2bb1e0e8140312f815dc3a7b10f9822128a789.png";
import airtaskerLogo from "../../../Advisory Services/src/assets/992b4ac11584a5aeb311913c1de2eb4f4fac8e80.png";
import Link from "next/link";

export function ApplyForm({ service }: { service?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    revenue: "",
    website: "",
    challenge: "",
    service: service || "startup",
  });
  const canvaSrc = typeof canvaLogo === "string" ? canvaLogo : canvaLogo.src;
  const finderSrc = typeof finderLogo === "string" ? finderLogo : finderLogo.src;
  const showpoSrc = typeof showpoLogo === "string" ? showpoLogo : showpoLogo.src;
  const airtaskerSrc =
    typeof airtaskerLogo === "string" ? airtaskerLogo : airtaskerLogo.src;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock form submission
    alert(
      "Thank you for applying! I will review your application and get back to you within 48 hours."
    );
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to scale your business?
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you’re a business owner ready to scale with proven systems,
                strategies, and tactics, let’s connect! I work with a limited
                number of founders each quarter. Please tell me about your
                business so we can ensure I&apos;m the right fit for your goals.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar / Trust Signals */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    My Criteria
                  </h3>
                  <p className="text-gray-600 text-sm">
                    I&apos;m looking for founders who are ready to execute, not
                    just learn.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Selective Process
                      </h4>
                      <p className="text-sm text-gray-500">
                        I accept ~15% of applications to ensure high-touch attention.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">No Hard Sales</h4>
                      <p className="text-sm text-gray-500">
                        If I can&apos;t help you scale, I&apos;ll tell you upfront.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Growth Playbooks Used By
                  </h4>
                  <div className="grid grid-cols-2 gap-6 opacity-70">
                    <div className="flex items-center justify-center h-12 w-full">
                      <img
                        src={canvaSrc}
                        alt="Canva"
                        className="max-h-6 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                      <img
                        src={airtaskerSrc}
                        alt="Airtasker"
                        className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                      <img
                        src={finderSrc}
                        alt="Finder"
                        className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 w-full">
                      <img
                        src={showpoSrc}
                        alt="Showpo"
                        className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-900 p-8 border-b border-gray-800">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    Application Form
                    <span className="ml-4 text-xs bg-orange-600 text-white px-2 py-1 rounded uppercase tracking-wide">
                      Confidential
                    </span>
                  </h2>
                </div>

                <div className="p-8 md:p-10 space-y-8">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        placeholder="Founder Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        placeholder="founder@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Company Info & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        placeholder="Acme Inc"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        placeholder="+61 400 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Website & Revenue */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="website"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                        placeholder="https://..."
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="revenue"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Annual Revenue
                      </label>
                      <div className="relative">
                        <select
                          name="revenue"
                          required
                          value={formData.revenue}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none appearance-none"
                        >
                          <option value="">Select Range...</option>
                          <option value="pre-revenue">Pre-Revenue</option>
                          <option value="0-500k">$0 - $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-5m">$1M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m+">$10M+</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <ArrowRight className="text-gray-400 rotate-90" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div>
                    <label
                      htmlFor="challenge"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      What is the biggest bottleneck preventing you from growing
                      right now?
                    </label>
                    <textarea
                      name="challenge"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Be specific. e.g. 'We have traffic but conversion is low' or 'I'm stuck in operations'"
                      value={formData.challenge}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                    <div className="text-center mt-4 space-y-2">
                      <p className="text-sm text-gray-500">
                        By submitting this form, you agree to my{" "}
                        <Link
                          href="/terms-of-use"
                          className="underline text-gray-500 hover:text-gray-700"
                        >
                          Terms of Use
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
