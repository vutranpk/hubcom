import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { Footer } from "@/components/sections/footer";
import { Users, Lightbulb, RefreshCw, CheckCircle, ShieldCheck, Zap, Globe, MessageCircle } from "lucide-react";

export default function InfoPage() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#07101A] pt-[20vh] pb-32 overflow-hidden">
        
        {/* HERO: CON NGƯỜI */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32 relative z-10">
          <div className="font-mono text-sm text-[#3B82F6] mb-6 tracking-[4px] uppercase">// ABOUT HUBCOM</div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-12 tracking-tight">
            Con Người & <br className="md:hidden"/> <span className="text-[#3B82F6] italic pr-2">Tầm Nhìn.</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl leading-[1.8] text-[#E2E8F0] opacity-90 max-w-4xl">
            HubCom.tech hiện có hơn 35 nhân viên làm việc toàn thời gian tại Việt Nam và Hoa Kỳ, bao gồm đội ngũ kỹ sư phần mềm, chuyên gia AI, nhà thiết kế UI/UX và chuyên viên vận hành. Mỗi thành viên đều được đào tạo chuyên sâu trong lĩnh vực của mình, với kinh nghiệm trung bình trên 5 năm trong ngành công nghệ.
          </p>
        </section>

        {/* VĂN HÓA LÀM VIỆC */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Văn Hóa Làm Việc</h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mb-16 leading-relaxed">
            HubCom.tech là tập thể kỹ sư, nhà thiết kế và chuyên gia công nghệ đam mê – với văn hóa làm việc đặt con người làm trung tâm, nơi công nghệ và sáng tạo giao thoa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors group">
              <Users className="w-10 h-10 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl text-white font-medium mb-3">Hợp tác đội nhóm</h3>
              <p className="text-[#A8B3C7] leading-relaxed">Làm việc nhóm hiệu quả, hỗ trợ chéo giữa các bộ phận để đạt mục tiêu chung.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors group">
              <MessageCircle className="w-10 h-10 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl text-white font-medium mb-3">Phản hồi liên tục</h3>
              <p className="text-[#A8B3C7] leading-relaxed">Lắng nghe – chia sẻ – tối ưu qua từng dự án để hoàn thiện sản phẩm.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors group">
              <RefreshCw className="w-10 h-10 text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl text-white font-medium mb-3">Cải tiến không ngừng</h3>
              <p className="text-[#A8B3C7] leading-relaxed">Luôn học hỏi, trau dồi và cập nhật những công nghệ mới nhất trên thế giới.</p>
            </div>
          </div>
        </section>

        {/* ĐỘI NGŨ LÃNH ĐẠO */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16">Đội Ngũ Lãnh Đạo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "MINH DOAN", role: "CFO", desc: "Quản lý tài chính, hoạch định ngân sách và tối ưu chi phí dự án." },
              { name: "DUY TRAN", role: "COO", desc: "Quản lý vận hành, tối ưu quy trình làm việc và hiệu suất đội ngũ." },
              { name: "KHOI DOAN", role: "CTO", desc: "Chuyên gia Blockchain, AI Agent & Cloud; định hướng chiến lược công nghệ." },
              { name: "QUYNH HUYNH", role: "Project Manager", desc: "Giám sát tiến độ, điều phối nhóm và đảm bảo chất lượng dự án." },
              { name: "VU TRAN", role: "Creative Director", desc: "Đảm bảo tính nhất quán thương hiệu và trải nghiệm người dùng toàn diện." }
            ].map((leader, i) => (
              <div key={i} className="flex flex-col p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group hover:border-[#3B82F6]/50 transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <span className="text-8xl font-serif text-white font-bold leading-none">0{i+1}</span>
                </div>
                <h3 className="text-2xl text-white font-bold tracking-wide mb-1 relative z-10">{leader.name}</h3>
                <p className="text-sm font-mono text-[#3B82F6] mb-4 uppercase tracking-wider relative z-10">{leader.role}</p>
                <p className="text-[#A8B3C7] leading-relaxed relative z-10">{leader.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ƯU THẾ CẠNH TRANH */}
        <section className="max-w-7xl mx-auto px-6 md:px-20 mb-32 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ưu Thế Cạnh Tranh</h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mb-16 leading-relaxed">
            Chúng tôi không chỉ phát triển sản phẩm – chúng tôi đồng hành để kiến tạo giá trị thực.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[#0A1320] border border-white/5 hover:bg-[#0C1727] transition-colors">
              <Zap className="w-10 h-10 text-[#3B82F6] shrink-0" />
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Chuyên môn sâu</h3>
                <p className="text-[#A8B3C7] leading-relaxed">Đội ngũ in-house chuyên AI, Blockchain, Cloud và hệ thống SaaS phức tạp.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[#0A1320] border border-white/5 hover:bg-[#0C1727] transition-colors">
              <RefreshCw className="w-10 h-10 text-[#3B82F6] shrink-0" />
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Quy trình linh hoạt</h3>
                <p className="text-[#A8B3C7] leading-relaxed">Triển khai Agile, đảm bảo tốc độ, minh bạch và hiệu quả xuyên suốt dự án.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[#0A1320] border border-white/5 hover:bg-[#0C1727] transition-colors">
              <ShieldCheck className="w-10 h-10 text-[#3B82F6] shrink-0" />
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Bảo mật & tin cậy</h3>
                <p className="text-[#A8B3C7] leading-relaxed">Hệ thống vận hành an toàn, tuân thủ chuẩn bảo mật và sẵn sàng dài hạn.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[#0A1320] border border-white/5 hover:bg-[#0C1727] transition-colors">
              <Globe className="w-10 h-10 text-[#3B82F6] shrink-0" />
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Hỗ trợ toàn diện</h3>
                <p className="text-[#A8B3C7] leading-relaxed">Đồng hành từ khâu lên ý tưởng, phát triển, đến bảo trì và mở rộng lâu dài.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CAM KẾT */}
        <section className="max-w-5xl mx-auto px-6 md:px-20 relative z-10 text-center">
          <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-tr from-[#3B82F6]/20 via-[#0A1320] to-[#07101A] border border-[#3B82F6]/30 shadow-[0_0_80px_rgba(59,130,246,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] blur-[150px] rounded-full opacity-20 mix-blend-screen pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 relative z-10">Cam Kết Của Chúng Tôi</h2>
            <p className="text-xl md:text-2xl leading-[1.8] text-[#E2E8F0] font-light max-w-3xl mx-auto relative z-10">
              "HubCom.tech cam kết trở thành đối tác công nghệ đáng tin cậy, giúp doanh nghiệp tối ưu chi phí, nâng cao hiệu quả và tạo ra giải pháp công nghệ mang giá trị khác biệt."
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
