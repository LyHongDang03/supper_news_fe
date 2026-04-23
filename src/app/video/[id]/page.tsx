'use client';

import { 
    Play, 
    RotateCcw, 
    Volume2, 
    Maximize, 
    PictureInPicture, 
    MessageSquare, 
    Share2, 
    ThumbsUp, 
    Bookmark, 
    Download, 
    MoreVertical,
    ChevronDown,
    Image as ImageIcon
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

// MOCK DATA for suggestions
const SUGGESTED_VIDEOS = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: 'Nguyên nhân hàng đầu gây suy thận ở nam giới',
    description: 'Ở nam giới, bệnh thường bắt nguồn từ những vấn đề quen thuộc như thói quen ăn uống, sinh hoạt...',
    views: '2 N',
    time: '1 ngày trước',
}));

export default function VideoDetailPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-[1440px] mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT COLUMN: PLAYER & INFO */}
                    <div className="flex-grow lg:w-[70%]">
                        {/* Player Placeholder */}
                        <div className="relative aspect-video bg-neutral-300 rounded-sm overflow-hidden mb-6 flex items-center justify-center group">
                            {/* Mock Player UI */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                {/* Scrub Bar */}
                                <div className="relative w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer">
                                    <div className="absolute top-0 left-0 h-full w-1/3 bg-red-600 rounded-full flex items-center justify-end">
                                        <div className="w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-6">
                                        <Play className="w-6 h-6 fill-current cursor-pointer hover:text-red-500" />
                                        <RotateCcw className="w-6 h-6 cursor-pointer hover:text-red-500" />
                                        <div className="flex items-center gap-2 group/volume">
                                            <Volume2 className="w-6 h-6 cursor-pointer" />
                                            <div className="w-20 h-1 bg-white/30 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-red-600"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <PictureInPicture className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                        <MessageSquare className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                        <RotateCcw className="w-5 h-5 cursor-pointer hover:text-red-500" /> {/* Should be repeat icon */}
                                        <Maximize className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <ImageIcon className="w-20 h-20 text-neutral-400 opacity-20" />
                        </div>

                        {/* Video Info */}
                        <div className="bg-white p-6 rounded-sm shadow-sm">
                            <h1 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                                Hà Nội tăng tốc trên lộ trình phát triển kinh tế số
                            </h1>
                            
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                        SN
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">Super News</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 md:gap-4">
                                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 transition-colors rounded-sm text-slate-600 font-medium text-sm">
                                        <Share2 className="w-4 h-4" /> Chia sẻ
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 transition-colors rounded-sm text-slate-600 font-medium text-sm">
                                        <ThumbsUp className="w-4 h-4" /> 22 N
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 transition-colors rounded-sm text-slate-600 font-medium text-sm">
                                        <Bookmark className="w-4 h-4" /> Lưu
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 transition-colors rounded-sm text-slate-600 font-medium text-sm">
                                        <Download className="w-4 h-4" /> Tải xuống
                                    </button>
                                </div>
                            </div>

                            {/* Stats and Description */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                    <span className="font-bold">20 lượt xem</span>
                                    <span className="font-bold">5 giờ trước</span>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                                    Đón xem những tin tức mới nhất hót nhất về Sức khỏe... <button className="text-slate-400 font-bold hover:text-slate-600">thêm</button>
                                </p>
                            </div>

                            {/* Comments Section */}
                            <div className="border-t border-slate-100 pt-8 mt-8">
                                <h2 className="text-lg font-bold text-slate-800 mb-6">1 bình luận</h2>
                                
                                <div className="flex gap-4 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0 overflow-hidden flex items-center justify-center text-slate-400">
                                        <ImageIcon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <input 
                                            type="text" 
                                            placeholder="Viết bình luận" 
                                            className="w-full border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Comment List */}
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold shrink-0">
                                            SP
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-sm text-slate-900">@Sonpham124</span>
                                                <span className="text-xs text-slate-500">5 giờ trước</span>
                                            </div>
                                            <p className="text-sm text-slate-700 mb-2">Quá hay. Cảm ơn Ad nhiều</p>
                                            <button className="text-xs text-slate-500 font-bold hover:text-slate-800">Phản hồi</button>
                                            
                                            <div className="mt-4 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-400 text-[10px]">
                                                    <ImageIcon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-grow">
                                                    <input 
                                                        type="text" 
                                                        placeholder="Viết phản hồi" 
                                                        className="w-full border-b border-slate-200 py-1 text-xs focus:outline-none focus:border-red-600 transition-colors"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SIDEBAR */}
                    <div className="lg:w-[30%]">
                        {/* Tabs */}
                        <div className="flex gap-6 mb-6 border-b border-slate-200">
                            {[
                                { id: 'all', label: 'Tất cả' },
                                { id: 'related', label: 'Cùng thể loại' },
                                { id: 'linked', label: 'Liên quan' }
                            ].map((tab) => (
                                <button 
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-3 text-sm font-bold transition-all border-b-2 ${
                                        activeTab === tab.id 
                                            ? 'text-slate-900 border-red-600' 
                                            : 'text-slate-400 border-transparent hover:text-slate-600'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Suggested Video List */}
                        <div className="flex flex-col gap-6">
                            {SUGGESTED_VIDEOS.map((video) => (
                                <Link 
                                    key={video.id} 
                                    href={`/video/${video.id}`}
                                    className="flex gap-4 group cursor-pointer"
                                >
                                    <div className="relative w-32 h-32 md:w-40 md:h-24 flex-shrink-0 rounded-sm overflow-hidden bg-slate-200 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                                        <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
                                            <span className="text-sky-600 font-black text-xl italic drop-shadow-sm">GIAO TIẾP</span>
                                        </div>
                                        {/* Mock thumbnail styling overlay as in screenshot */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                                    </div>
                                    <div className="flex-grow flex flex-col pt-1">
                                        <div className="flex items-start justify-between gap-1 mb-2">
                                            <h3 className="font-bold text-slate-800 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                                                {video.title}
                                            </h3>
                                            <button className="text-slate-400 hover:text-slate-700 flex-shrink-0">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                                            {video.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {/* More Button */}
                        <div className="mt-8 flex justify-center">
                            <button className="flex items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors transform rotate-0 hover:rotate-180 duration-500">
                                <ChevronDown className="w-8 h-8" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
