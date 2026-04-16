import NewsCardSquare from '@/components/ui/NewsCardSquare';
import FreeContentSection from '@/components/sections/FreeContentSection';
import SearchBar from '@/components/ui/SearchBar';
import SectionHeader from '@/components/ui/SectionHeader';

// MOCK DATA
const HEADLINES = [
    'VN-Index vượt mốc 1.300 điểm với thanh khoản bùng nổ',
    'Căng thẳng leo thang tại Trung Đông, giá dầu biến động mạnh',
    'Apple công bố chip M4 mới với hiệu năng AI vượt trội',
    'Những thói quen buổi sáng giúp tăng tuổi thọ hiệu quả',
    "Xu hướng 'du lịch chữa lành' lên ngôi trong năm 2024",
    'Nâng cao kỹ năng số cho học sinh: Thách thức và cơ hội',
    'Đội tuyển Việt Nam chuẩn bị cho vòng loại World Cup 2026',
    'Giá vàng trong nước quay đầu giảm mạnh sau chuỗi ngày tăng',
    'VinFast chính thức bàn giao xe điện VF3 tại Việt Nam',
    'Phát hiện loài sinh vật mới tại vùng biển sâu Nam Cực',
    'Hải Phòng: Khởi công dự án khu đô thị mới nghìn tỷ đồng',
    'Lịch thi đấu Euro 2024: Những cuộc đối đầu nảy lửa',
    'Thủ tướng yêu cầu đẩy nhanh tiến độ giải ngân vốn đầu tư công',
    'Startup Việt gọi vốn thành công 10 triệu USD vòng Series A',
    'NASA phát hiện hành tinh có khả năng duy trì sự sống',
    'Những phát minh làm thay đổi cả thế giới trong thế kỷ 21',
    'Du lịch Hạ Long: Trải nghiệm du thuyền 5 sao đẳng cấp',
    'Học tiếng Anh hiệu quả: 5 phương pháp đơn giản mà hữu ích',
    'Khám phá ẩm thực Tây Bắc: Những món ăn không thể bỏ qua',
    'Công nghệ Blockchain: Ứng dụng vượt xa tiền điện tử',
    'Năng lượng tái tạo: Giải pháp cho tương lai xanh bền vững',
    'Bí quyết quản lý tài chính cá nhân cho người trẻ',
    'Sức mạnh của tư duy tích cực trong công việc và cuộc sống',
    'Những điểm đến không thể bỏ qua khi tới Đà Lạt',
];

const getTitle = (i: number) => HEADLINES[i % HEADLINES.length];
const getImage = (i: number) =>
    i % 2 === 0 ? '/images/dacnhantam.avif' : '/images/kyluatbanthan.avif';

export default function MeNewsPage() {
    const sections = [
        { title: 'MeNews', href: '/menewsList' },
        { title: 'Starboom', href: '/starboom' },
        { title: 'SportMe', href: '/sportme' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-[1440px] mx-auto px-4 py-6">
                {/* FILTERS */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-6"></div>
                    <div className="w-full md:w-auto flex-grow max-w-md">
                        <SearchBar placeholder="Tìm kiếm trong MeNews" />
                    </div>
                </div>

                {/* SECTIONS */}
                {sections.map((section, idx) => (
                    <section key={idx} className="mb-16">
                        <SectionHeader
                            title={section.title}
                            href={section.href}
                            showArrows={false}
                        />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <NewsCardSquare
                                    key={i}
                                    title={getTitle(i + idx * 8)}
                                    imageUrl={getImage(i + idx)}
                                />
                            ))}
                        </div>
                    </section>
                ))}

                {/* FREE CONTENT SECTION */}
                <FreeContentSection
                    items={Array.from({ length: 12 }).map((_, i) => ({
                        title: getTitle(i + 20),
                        imageUrl: getImage(i + 5),
                    }))}
                />
            </main>
        </div>
    );
}
