import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCardSquare from '@/components/ui/NewsCardSquare';
import ScrollableNewsSection from '@/components/sections/ScrollableNewsSection';
import SearchBar from '@/components/ui/SearchBar';
import Link from 'next/link';

// MOCK DATA
const VIDEO_TITLES = [
    'Nguyên nhân hàng đầu gây suy thận ở nam giới',
    'Những dấu hiệu nhận biết sớm bệnh cao huyết áp',
    'Chế độ ăn uống lành mạnh cho người bệnh tiểu đường',
    'Tầm quan trọng của việc kiểm tra sức khỏe định kỳ',
    'Bí quyết duy trì vóc dáng và sức khỏe dẻo dai',
    'Ảnh hưởng của ô nhiễm môi trường đến hệ hô hấp',
    'Cách phòng tránh các bệnh truyền nhiễm mùa hè',
    'Tác hại của việc thức khuya và thiếu ngủ kéo dài',
    'Lợi ích của việc tập thể dục mỗi ngày',
    'Phương pháp giảm căng thẳng và mệt mỏi hiệu quả',
    'Uống nước đúng cách để có làn da khỏe đẹp',
    'Vai trò của Vitamin đối với cơ thể chúng ta',
    'Những lầm tưởng về thực phẩm chức năng',
    'Hướng dẫn sơ cứu cơ bản khi gặp tai nạn',
    'Chăm sóc sức khỏe răng miệng cho trẻ nhỏ',
    'Lưu ý khi sử dụng thuốc kháng sinh',
];

const getTitle = (i: number) => VIDEO_TITLES[i % VIDEO_TITLES.length];
const getImage = (i: number) => {
    const images = [
        '/images/dacnhantam.avif',
        '/images/kyluatbanthan.avif',
        '/images/dacnhantam.avif',
        '/images/kyluatbanthan.avif'
    ];
    return images[i % images.length];
};

export default function VideoPage() {
    return (
        <div className="bg-white min-h-screen">
            <main className="max-w-[1440px] mx-auto px-4 py-8">
                {/* Header Video Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-red-600"></div>
                        <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-800">
                            Video
                        </h1>
                    </div>

                    <div className="w-full md:w-auto flex-grow max-w-md">
                        <SearchBar placeholder="Tìm kiếm video..." />
                    </div>
                </div>

                {/* Video Grid: 4 columns x 4 rows = 16 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <Link href={`/video/${i + 1}`} key={i}>
                            <NewsCardSquare
                                title={getTitle(i)}
                                imageUrl={getImage(i)}
                            />
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mb-20">
                    <button className="p-2 text-slate-400 hover:text-slate-800 transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-sm bg-blue-700 text-white font-bold text-sm">
                        1
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200 transition-colors">
                        2
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200 transition-colors">
                        3
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-sm bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200 transition-colors">
                        4
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-800 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Free Content Section */}
                <ScrollableNewsSection
                    title="NỘI DUNG MIỄN PHÍ"
                    href="/freecontent"
                    items={Array.from({ length: 12 }).map((_, i) => ({
                        title: getTitle(i + 4),
                        imageUrl: getImage(i + 2),
                    }))}
                />
            </main>
        </div>
    );
}
