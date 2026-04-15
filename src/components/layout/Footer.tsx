import Link from "next/link";
import { Phone, PhoneCall, Printer, Send, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c2b5e] text-white pt-12 pb-6 mt-16 text-sm">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">

        {/* Column 1: QR App */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg">Download App</h3>
          <div className="bg-white p-2 w-32 h-32 rounded flex items-center justify-center">
            {/* QR Code Placeholder */}
            <div className="w-full h-full bg-slate-200 border-4 border-black/10 flex items-center justify-center text-xs text-black/40 text-center font-bold">QR CODE</div>
          </div>
        </div>

        {/* Column 2: Center Info */}
        <div className="col-span-1 md:col-span-2 flex flex-col space-y-4">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-white italic tracking-tighter">
              Super<span className="text-sky-400">News</span>
            </h1>
          </div>
          <div className="text-white/80 leading-relaxed font-medium">
            <p>Cơ quan quản lý: Tập đoàn Bưu chính Viễn thông Việt Nam</p>
            <p>Địa chỉ: Số 57 Phố Huỳnh Thúc Kháng, Phường Láng, Thành phố Hà Nội</p>
            <p>Chịu trách nhiệm quản lý nội dung: Ông Vũ Trường Giang – TGĐ VNPT Media</p>
            <p>Giấy phép trang tin điện tử số: 822/GP-TTĐT do Sở TT-TT Hà Nội cấp ngày 02/03/2017</p>
          </div>
        </div>

        {/* Column 3: Contact & Links */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Liên hệ</h3>
            <div className="w-8 h-0.5 bg-red-600 mb-4"></div>
            <ul className="space-y-3 text-white/80 font-medium">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> 024 37722728</li>
              <li className="flex items-center gap-3"><PhoneCall className="w-4 h-4" /> 18001091</li>
              <li className="flex items-center gap-3"><Printer className="w-4 h-4" /> 024.3772.2733</li>
              <li className="flex items-center gap-3"><Send className="w-4 h-4" /> Vnptmedia@vnpt.vn</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Chuyên mục</h3>
            <div className="w-8 h-0.5 bg-red-600 mb-4"></div>
            <ul className="space-y-3 text-white/80 font-medium">
              <li><Link href="/chuyen-dong" className="hover:text-white transition-colors">Chuyển động</Link></li>
              <li><Link href="/giao-duc" className="hover:text-white transition-colors">Giáo dục kỹ năng</Link></li>
              <li><Link href="/suc-khoe" className="hover:text-white transition-colors">Sức Khỏe - Y Tế</Link></li>
              <li><Link href="/doi-song" className="hover:text-white transition-colors">Đời Sống</Link></li>
              <li><Link href="/cong-nghe" className="hover:text-white transition-colors">Công Nghệ</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1440px] mx-auto px-4 pt-6 flex flex-col md:flex-row items-center gap-4 text-white/60 font-medium text-xs">
        <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1.5 rounded text-blue-200">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
          <span className="font-bold">ĐÃ THÔNG BÁO<br /><span className="text-[10px] leading-tight block">BỘ CÔNG THƯƠNG</span></span>
        </div>
        <p className="md:ml-8">© 2017 VNPT-Media. Bản quyền thuộc Tổng công ty Truyền thông VNPT-Media</p>
      </div>
    </footer>
  );
}
