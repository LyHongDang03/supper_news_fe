import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCardSquare from '@/components/ui/NewsCardSquare';
import SearchBar from '@/components/ui/SearchBar';

// MOCK DATA
const MENEWS_HEADLINES = [
    'Siêu ứng dụng tương lai: Xu hướng mới của kỷ nguyên công nghệ số',
    'Khám phá trải nghiệm giải trí đa phương tiện đỉnh cao trên MeNews',
    'Hành trình sáng tạo nội dung của những tên tuổi đình đám hiện nay',
    'Cập nhật tin tức đời sống, giải trí 24/7 chỉ với một cú chạm',
    'Chuyên mục Starboom: Nơi tỏa sáng của những ngôi sao triển vọng',
    'Vì sao MeNews đang trở thành sự lựa chọn hàng đầu của giới trẻ?',
    'Nghệ thuật thưởng thức nội dung số trong thời đại 4.0',
    'Phỏng vấn độc quyền: Bí mật đằng sau những video triệu view',
    'Phong cách sống mới: Cân bằng giữa công việc và giải trí lành mạnh',
    'MeNews công bố lộ trình cập nhật những tính năng đột phá',
    'Sức mạnh của cộng đồng: Kết nối và chia sẻ đam mê trên MeNews',
    'Lắng nghe câu chuyện cảm hứng từ những người dùng tiêu biểu',
    'MeNews và sứ mệnh nâng tầm trải nghiệm số cho người Việt',
    'Xu hướng nội dung ngắn (Shorts) đang bùng nổ mạnh mẽ trên MeNews',
    'Cẩm nang tận dụng tối đa các tiện ích có sẵn trên ứng dụng MeNews',
];

const getTitle = (i: number) => MENEWS_HEADLINES[i % MENEWS_HEADLINES.length];
const getImage = (i: number) =>
    i % 2 === 0 ? '/images/dacnhantam.avif' : '/images/kyluatbanthan.avif';

export default function MeNewsListPage() {
    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-[1440px] mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-red-600"></div>
                            <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">
                                MENEWS
                            </h1>
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex-grow max-w-md">
                        <SearchBar placeholder="Tìm kiếm trong MeNews" />
                    </div>
                </div>

                {/* Layout: 5 rows x 4 columns = 20 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <NewsCardSquare
                            key={i}
                            title={getTitle(i)}
                            imageUrl={getImage(i)}
                        />
                    ))}
                </div>

                {/* Phân trang */}
                <div className="flex items-center justify-center gap-2 pb-12">
                    <button className="p-2 text-slate-400 hover:text-slate-800">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-blue-700 text-white font-bold text-sm">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200">
                        3
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-800">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </main>
        </div>
    );
}
