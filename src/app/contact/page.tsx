import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-[10vh]">
        <Contact showMap={true} />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
