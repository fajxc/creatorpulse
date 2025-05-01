import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Search, Users, Send, Headphones } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#8a0d23] to-[#14061e] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="h-8 w-8 text-white" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/how-it-works" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
            Blog
          </Link>
        </nav>
        <Link href="/login" className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors">
          Dashboard <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-8">
          <span>AI-Powered Talent Acquisition Platform</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Why Choose Our AI-Powered Creator Platform
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          We're revolutionizing how brands connect with creators through advanced AI technology and data-driven matching.
        </p>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-white/80 mb-6">
              We've been on both sides. As creators and as content managers, we've helped generate over 100M views. We know how tough it is to find the right talent, so we built something that actually helps.
            </p>
            <p className="text-white/80 mb-8"></p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#8a0d23] font-medium rounded-lg hover:bg-white/90 transition-colors">
                Learn How It Works
              </Link>
              <Link href="/team" className="inline-flex items-center justify-center px-6 py-3 bg-[#c31432] text-white font-medium rounded-lg hover:bg-[#a01029] transition-colors">
                Meet Our Team <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-black/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#e04c6c] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Creator Matching</h4>
                    <p className="text-white/70 text-sm">
                      Our system scans thousands of creators and filters them using over 50 data points to surface the ones that actually fit.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#e04c6c] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">No Guessing Around Here</h4>
                    <p className="text-white/70 text-sm">
                      You get a curated list of creators tailored to your needs. No random picks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#e04c6c] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Reliable Communication</h4>
                    <p className="text-white/70 text-sm">
                      We're quick to respond, open to feedback, and always ready to adjust based on your needs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#e04c6c] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Pricing</h4>
                    <p className="text-white/70 text-sm">
                      Simple subscription model with no hidden fees or surprise costs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">How We Work</h2>
        <p className="text-center text-white/80 max-w-2xl mx-auto mb-16">
          Our streamlined process is designed to get you connected with the perfect creators quickly and efficiently.
        </p>
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c31432] to-[#14061e] -translate-x-1/2" />
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-start mb-16 md:mb-24">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 bg-[#c31432] rounded-full z-10 flex items-center justify-center">
              <span className="font-bold">1</span>
            </div>
            <div className="pl-24 md:pl-0 md:pr-12 md:w-1/2 md:text-right">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10 md:ml-auto md:mr-0 transform transition-all hover:border-[#c31432]/50">
                <div className="flex items-center mb-4 md:justify-end">
                  <Search className="h-6 w-6 text-[#e04c6c] mr-2 md:order-2 md:ml-2 md:mr-0" />
                  <h3 className="text-xl font-bold">Research</h3>
                </div>
                <p className="text-white/70">
                  We research your brand, understanding your values, target audience, and campaign goals to ensure perfect creator matches.
                </p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
          </div>
          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-start mb-16 md:mb-24">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 bg-[#c31432] rounded-full z-10 flex items-center justify-center">
              <span className="font-bold">2</span>
            </div>
            <div className="hidden md:block md:w-1/2" />
            <div className="pl-24 md:pl-12 md:w-1/2">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10 transform transition-all hover:border-[#c31432]/50">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-[#e04c6c] mr-2" />
                  <h3 className="text-xl font-bold">Match</h3>
                </div>
                <p className="text-white/70">
                  We match you with however many creators you need from our database, picked with precision using our AI-powered algorithm.
                </p>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-start mb-16 md:mb-24">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 bg-[#c31432] rounded-full z-10 flex items-center justify-center">
              <span className="font-bold">3</span>
            </div>
            <div className="pl-24 md:pl-0 md:pr-12 md:w-1/2 md:text-right">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10 md:ml-auto md:mr-0 transform transition-all hover:border-[#c31432]/50">
                <div className="flex items-center mb-4 md:justify-end">
                  <Send className="h-6 w-6 text-[#e04c6c] mr-2 md:order-2 md:ml-2 md:mr-0" />
                  <h3 className="text-xl font-bold">Deliver</h3>
                </div>
                <p className="text-white/70">
                  We send them over to you with all the relevant information you need to make contact and start your collaboration.
                </p>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
          </div>
          {/* Step 4 */}
          <div className="relative flex flex-col md:flex-row items-start">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-10 h-10 bg-[#c31432] rounded-full z-10 flex items-center justify-center">
              <span className="font-bold">4</span>
            </div>
            <div className="hidden md:block md:w-1/2" />
            <div className="pl-24 md:pl-12 md:w-1/2">
              <div className="bg-black/30 rounded-xl p-6 border border-white/10 transform transition-all hover:border-[#c31432]/50">
                <div className="flex items-center mb-4">
                  <Headphones className="h-6 w-6 text-[#e04c6c] mr-2" />
                  <h3 className="text-xl font-bold">Support</h3>
                </div>
                <p className="text-white/70">
                  We stay listening and cater to all your needs, providing ongoing support throughout your campaign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto bg-black/30 rounded-2xl p-10 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Ready to Kill</h2>
          <p className="text-white/80 mb-8 text-lg">
            Join top brands using our service, and start crushing your campaign today.
          </p>
          <div className="flex justify-center">
            <Link href="/schedule-demo" className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
              Schedule a Demo <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-white/10 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-white" />
            <span className="font-semibold">Creator AI Platform</span>
          </div>
          <div className="text-sm text-white/60">© 2023 Creator AI Platform. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
