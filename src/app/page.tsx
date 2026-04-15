import { Search, X, Image as ImageIcon, Activity, HeartPulse, GraduationCap, Globe, Cpu } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";
import NewsCardSquare from "@/components/ui/NewsCardSquare";
import NewsCardHorizontal from "@/components/ui/NewsCardHorizontal";
import NewsCardFeatured from "@/components/ui/NewsCardFeatured";
import FilterPill from "@/components/ui/FilterPill";
import Tag from "@/components/ui/Tag";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollableNewsSection from "@/components/sections/ScrollableNewsSection";

// MOCK DATA
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
  "Thủ tướng yêu cầu đẩy nhanh tiến độ giải ngân vốn đầu tư công",
  "Startup Việt gọi vốn thành công 10 triệu USD vòng Series A",
  "NASA phát hiện hành tinh có khả năng duy trì sự sống"
];

const getTitle = (i: number) => HEADLINES[i % HEADLINES.length];
const getImage = (i: number) => i % 2 === 0 ? "/images/dacnhantam.avif" : "/images/kyluatbanthan.avif";
const SHORT_DESC = "Bản tin cập nhật những diễn biến mới nhất về tình hình kinh tế, chính trị và xã hội trong nước và quốc tế...";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 py-8">

        {/* L1: HERO SECTION */}
        <section className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left Hero */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-4xl md:text-[2.75rem] font-black text-slate-900 tracking-tight leading-none mb-4 uppercase">
                Khám Phá Thế Giới
              </h1>
              {/* Colorful Circular INFOGRAPHIC mockup */}
              <div className="flex flex-wrap gap-1 md:gap-2 text-xl font-black text-white">
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center">I</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-400 flex items-center justify-center">N</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-500 flex items-center justify-center">F</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500 flex items-center justify-center">O</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center">G</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 flex items-center justify-center">R</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-500 flex items-center justify-center">A</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center">P</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-400 flex items-center justify-center">H</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-600 flex items-center justify-center">I</span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-700 flex items-center justify-center">C</span>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-3 mt-4">
              <FilterPill label="Video" isActive />
              <FilterPill label="Tin ảnh" />
              <FilterPill label="Short" />
            </div>

            {/* Search Input */}
            <div className="mt-2">
              <SearchBar />
            </div>

            {/* Tags */}
            <div className="flex gap-2flex-wrap mt-2">
              <Tag label="Hà Nội" />
              <Tag label="Thời sự" />
              <Tag label="Xã hội" />
              <Tag label="Giao thông" />
              <Tag label="Đời sống" />
              <Tag label="Kinh tế" />
              <Tag label="Bất động sản" />
              <Tag label="Du lịch" />
            </div>
          </div>

          {/* Right Hero Image (Illustration) */}
          <div className="flex-1 bg-slate-200 rounded-sm overflow-hidden relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <ImageIcon className="w-20 h-20 text-slate-400 opacity-20" />
          </div>
        </section>

        {/* L2: TOP SECTION */}
        <ScrollableNewsSection
          title="TOP"
          href="/top"
          items={Array.from({ length: 12 }).map((_, i) => ({
            title: getTitle(i),
            imageUrl: getImage(i),
          }))}
        />

        {/* L3: HOT SECTION */}
        <ScrollableNewsSection
          title="HOT"
          href="/hot"
          className="mb-16"
          items={Array.from({ length: 12 }).map((_, i) => ({
            title: getTitle(i + 5),
            imageUrl: getImage(i + 1),
          }))}
        />

        {/* L4: TẤT CẢ SECTION */}
        <section className="mb-16 bg-slate-50/50 -mx-4 px-4 py-8 border-t border-slate-100">
          <div className="max-w-[1440px] mx-auto">
            <SectionHeader title="TẤT CẢ" showControls={false} href="/all" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {Array.from({ length: 15 }).map((_, i) => (
                <NewsCardSquare key={i} title={getTitle(i + 10)} imageUrl={getImage(i)} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button className="bg-[#cc444b] hover:bg-[#b03038] text-white px-8 py-3 rounded-sm font-bold shadow transition-colors flex items-center gap-2">
                Đăng nhập để tiếp tục <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* L5: NỘI DUNG MIỄN PHÍ */}
        <section className="mb-12">
          <SectionHeader title="NỘI DUNG MIỄN PHÍ" href="/freecontent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Featured Left */}
            <div className="lg:col-span-2">
              <NewsCardFeatured
                title={getTitle(0)}
                imageUrl={"/images/kyluatbanthan.avif"}
                views="2 N"
                time="1 ngày trước"
              />
            </div>
            {/* List Right */}
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((_, i) => (
                <NewsCardHorizontal
                  key={i}
                  title={getTitle(i + 2)}
                  description={SHORT_DESC}
                  imageUrl={getImage(i + 1)}
                />
              ))}
            </div>
          </div>

          {/* Categories Row */}
          <div className="mb-6 flex items-center justify-between gap-4 overflow-x-auto border-y border-slate-100 py-3 no-scrollbar">
            <div className="flex flex-wrap items-center gap-3">
              <FilterPill label="Chuyển động" icon={<Activity />} isActive />
              <FilterPill label="Sức khoẻ - Y tế" icon={<HeartPulse />} />
              <FilterPill label="Giáo dục kỹ năng" icon={<GraduationCap />} />
              <FilterPill label="Đời sống" icon={<Globe />} />
              <FilterPill label="Công nghệ" icon={<Cpu />} />
            </div>
            <button className="px-3 py-1.5 border border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1 rounded-sm whitespace-nowrap hidden md:flex">
              Xem tất cả <span>&gt;</span>
            </button>
          </div>

          <ScrollableNewsSection
            title=""
            href="/freecontent"
            items={Array.from({ length: 12 }).map((_, i) => ({
              title: getTitle(i + 7),
              imageUrl: getImage(i),
            }))}
          />

        </section>
      </main>
    </div>
  );
}

// Temporary ChevronRight since it's not imported at the top for the "Đăng nhập để tiếp tục" button
import { ChevronRight } from "lucide-react";
