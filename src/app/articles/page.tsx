import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const articles = [
  {
    title: "The Future of Agentic AI in Enterprise Workflows",
    category: "AI & Automation",
    date: "Jun 24, 2026",
    readTime: "8 min read",
    excerpt: "How autonomous digital twins are moving beyond chatbots to execute complex, multi-step tasks across integrated enterprise systems.",
    img: "/projects/another-me-mockup.jpg",
  },
  {
    title: "Designing for Trust in Fintech Platforms",
    category: "Product Design",
    date: "May 12, 2026",
    readTime: "6 min read",
    excerpt: "Trust is the currency of fintech. Explore the psychological and UX principles necessary to build absolute confidence in digital banking.",
    img: "/projects/Fintech.jpg",
  },
  {
    title: "Scaling Omnichannel Retail with Next.js",
    category: "Engineering",
    date: "Apr 05, 2026",
    readTime: "12 min read",
    excerpt: "A deep dive into the architecture that handles millions of SKUs and unified loyalty systems across physical and digital storefronts.",
    img: "/projects/E-commerce-retail-v2.jpg",
  },
  {
    title: "Security Auditing in Web3 Infrastructure",
    category: "Blockchain",
    date: "Mar 18, 2026",
    readTime: "9 min read",
    excerpt: "Lessons learned from deploying high-value smart contracts and securing decentralized wallet architectures against modern vectors.",
    img: "/projects/Dexspace/dexspace_hero_mockup.jpg",
  }
];

export default function ArticlesPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-28 md:pt-[20vh] px-[5vw] pb-16 md:pb-32">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 relative">
          
          {/* LEFT: Sticky Sidebar */}
          <aside className="w-full lg:w-[320px] xl:w-[380px] shrink-0">
            <div className="lg:sticky lg:top-[20vh]">
              <div className="font-mono text-[10px] md:text-sm text-[#94A3B8] mb-2 md:mb-6 tracking-[4px] uppercase">// Knowledge Base</div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#F3F5F7] mb-6 md:mb-8">
                Insights.
              </h1>
              
              {/* Search Bar */}
              <div className="relative mb-6 md:mb-12">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-[#94A3B8]" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full bg-[#0B1221] border border-white/10 rounded-full py-3 md:py-4 pl-10 md:pl-14 pr-4 md:pr-6 text-sm md:text-base text-white placeholder:text-[#94A3B8] focus:border-[#3B82F6] outline-none transition-colors shadow-inner"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-[#94A3B8] mb-4">Categories</div>
                <div className="flex flex-row md:flex-col overflow-x-auto hide-scrollbar gap-2 md:gap-2 pb-2 md:pb-0 -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
                  <button className="shrink-0 text-left py-2 px-4 md:py-4 md:px-6 rounded-full md:rounded-2xl bg-[#3B82F6] text-white text-xs md:text-base font-medium font-sans shadow-[0_0_30px_rgba(59,130,246,0.2)]">All Topics</button>
                  <button className="shrink-0 text-left py-2 px-4 md:py-4 md:px-6 rounded-full md:rounded-2xl bg-white/5 md:bg-transparent text-[#A8B3C7] text-xs md:text-base hover:bg-white/10 md:hover:bg-white/5 hover:text-white transition-colors font-medium font-sans">AI & Automation</button>
                  <button className="shrink-0 text-left py-2 px-4 md:py-4 md:px-6 rounded-full md:rounded-2xl bg-white/5 md:bg-transparent text-[#A8B3C7] text-xs md:text-base hover:bg-white/10 md:hover:bg-white/5 hover:text-white transition-colors font-medium font-sans">Product Design</button>
                  <button className="shrink-0 text-left py-2 px-4 md:py-4 md:px-6 rounded-full md:rounded-2xl bg-white/5 md:bg-transparent text-[#A8B3C7] text-xs md:text-base hover:bg-white/10 md:hover:bg-white/5 hover:text-white transition-colors font-medium font-sans">Engineering</button>
                  <button className="shrink-0 text-left py-2 px-4 md:py-4 md:px-6 rounded-full md:rounded-2xl bg-white/5 md:bg-transparent text-[#A8B3C7] text-xs md:text-base hover:bg-white/10 md:hover:bg-white/5 hover:text-white transition-colors font-medium font-sans">Blockchain</button>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: Scrolling Content */}
          <div className="flex-1 flex flex-col gap-10 md:gap-24 mt-2 md:mt-0">
            {articles.map((article, idx) => (
              <Link key={idx} href="/articles/the-future-of-agentic-ai" className="group flex flex-col md:flex-row md:items-start md:gap-16">
                
                <div className="w-full flex flex-col">
                  {/* Massive Image Container */}
                  <div className="relative w-full aspect-[2/1] md:aspect-[16/9] xl:aspect-[21/9] rounded-xl md:rounded-[32px] overflow-hidden bg-[#0B1221] border border-white/5 mb-4 md:mb-10">
                    <img 
                      src={article.img} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101A] via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-3 left-3 md:top-8 md:left-8">
                      <span className="font-mono text-[8px] md:text-xs uppercase tracking-widest text-black font-bold bg-white px-2.5 py-1 md:px-4 md:py-2 rounded-full shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Meta & Title */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-16">
                    <div className="flex-1">
                      <div className="font-mono text-[10px] md:text-sm text-[#A8B3C7] mb-2 md:mb-5 flex items-center gap-2 md:gap-4">
                        <span>{article.date}</span>
                        <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#3B82F6]" />
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F3F5F7] mb-2 md:mb-6 group-hover:text-[#3B82F6] transition-colors leading-[1.2] md:leading-[1.1]">
                        {article.title}
                      </h2>
                      <p className="text-sm md:text-xl text-[#A8B3C7] line-clamp-2 md:line-clamp-none max-w-3xl leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    {/* Call to Action Button */}
                    <div className="hidden md:flex w-20 h-20 shrink-0 rounded-full border border-white/10 items-center justify-center text-white bg-white/5 group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-all duration-300 group-hover:-rotate-45 shadow-xl">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
