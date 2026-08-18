import Link from "next/link";
import { BrainCircuit, ArrowRight, Shield, Globe, Lock, Code2, MoveRight, ExternalLink } from "lucide-react";
import { LightboxImage } from "@/components/ui/lightbox-image";

export default function AnotherMeLandingPage() {
  return (
    <div className="min-h-[100dvh] bg-[#F9FAFB] text-[#18181B] selection:bg-[#3B82F6] selection:text-white font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-16 py-8 flex justify-between items-center border-b border-[rgba(226,232,240,0.5)]">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight flex items-center gap-3 group">
          <BrainCircuit className="w-6 h-6 text-[#18181B] group-hover:rotate-12 transition-transform" />
          <span>Another Me</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[0.8125rem] text-[#71717A] hover:text-[#18181B] transition-colors hidden md:block uppercase tracking-widest font-mono">
            Index
          </Link>
          <Link href="https://app.anotherme.ai" target="_blank" className="px-6 py-2.5 rounded-full bg-[#18181B] text-white text-sm font-medium hover:scale-[0.98] transition-transform flex items-center gap-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            Open App
          </Link>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Left-Aligned */}
      <section className="relative min-h-[100dvh] pt-32 pb-20 px-6 md:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1400px] w-full mx-auto items-center">
          
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <h1 className="text-5xl md:text-7xl lg:text-[clamp(2.25rem,5vw,3.75rem)] font-serif font-bold tracking-tight leading-[1.1] mb-8 text-[#18181B]">
              Master Your Digital Twin
            </h1>
            
            <p className="text-base md:text-xl text-[#71717A] font-light max-w-xl mb-12 leading-[1.65]">
              Create a personalized AI agent with its own memory. Connect it to Telegram, WhatsApp, and Web. Let it work for you 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link href="https://app.anotherme.ai" target="_blank" className="px-8 py-4 rounded-full bg-[#3B82F6] text-white text-base font-medium hover:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Build Your Agent
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Artistic Asymmetric Visual */}
            <div className="w-full aspect-[3/4] bg-[#FFFFFF] rounded-[2.5rem] border border-[rgba(226,232,240,0.5)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between">
               <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center border border-[rgba(226,232,240,0.5)]">
                 <Lock className="w-5 h-5 text-[#18181B]" />
               </div>
               <div>
                 <p className="font-mono text-[#94A3B8] text-[0.8125rem] tracking-widest uppercase mb-2">VPC Status</p>
                 <p className="font-serif text-2xl text-[#18181B]">Agent Secure</p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid - Asymmetric Bento */}
      <section id="features" className="py-32 px-6 md:px-16 bg-[#FFFFFF] border-y border-[rgba(226,232,240,0.5)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-serif text-[#18181B] tracking-tight leading-[1.1]">Omnichannel Memory.<br/>Absolute Privacy.</h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-[#71717A] text-lg font-light leading-[1.65]">Another Me isn't just a chatbot. It's a digital extension of your brain, securely deployed in your own private enclave.</p>
            </div>
          </div>

          {/* Asymmetric Bento 2fr 1fr 1fr */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <div className="md:col-span-6 bg-[#F9FAFB] border border-[rgba(226,232,240,0.5)] p-12 rounded-[2.5rem] flex flex-col justify-between h-[450px]">
              <Globe className="w-8 h-8 text-[#18181B] mb-6" />
              <div>
                <h3 className="text-3xl font-serif text-[#18181B] mb-4">Multi-Channel Sync</h3>
                <p className="text-[#71717A] text-base leading-[1.65]">One agent, everywhere. Connect seamlessly to Telegram, WhatsApp, Slack, and your own website.</p>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#F9FAFB] border border-[rgba(226,232,240,0.5)] p-10 rounded-[2.5rem] flex flex-col justify-between h-[450px]">
              <Shield className="w-8 h-8 text-[#3B82F6] mb-6" />
              <div>
                <h3 className="text-2xl font-serif text-[#18181B] mb-4">VPC Deployment</h3>
                <p className="text-[#71717A] text-base leading-[1.65]">Your data never leaves your infrastructure.</p>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#F9FAFB] border border-[rgba(226,232,240,0.5)] p-10 rounded-[2.5rem] flex flex-col justify-between h-[450px]">
              <Code2 className="w-8 h-8 text-[#18181B] mb-6" />
              <div>
                <h3 className="text-2xl font-serif text-[#18181B] mb-4">Skills Market</h3>
                <p className="text-[#71717A] text-base leading-[1.65]">Install APIs, webhooks, and scripts.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Articles & CTA Section */}
      <section className="py-32 px-6 md:px-16 bg-[#FFFFFF] border-y border-[rgba(226,232,240,0.5)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-[#18181B] tracking-tight mb-6 leading-[1.1]">
            Ready to meet yourself?
          </h2>
          <p className="text-lg md:text-xl text-[#71717A] font-light max-w-2xl mx-auto mb-16 leading-[1.65]">
            Read our latest guides on how business leaders are leveraging Another Me to multiply their productivity, or jump straight in and experience it yourself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mb-20 items-stretch">
            <Link href="/articles" className="group block relative overflow-hidden rounded-[2.5rem] bg-[#F9FAFB] border border-[rgba(226,232,240,0.5)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full min-h-[360px]">
              <LightboxImage 
                src="/hubcom/projects/AnotherMe/another_me_article_1.jpg" 
                alt="Guide: Mastering Your Digital Twin"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                containerClassName="w-full h-full absolute inset-0"
              />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3F5F7] font-medium mb-3">User Guide</span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 leading-tight">
                  Mastering Your Digital Twin for Business Productivity
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors font-medium tracking-wide">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="flex flex-col justify-center items-center text-center p-12 rounded-[2.5rem] bg-[#F9FAFB] border border-[rgba(226,232,240,0.5)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden h-full min-h-[360px]">
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BrainCircuit className="w-64 h-64 text-[#18181B]" />
              </div>
              <BrainCircuit className="w-12 h-12 text-[#3B82F6] mb-6 relative z-10" />
              <h3 className="text-2xl md:text-3xl font-serif text-[#18181B] mb-4 relative z-10">
                Experience Another Me
              </h3>
              <p className="text-[#71717A] mb-10 max-w-sm relative z-10 font-light leading-[1.65]">
                Set up your agent, define its memory, and connect it to Telegram in less than 5 minutes.
              </p>
              <Link href="https://app.anotherme.ai" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-[#18181B] text-white rounded-full font-medium hover:scale-[0.98] transition-transform group relative z-10 cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                Try AI Agent Now
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-40 px-6 md:px-16 text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <BrainCircuit className="w-12 h-12 text-[#18181B] mb-10" />
          <h2 className="text-5xl md:text-7xl font-serif text-[#18181B] tracking-tight mb-10">Ready to clone yourself?</h2>
          <p className="text-[#71717A] text-lg mb-16 max-w-xl font-light leading-[1.65]">Join thousands of executives using Another Me to handle communications, research, and scheduling.</p>
          <Link href="https://app.anotherme.ai" target="_blank" className="px-10 py-5 rounded-full bg-[#18181B] text-white text-base font-medium hover:scale-[0.98] transition-transform inline-flex items-center gap-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            Open Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
}
