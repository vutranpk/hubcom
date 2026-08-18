import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { ProcessPrism } from "@/components/sections/process-prism";
import { Partners } from "@/components/sections/partners";
import { Impact } from "@/components/sections/impact";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Preloader } from "@/components/ui/preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <SmoothScrollProvider>
      <main className="min-h-screen">
        <div id="index">
          <Hero />
        </div>
        
        {/* Sections after hero sliding over */}
        <div className="relative z-10">
          {/* Gradient spans the entire work section */}
          <div id="work" className="bg-gradient-to-b from-black/0 to-card rounded-t-[40px] pt-10">
            <Projects />
          </div>

          {/* Process Section */}
          <div id="process">
            <ProcessPrism />
          </div>

          <Partners />
          
          <Impact />
          
          <Contact />
        </div>
      </main>

      <div className="relative z-10 bg-background">
        <Footer />
      </div>
    </SmoothScrollProvider>
    </>
  );
}
