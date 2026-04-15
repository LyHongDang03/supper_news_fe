import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCardSquare from '@/components/ui/NewsCardSquare';
import FilterPill from '@/components/ui/FilterPill';
import SearchBar from '@/components/ui/SearchBar';

// MOCK DATA
const SPORT_HEADLINES = [
    'Bất ngờ lớn tại vòng loại World Cup: Các đội bóng yếu vươn lên mạnh mẽ',
    'Lionel Messi lập hat-trick, giúp Inter Miami giành chiến thắng quan trọng',
    'U23 Việt Nam sẵn sàng cho giải vô địch Đông Nam Á sắp tới',
    'Giải quần vợt Wimbledon 2024: Những ứng cử viên sáng giá cho chức vô địch',
    'NBA Draft 2024: Những tài năng trẻ đáng chú ý chuẩn bị gia nhập giải đấu',
    'F1: Lewis Hamilton tự tin trước chặng đua tiếp theo tại Silverstone',
    'Đội tuyển nữ Việt Nam tập huấn tích cực cho vòng loại Olympic 2024',
    'Chuyển nhượng bóng đá: Real Madrid nhắm đến ngôi sao trẻ từ Premier League',
    'Giải đua xe đạp Tour de France: Cuộc cạnh tranh khốc liệt cho áo vàng chung cuộc',
    'Võ sĩ Nguyễn Trần Duy Nhất đặt mục tiêu cao tại giải Muay Thai thế giới',
    'Thể thao điện tử chính thức được đưa vào thi đấu tại SEA Games 33',
    'Những bài tập tăng cường sức bền cho vận động viên điền kinh chuyên nghiệp',
    'Chế độ dinh dưỡng tối ưu để phục hồi cơ bắp sau khi tập luyện cường độ cao',
    'Lịch sử và ý nghĩa của các biểu tượng thể thao nổi tiếng thế giới',
    'Tầm quan trọng của tâm lý vững vàng trong thi đấu thể thao đỉnh cao',
    'Xu hướng công nghệ trong trang phục thi đấu của các vận động viên',
    'Phỏng vấn độc quyền: Cựu danh thủ chia sẻ về hành trình chinh phục đỉnh cao',
    'Những khoảnh khắc xúc động và truyền cảm hứng nhất trong lịch sử Olympic',
    'Các môn thể thao mạo hiểm đang thu hút giới trẻ Việt Nam tham gia',
    'Phát triển thể thao học đường: Nền tảng quan trọng cho tương lai thể thao nước nhà',
];

const getTitle = (i: number) => SPORT_HEADLINES[i % SPORT_HEADLINES.length];
const getImage = (i: number) =>
    i % 2 === 0 ? '/images/dacnhantam.avif' : '/images/kyluatbanthan.avif';

export default function SportMePage() {
    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-[1440px] mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-6 bg-red-600"></div>
                            <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">
                                SPORTME
                            </h1>
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex-grow max-w-md">
                        <SearchBar placeholder="Tìm kiếm tin thể thao" />
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
