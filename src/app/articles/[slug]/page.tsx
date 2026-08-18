import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Required for `output: export` (static export): enumerate the slugs to prerender.
export function generateStaticParams() {
  return [
    { slug: "the-future-of-agentic-ai" },
  ];
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for the article based on the slug
  // In a real app, you would fetch this from a CMS or database using params.slug
  const article = {
    title: "The Future of Agentic AI in Enterprise Workflows",
    category: "AI & Automation",
    date: "Jun 24, 2026",
    author: "Hubcom Research",
    readTime: "8 min read",
    coverImg: "/hubcom/projects/another-me-mockup.jpg",
  };

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-[15vh] pb-32">
        
        {/* Top Navigation Bar */}
        <div className="max-w-[1400px] mx-auto px-[5vw] mb-12">
          <Link 
            href="/articles" 
            className="inline-flex items-center gap-3 text-[#A8B3C7] hover:text-[#F3F5F7] transition-colors group"
          >
            <span className="p-2 rounded-full border border-white/10 group-hover:bg-white/5 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </span>
            <span className="font-sans text-sm uppercase tracking-wider font-semibold">Back to Articles</span>
          </Link>
        </div>

        <article className="max-w-[1400px] mx-auto">
          {/* Article Header */}
          <header className="px-[5vw] mb-16 md:mb-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
                <span className="font-mono text-xs text-[#A8B3C7]">
                  {article.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="font-mono text-xs text-[#A8B3C7]">
                  {article.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#F3F5F7] leading-tight mb-8">
                {article.title}
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center border border-white/10">
                  <span className="font-serif font-bold text-white">H</span>
                </div>
                <div>
                  <div className="font-sans text-sm text-[#F3F5F7] font-semibold">{article.author}</div>
                  <div className="font-sans text-xs text-[#A8B3C7]">Engineering & Design</div>
                </div>
              </div>
            </div>
          </header>

          {/* Full Width Cover Image */}
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#0B1221] mb-16 md:mb-24 relative">
            <img 
              src={article.coverImg} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101A] to-transparent opacity-50" />
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto px-[5vw] md:px-0">
            <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-[#A8B3C7]">
              <p className="text-xl md:text-2xl text-[#F3F5F7] font-serif leading-relaxed mb-10">
                How autonomous digital twins are moving beyond simple chatbots to execute complex, multi-step tasks across integrated enterprise systems. The era of agentic workflows is here.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-serif text-[#F3F5F7] mt-12 mb-6">The Evolution of Digital Assistants</h3>
              <p className="mb-6 leading-relaxed">
                For the past decade, enterprise AI has largely been confined to analytical models and conversational chatbots. While useful for answering queries or identifying patterns, these systems inherently require human intervention to act upon the information they provide.
              </p>
              <p className="mb-8 leading-relaxed">
                Enter Agentic AI. Unlike traditional models that wait for prompts, agentic systems are designed with autonomy in mind. They can reason, plan, and execute sequences of actions across multiple software platforms to achieve a high-level goal.
              </p>

              <blockquote className="border-l-4 border-[#3B82F6] pl-6 my-12 py-2 italic text-2xl font-serif text-[#F3F5F7]">
                "We are no longer building software that people use; we are building software that works alongside people."
              </blockquote>

              <h3 className="text-2xl md:text-3xl font-serif text-[#F3F5F7] mt-12 mb-6">Architecture of an Autonomous Agent</h3>
              <p className="mb-6 leading-relaxed">
                Building an agentic system requires a fundamental shift in architecture. At Hubcom, our approach centers on a tri-layered structure:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-4">
                <li><strong className="text-[#F3F5F7]">Cognitive Layer:</strong> Powered by advanced LLMs, responsible for interpreting goals and planning steps.</li>
                <li><strong className="text-[#F3F5F7]">Execution Layer:</strong> A secure sandbox where the agent interacts with APIs, databases, and third-party tools.</li>
                <li><strong className="text-[#F3F5F7]">Verification Layer:</strong> An independent constraint-checking system that ensures the agent's actions remain within business parameters.</li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-serif text-[#F3F5F7] mt-12 mb-6">What's Next?</h3>
              <p className="mb-6 leading-relaxed">
                As these systems mature, the definition of a digital product will evolve. User interfaces will become less about giving commands and more about setting goals and reviewing outcomes.
              </p>
            </div>
            
            {/* Share / Footer of article */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="font-mono text-sm uppercase tracking-widest text-[#94A3B8]">
                Share this article
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black transition-colors">Twitter</button>
                <button className="px-6 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black transition-colors">LinkedIn</button>
                <button className="px-6 py-2 rounded-full border border-white/10 text-sm hover:bg-white hover:text-black transition-colors">Copy Link</button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
