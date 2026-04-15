import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsCardSquare from "@/components/ui/NewsCardSquare";
import FilterPill from "@/components/ui/FilterPill";
import SearchBar from "@/components/ui/SearchBar";

// MOCK DATA
const STARBOOM_HEADLINES = [
  "Dàn sao Việt lộng lẫy trên thảm đỏ lễ trao giải điện ảnh lớn nhất năm",
  "Hé lộ hậu trường buổi tập luyện của nhóm nhạc K-pop trước thềm concert",
  "Độc quyền: Phỏng vấn ngôi sao hạng A về dự án phim bom tấn sắp ra mắt",
  "Những xu hướng thời trang được các nghệ sĩ lăng xê nhiệt tình nhất hiện nay",
  "Cặp đôi vàng của showbiz chính thức công khai chuyện tình cảm sau thời gian bí mật",
  "Bí mật đằng sau vẻ ngoài hoàn hảo của các mỹ nhân hàng đầu giới giải trí",
  "Hành trình từ thực tập sinh đến ngôi sao toàn cầu: Những góc khuất ít người biết",
  "Nhạc sĩ trẻ tài năng liên tiếp đứng đầu các bảng xếp hạng âm nhạc trực tuyến",
  "Show truyền hình thực tế mới thu hút sự quan tâm của hàng triệu khán giả",
  "Dàn cast 'cực phẩm' quy tụ trong dự án phim truyền hình mới của đài quốc gia",
  "Nghệ sĩ Việt ghi dấu ấn mạnh mẽ tại các tuần lễ thời trang quốc tế",
  "Những scandal chấn động giới giải trí và cách các ngôi sao vượt qua khủng hoảng",
  "Phong cách sống của các Influencer thế hệ mới có gì đặc biệt?",
  "Phía sau ánh hào quang: Nỗ lực không ngừng nghỉ của những người làm nghệ thuật",
  "Sự trở lại đầy ngoạn mục của nữ hoàng nhạc Pop sau nhiều năm vắng bóng",
  "Gặp gỡ những gương mặt triển vọng hứa hẹn bùng nổ trong năm tới",
  "Tầm ảnh hưởng của mạng xã hội đối với sự nghiệp của các ngôi sao hiện nay",
  "Những màn lột xác phong cách ấn tượng nhất của các nghệ sĩ trong năm qua",
  "Câu chuyện truyền cảm hứng về nghị lực vươn lên của diễn viên trẻ",
  "Giải mã sức hút của các nhóm nhạc thần tượng đối với giới trẻ toàn cầu",
];

const getTitle = (i: number) => STARBOOM_HEADLINES[i % STARBOOM_HEADLINES.length];
const getImage = (i: number) => i % 2 === 0 ? "/images/dacnhantam.avif" : "/images/kyluatbanthan.avif";

export default function StarBoomPage() {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 py-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600"></div>
              <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">STARBOOM</h1>
            </div>
            
          </div>

          <div className="w-full md:w-auto flex-grow max-w-md">
            <SearchBar placeholder="Tìm kiếm tin giải trí, ngôi sao" />
          </div>
        </div>

        {/* Layout: 5 rows x 4 columns = 20 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 20 }).map((_, i) => (
            <NewsCardSquare key={i} title={getTitle(i)} imageUrl={getImage(i)} />
          ))}
        </div>

        {/* Phân trang */}
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
