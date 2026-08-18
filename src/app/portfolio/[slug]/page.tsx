import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight, Store, Zap, Smartphone, LineChart } from "lucide-react";
import { Footer } from "@/components/sections/footer";
import { ServiceHeroGallery } from "@/components/sections/service-hero-gallery";
import { MinhshopPortfolio } from "@/components/sections/minhshop-portfolio";
import { DexspacePortfolio } from "@/components/sections/dexspace-portfolio";
import { AnotherMePortfolio } from "@/components/sections/another-me-portfolio";
import { LightboxImage } from "@/components/ui/lightbox-image";

// In a real app, this would come from a database or CMS.
const serviceData = {
  "fintech": {
    title: "Finova Banking App",
    overview: "Hubcom designs financial technology that prioritizes clarity, speed, and absolute security. We engineer core banking systems, payment gateways, and wealth management dashboards.",
    tags: ["Core Banking", "Payment Processing", "KYC Automation", "PCI-DSS Compliant"],
    featuredProject: "Finova Banking App",
    output: "A modern neobanking experience focused on rapid user onboarding and clear transaction flows.",
    img: "/projects/Fintech.jpg",
    accent: "bg-emerald-500",
    richContent: {
      goal: "Finova aimed to disrupt traditional banking with a digital-first approach. They needed an application that could onboard users in under 3 minutes, provide real-time transaction tracking, and ensure absolute regulatory compliance.",
      coreValues: [
        { title: "Rapid Onboarding", desc: "Automated eKYC processing utilizing AI-driven document verification." },
        { title: "Real-time Ledgers", desc: "Event-driven architecture ensuring instant balance updates." },
        { title: "Absolute Security", desc: "End-to-end encryption and PCI-DSS compliant infrastructure." },
        { title: "Financial Insights", desc: "Machine learning algorithms categorizing user spending habits." }
      ],
      solution: "We developed a highly resilient event-driven microservices architecture using Golang and Kafka. The mobile application, built with Swift and Kotlin, communicates via secure gRPC APIs, delivering a buttery-smooth, native banking experience.",
      solutionImg: "/projects/Fintech.jpg",
      featuresList: [
        "AI-powered eKYC and biometric authentication",
        "Real-time event-driven transaction ledger",
        "Virtual and physical card management controls",
        "Automated spending analytics and categorization",
        "Multi-factor authorization for high-value transfers"
      ],
      successIntro: "We build financial systems that people trust. The Finova platform now securely processes millions in daily transaction volume with zero downtime.",
      successStories: [
        { title: "Finova Neobank", desc: "A sleek, intuitive mobile banking interface that turns complex finance into simple interactions.", img: "/projects/Fintech.jpg" },
        { title: "Merchant Gateway", desc: "A robust B2B payment processing dashboard tailored for high-volume enterprise clients.", img: "/projects/E-commerce-retail-v2.jpg" }
      ],
      gallery: [
        "/projects/Fintech.jpg"
      ]
    }
  },
  "ai-workflows": {
    title: "Another Me AI",
    overview: "Hubcom architects autonomous AI systems that execute complex workflows. We build digital twins and AI agents that handle repetitive tasks, operating 24/7 to scale your enterprise productivity.",
    tags: ["Autonomous Agents", "Workflow Automation", "LLM Integration", "RAG Systems"],
    featuredProject: "Another Me AI",
    output: "An advanced AI operating system that empowers users to clone their workflows and delegate tasks.",
    img: "/projects/another-me-mockup.jpg",
    accent: "bg-[#CCFF00]",
    richContent: {
      goal: "The objective was to create a platform where enterprises could deploy autonomous 'digital twins'. Instead of passive chatbots, the client needed active agents capable of researching, executing code, and managing long-running tasks independently.",
      coreValues: [
        { title: "Autonomous Execution", desc: "Agents that plan, act, and verify their own work without human prompting." },
        { title: "Skill Marketplace", desc: "Plug-and-play capabilities to teach agents new tools and software." },
        { title: "Enterprise RAG", desc: "Secure retrieval-augmented generation ensuring agents only use verified company data." },
        { title: "Command Center", desc: "A unified dashboard to monitor agent activity, energy, and success rates." }
      ],
      solution: "We engineered a robust Agentic framework using Python, LangChain, and state-of-the-art LLMs. The frontend 'Command Center' was built with React, providing real-time WebSocket streams of agent reasoning logs, execution timelines, and resource utilization.",
      solutionImg: "/projects/AI-Workflows/mockup_1782291064362.jpg",
      featuresList: [
        "Multi-agent orchestration for complex parallel workflows",
        "Real-time WebSocket streaming of agent reasoning paths",
        "Secure sandbox environments for AI code execution",
        "Customizable memory vectors for context retention",
        "Enterprise-grade access controls and audit logs"
      ],
      successIntro: "We are moving businesses into the Era of Execution. Our Agentic AI deployments have automated thousands of hours of manual operational work.",
      successStories: [
        { title: "Another Me Command Center", desc: "An intuitive terminal to deploy, monitor, and interact with your fleet of specialized AI agents.", img: "/projects/AI-Workflows/mockup_1782292270791.jpg" },
        { title: "Automated Data Processing", desc: "Agents autonomously extracting, cleaning, and synthesizing data from thousands of daily unstructured reports.", img: "/projects/AI-Workflows/mockup_1782293432062.jpg" }
      ],
      gallery: [
        "/projects/AI-Workflows/mockup_1782291064362.jpg",
        "/projects/AI-Workflows/mockup_1782292270791.jpg",
        "/projects/AI-Workflows/mockup_1782293432062.jpg",
        "/projects/AI-Workflows/mockup_1782294279784.jpg",
        "/projects/AI-Workflows/mockup_1782294355666.jpg"
      ]
    }
  }
};

