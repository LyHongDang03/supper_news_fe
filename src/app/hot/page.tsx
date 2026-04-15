import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import NewsCardSquare from "@/components/ui/NewsCardSquare";
import FilterPill from "@/components/ui/FilterPill";
import FreeContentSection from "@/components/sections/FreeContentSection";
import SearchBar from "@/components/ui/SearchBar";

// MOCK DATA
const HEADLINES = [
  "VinFast chính thức bàn giao xe điện VF3 tại Việt Nam",
  "Phát hiện loài sinh vật mới tại vùng biển sâu Nam Cực",
  "Hải Phòng: Khởi công dự án khu đô thị mới nghìn tỷ đồng",
  "Lịch thi đấu Euro 2024: Những cuộc đối đầu nảy lửa",
  "Thủ tướng yêu cầu đẩy nhanh tiến độ giải ngân vốn đầu tư công",
  "Startup Việt gọi vốn thành công 10 triệu USD vòng Series A",
  "NASA phát hiện hành tinh có khả năng duy trì sự sống",
  "VN-Index vượt mốc 1.300 điểm với thanh khoản bùng nổ",
  "Căng thẳng leo thang tại Trung Đông, giá dầu biến động mạnh",
  "Apple công bố chip M4 mới với hiệu năng AI vượt trội",
  "Những thói quen buổi sáng giúp tăng tuổi thọ hiệu quả",
  "Xu hướng 'du lịch chữa lành' lên ngôi trong năm 2024",
];

const getTitle = (i: number) => HEADLINES[i % HEADLINES.length];
const getImage = (i: number) => i % 2 === 0 ? "/images/dacnhantam.avif" : "/images/kyluatbanthan.avif";

export default function HotPage() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 py-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600"></div>
              <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">HOT</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <FilterPill label="Video" isActive />
              <FilterPill label="Tin ảnh" />
              <FilterPill label="Short" />
            </div>
          </div>

          <div className="w-full md:w-auto flex-grow max-w-md">
            <SearchBar placeholder="Tìm kiếm tin HOT" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <NewsCardSquare key={i} title={getTitle(i)} imageUrl={getImage(i)} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 pb-12">
          <button className="p-2 text-slate-400 hover:text-slate-800">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-blue-700 text-white font-bold text-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">2</button>
          <button className="p-2 text-slate-400 hover:text-slate-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <FreeContentSection items={Array.from({ length: 12 }).map((_, i) => ({
          title: getTitle(i + 20),
          imageUrl: getImage(i + 5),
        }))} />

      </main>
    </div>
  );
}
