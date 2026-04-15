import NewsCardSquare from "@/components/ui/NewsCardSquare";
import FilterPill from "@/components/ui/FilterPill";
import SearchBar from "@/components/ui/SearchBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

// MOCK DATA for the grid
const HEADLINES = [
  "VN-Index vượt mốc 1.300 điểm với thanh khoản bùng nổ",
  "Căng thẳng leo thang tại Trung Đông, giá dầu biến động mạnh",
  "Apple công bố chip M4 mới với hiệu năng AI vượt trội",
  "Những thói quen buổi sáng giúp tăng tuổi thọ hiệu quả",
  "Xu hướng 'du lịch chữa lành' lên ngôi trong năm 2024",
  "Nâng cao kỹ năng số cho học sinh: Thách thức và cơ hội",
  "Đội tuyển Việt Nam chuẩn bị cho vòng loại World Cup 2026",
  "Giá vàng trong nước quay đầu giảm mạnh sau chuỗi ngày tăng",
  "VinFast chính thức bàn giao xe điện VF3 tại Việt Nam",
  "Phát hiện loài sinh vật mới tại vùng biển sâu Nam Cực",
  "Hải Phòng: Khởi công dự án khu đô thị mới nghìn tỷ đồng",
  "Lịch thi đấu Euro 2024: Những cuộc đối đầu nảy lửa",
];

const getTitle = (i: number) => HEADLINES[i % HEADLINES.length];
const getImage = (i: number) => i % 2 === 0 ? "/images/dacnhantam.avif" : "/images/kyluatbanthan.avif";

export default function FreeContentPage() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 py-6">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600"></div>
              <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">NỘI DUNG MIỄN PHÍ</h1>
            </div>
          </div>

          <div className="w-full md:w-auto flex-grow max-w-md">
            <SearchBar placeholder="Tìm kiếm nội dung miễn phí" />
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {Array.from({ length: 15 }).map((_, i) => (
            <NewsCardSquare key={i} title={getTitle(i + 5)} imageUrl={getImage(i + 3)} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-2 pb-12">
          <button className="p-2 text-slate-400 hover:text-slate-800">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-blue-700 text-white font-bold text-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">3</button>
          
          <button className="p-2 text-slate-400 hover:text-slate-800">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </main>
    </div>
  );
}