// Required for `output: export` (static export): enumerate the slugs to prerender.
export function generateStaticParams() {
  return [
    { slug: "fintech" },
    { slug: "ai-workflows" },
    { slug: "blockchain-web3" },
    { slug: "e-commerce-retail" },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Intercept the Minhshop slug to render its completely custom layout
  if (slug === "e-commerce-retail") {
    return (
      <main className="text-[#F3F5F7] selection:bg-[#3B82F6] selection:text-white bg-[#05070B]">
        {/* Navigation for custom page */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
          <Link href="/" className="text-white hover:text-[#3B82F6] transition-colors flex items-center gap-3 group pointer-events-auto">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans uppercase tracking-widest text-xs font-semibold">Back to Hubcom</span>
          </Link>
        </nav>
        
        <MinhshopPortfolio />
        
        <Footer />
      </main>
    );
  }

  // Intercept the DexSpace slug to render its completely custom layout
  if (slug === "blockchain-web3") {
    return (
      <main className="text-foreground selection:bg-primary selection:text-primary-foreground bg-background">
        {/* Navigation for custom page */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
          <Link href="/" className="text-white hover:text-[#3B82F6] transition-colors flex items-center gap-3 group pointer-events-auto">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans uppercase tracking-widest text-xs font-semibold">Back to Hubcom</span>
          </Link>
        </nav>
        
        <DexspacePortfolio />
        
        <Footer />
      </main>
    );
  }

  // Intercept the Another Me slug to render its completely custom layout
  if (slug === "ai-workflows") {
    return (
      <main className="text-foreground selection:bg-primary selection:text-primary-foreground bg-background">
        {/* Navigation for custom page */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
          <Link href="/" className="text-white hover:text-[#3B82F6] transition-colors flex items-center gap-3 group pointer-events-auto">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-sans uppercase tracking-widest text-xs font-semibold">Back to Hubcom</span>
          </Link>
        </nav>
        
        <AnotherMePortfolio />
        
        <Footer />
      </main>
    );
  }

  const data = serviceData[slug as keyof typeof serviceData] as any;

  if (!data) {
    notFound();
  }

  return (
    <main className="text-[#F3F5F7] selection:bg-[#3B82F6] selection:text-white bg-[#05070B]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
        <Link href="/" className="text-white hover:text-[#3B82F6] transition-colors flex items-center gap-3 group pointer-events-auto">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-sans uppercase tracking-widest text-xs font-semibold">Back to Hubcom</span>
        </Link>
      </nav>

      {/* SECTION 1: GSAP HORIZONTAL SCROLL HERO */}
      <ServiceHeroGallery data={data} />

      {/* DYNAMIC RENDERING: Premium Seamless Layout vs Standard Layout */}
      {data.richContent ? (
        
        <div className="landing-page-wrapper">
          
          {/* SECTION 2: VISION / GOAL */}
          <section className="w-full py-24 md:py-40 px-6 md:px-20 relative">
            {/* Centered Border fading on both sides */}
            <div className="absolute top-0 left-6 right-6 md:left-20 md:right-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
              <div className="max-w-4xl flex flex-col items-center text-center">
                <h2 className="text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-8">
                  The Vision
                </h2>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#F3F5F7]/90 tracking-normal text-center">
                  {data.richContent.goal}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: CORE VALUES GRID */}
          <section className="w-full py-24 md:py-40 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-16">
                {data.richContent.coreValues.map((val: any, i: number) => {
                  const icons = [Store, Zap, Smartphone, LineChart];
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={i} className="flex flex-col gap-6 relative group">
                      <div className="absolute top-0 left-0 w-full h-px bg-white/10 group-hover:bg-[#3B82F6] transition-colors duration-500" />
                      <div className="pt-6 text-[#3B82F6] opacity-70 group-hover:opacity-100 transition-opacity">
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight mb-2">{val.title}</h3>
                      <p className="font-sans text-base text-[#A8B3C7] leading-relaxed font-light">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 4: OUR SOLUTION (BREAKOUT LAYOUT) */}
          <section className="w-full bg-[#05070B] relative pt-20 md:pt-40">
            {/* Top Part: 50/50 Split (Title & Image) */}
            <div className="w-full flex flex-col md:flex-row items-center">
              
              {/* Left Side: Title & Paragraph */}
              <div className="w-full md:w-1/2 flex justify-end">
                <div className="w-full max-w-[40rem] px-6 md:pl-20 md:pr-16 lg:pr-24 py-12 md:py-0 flex flex-col">
                   <h2 className="relative text-white/40 uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-8">
                     <span className="absolute right-[calc(100%+1rem)] top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 hidden md:block" /> 
                     Our Solution
                   </h2>
                   <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#F3F5F7]/90">
                     {data.richContent.solution}
                   </p>
                </div>
              </div>

              {/* Right Side: Image (Natural Aspect Ratio, Full Bleed) */}
              <div className="w-full md:w-1/2 relative group overflow-hidden">
                 {(data.richContent as any).solutionImg ? (
                   <LightboxImage src={(data.richContent as any).solutionImg} alt="Solution UI" className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-1000" containerClassName="w-full h-full" />
                 ) : (
                   <div className="w-full aspect-[4/3] bg-white/5 flex items-center justify-center text-white/20">
                     Platform UI
                   </div>
                 )}
                 <div className="absolute inset-0 bg-[#05070B]/20 group-hover:bg-[#05070B]/0 transition-colors duration-700 pointer-events-none" />
              </div>
            </div>

            {/* Bottom Part: Features Grid */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-20 pb-20 md:pb-32 pt-16 md:pt-24">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/10 pt-16 md:pt-24">
                 {data.richContent.featuresList.map((feat: string, i: number) => (
                   <div key={i} className="flex flex-col gap-4">
                     <span className="text-[#3B82F6] text-sm font-mono opacity-80">0{i+1}</span>
                     <span className="text-lg md:text-xl text-white/90 font-light leading-relaxed">{feat}</span>
                   </div>
                 ))}
               </div>
            </div>
          </section>





        </div>

      ) : (

        /* STANDARD LAYOUT: For services without richContent yet */
        <section className="w-full bg-[#05070B] px-6 md:px-20 py-24 md:py-40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            <div className="md:col-span-7">
              <h2 className="text-[#3B82F6] uppercase tracking-widest text-xs font-bold mb-6">Overview</h2>
              <p className="font-sans text-xl md:text-3xl leading-relaxed text-[#F3F5F7]/90 font-light">
                {data.overview}
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-12">
              <div>
                <h2 className="text-[#3B82F6] uppercase tracking-widest text-xs font-bold mb-6">Core Capabilities</h2>
                <ul className="flex flex-col gap-4">
                  {data.tags.map((tag: string, i: number) => (
                    <li key={i} className="text-lg text-[#A8B3C7] border-b border-white/10 pb-4">{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="border-l border-[#3B82F6] pl-6 py-2">
                <h2 className="text-[#3B82F6] uppercase tracking-widest text-xs font-bold mb-4">Featured Work</h2>
                <div className="font-serif text-2xl md:text-3xl mb-2">{data.featuredProject}</div>
                <p className="text-sm text-[#A8B3C7] leading-relaxed">{data.output}</p>
              </div>
            </div>
          </div>
        </section>

      )}

      {/* SECTION 7: FINAL CTA BANNER (IMPRESSIVE REDESIGN) */}
      <section className="w-full relative px-6 md:px-20 py-40 md:py-64 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        {/* Glow & Background Effects */}
        <div className="absolute inset-0 bg-[#05070B] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#3B82F6]/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="font-mono text-sm md:text-base text-[#3B82F6] tracking-[0.3em] uppercase font-bold mb-8 md:mb-12">
            Initiate System
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-10 tracking-tighter text-[#F3F5F7] leading-[1.1]">
            Ready to build your next <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">breakthrough?</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#A8B3C7] max-w-2xl mb-16 font-light leading-relaxed">
            Partner with Hubcom to engineer digital products that dominate markets and define the future.
          </p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-white text-black rounded-full font-mono text-sm uppercase tracking-widest font-bold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(59,130,246,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-4 transition-colors duration-500 group-hover:text-white">
              START A PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#3B82F6] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
