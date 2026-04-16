'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Bell,
    Coins,
    FolderClosed,
    Home,
    Image as ImageIcon,
    Link2,
    LogOut,
    Menu,
    MonitorPlay,
    Newspaper,
    Package2,
    ChevronUp,
    ChevronDown,
    UserCircle2,
    Video,
    Activity,
    GraduationCap,
    HeartPulse,
    Globe,
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/video', label: 'Video', icon: MonitorPlay },
    { href: '/tin-anh', label: 'Tin ảnh', icon: ImageIcon },
    { href: '/short', label: 'Short', icon: Video },
    { href: '/menews', label: 'MeNews', icon: Newspaper },
    { href: '/freecontent', label: 'Miễn phí', icon: Coins },
];

const libraryItems = [
    'Đã xem',
    'Danh sách phát',
    'Nội dung tải xuống',
    'Xem sau',
    'Yêu thích',
];

export default function Navbar() {
    const pathname = usePathname();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const profileMenuRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { isAuthenticated, user, logout } = useAuthStore();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target as Node)
            ) {
                setIsProfileOpen(false);
                setIsLibraryOpen(false);
            }

            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                isSidebarOpen
            ) {
                setIsSidebarOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsProfileOpen(false);
                setIsLibraryOpen(false);
                setIsSidebarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <>
            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 w-[300px] bg-[#051335] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Sidebar Header */}
                <div className="bg-[#1e305e] px-6 py-4 border-b border-white/5">
                    <h1 className="text-2xl font-bold italic tracking-tighter text-white">
                        Super<span className="text-sky-400">News</span>
                    </h1>
                </div>

                {/* Sidebar content */}
                <div className="py-4 flex flex-col overflow-y-auto max-h-[calc(100vh-60px)] no-scrollbar">
                    {/* Primary Nav Items for Mobile/Tablet */}
                    <div className="flex flex-col lg:hidden border-b border-white/10 pb-2 mb-2">
                        {navItems.map(({ href, label, icon: Icon }) => {
                            const isActive = pathname === href || (label === 'MeNews' && ['/sportme', '/starboom', '/menews', '/menewsList'].includes(pathname));
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`flex items-center gap-4 px-6 py-3 transition-colors ${
                                        isActive ? 'bg-white/15 text-white font-semibold border-l-4 border-red-500' : 'text-white/90 hover:bg-white/5 border-l-4 border-transparent'
                                    }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-red-400' : 'text-sky-400'}`} />
                                    <span>{label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <Link href="/chuyen-dong" className="flex items-center gap-4 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <Activity className="w-5 h-5 text-sky-400" />
                        <span className="font-medium">Chuyển động</span>
                    </Link>
                    <Link href="/giao-duc" className="flex items-center gap-4 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <GraduationCap className="w-5 h-5 text-sky-400" />
                        <span className="font-medium">Giáo dục kỹ năng</span>
                    </Link>
                    <Link href="/suc-khoe" className="flex items-center gap-4 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <HeartPulse className="w-5 h-5 text-sky-400" />
                        <span className="font-medium">Sức khoẻ - Y tế</span>
                    </Link>
                    <Link href="/doi-song" className="flex items-center gap-4 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <Globe className="w-5 h-5 text-sky-400" />
                        <span className="font-medium">Đời sống</span>
                    </Link>
                    <Link href="/cong-nghe" className="flex items-center gap-4 px-6 py-3 text-white/90 hover:bg-white/5 transition-colors">
                        <MonitorPlay className="w-5 h-5 text-sky-400" />
                        <span className="font-medium">Công nghệ</span>
                    </Link>

                    {/* Separator / Sub-links */}
                    <div className="mt-6 flex flex-col">
                        <Link href="/about" className="flex items-center gap-4 px-10 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-all">
                            <span className="w-1.5 h-1.5 bg-sky-400 rotate-45 shrink-0"></span>
                            <span className="text-sm">Giới thiệu dịch vụ</span>
                        </Link>
                        <Link href="/policy" className="flex items-center gap-4 px-10 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-all">
                            <span className="w-1.5 h-1.5 bg-sky-400 rotate-45 shrink-0"></span>
                            <span className="text-sm">Chính sách dịch vụ</span>
                        </Link>
                        <Link href="/privacy" className="flex items-center gap-4 px-10 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-all">
                            <span className="w-1.5 h-1.5 bg-sky-400 rotate-45 shrink-0"></span>
                            <span className="text-sm">Chính sách bảo mật thông tin</span>
                        </Link>
                        <Link href="/protection" className="flex items-center gap-4 px-10 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-all">
                            <span className="w-1.5 h-1.5 bg-sky-400 rotate-45 shrink-0"></span>
                            <span className="text-sm">Chính sách bảo vệ thông tin Khách hàng</span>
                        </Link>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 z-50 w-full bg-[#0c2b5e]">
                <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between border-b border-white/10 px-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <Link href="/" className="flex items-center">
                            <h1 className="text-2xl font-bold italic tracking-tighter text-white">
                                Super<span className="text-sky-400">News</span>
                            </h1>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 text-white">
                        <button className="relative hover:opacity-80">
                            <Bell className="h-5 w-5 fill-current text-red-500" />
                        </button>
                        <div className="relative" ref={profileMenuRef}>
                            <button
                                type="button"
                                aria-expanded={isProfileOpen}
                                aria-haspopup="menu"
                                onClick={() => {
                                    setIsProfileOpen((open) => {
                                        const nextOpen = !open;
                                        setIsLibraryOpen(false);
                                        return nextOpen;
                                    });
                                }}
                                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-[#183c73] transition hover:opacity-80"
                            >
                                <span className="sr-only">
                                    {'Mở menu tài khoản'}
                                </span>
                                <UserCircle2 className="h-7 w-7" />
                            </button>

                            {isProfileOpen ? (
                                <div className="absolute right-0 top-[calc(100%+10px)] w-[260px] overflow-hidden rounded-sm border border-white/10 bg-[#0b1f4f] text-white shadow-2xl">
                                    {isAuthenticated && user ? (
                                        /* ── LOGGED IN ──────────────────── */
                                        <>
                                            {/* Account header */}
                                            <button
                                                type="button"
                                                className="flex w-full items-center gap-3 border-b border-white/10 px-3 py-3 text-left transition hover:bg-white/5"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffdb9f] via-[#b55d62] to-[#4e2d54] text-sm font-semibold text-white">
                                                    {user.initial}
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="truncate text-sm font-medium">{user.phone}</div>
                                                    <div className="text-xs text-white/70">Xem thông tin tài khoản</div>
                                                </div>
                                            </button>

                                            {/* Menu items */}
                                            <div className="py-1">
                                                <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-white/5">
                                                    <Bell className="h-4 w-4 shrink-0" />
                                                    <span>Thông báo</span>
                                                </button>
                                                <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-white/5">
                                                    <Link2 className="h-4 w-4 shrink-0" />
                                                    <span>Liên kết tài khoản</span>
                                                </button>
                                                <button type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-white/5">
                                                    <Package2 className="h-4 w-4 shrink-0" />
                                                    <span>Gói cước</span>
                                                </button>
                                            </div>

                                            {/* Library accordion */}
                                            <div className="border-t border-white/10">
                                                <button
                                                    type="button"
                                                    aria-expanded={isLibraryOpen}
                                                    onClick={() => setIsLibraryOpen((open) => !open)}
                                                    className="flex w-full items-center justify-between bg-white/10 px-4 py-2.5 text-left text-sm font-medium"
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <FolderClosed className="h-4 w-4 shrink-0" />
                                                        <span>Thư viện</span>
                                                    </span>
                                                    {isLibraryOpen ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
                                                </button>
                                                {isLibraryOpen && (
                                                    <div className="bg-white/[0.08] py-1">
                                                        {libraryItems.map((item) => (
                                                            <button key={item} type="button" className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
                                                                <span className="ml-1 h-1 w-1 shrink-0 bg-white/70" />
                                                                <span>{item}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Logout */}
                                            <div className="border-t border-white/10">
                                                <button
                                                    type="button"
                                                    onClick={() => { logout(); setIsProfileOpen(false); }}
                                                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-red-400 transition hover:bg-white/5 hover:text-red-300"
                                                >
                                                    <LogOut className="h-4 w-4 shrink-0" />
                                                    <span>Đăng xuất</span>
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        /* ── NOT LOGGED IN ──────────────── */
                                        <div className="p-3 flex flex-col gap-2">
                                            <Link
                                                href="/login"
                                                id="navbar-login-link"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex w-full items-center justify-center gap-2 bg-[#D42B2B] py-2.5 text-sm font-semibold text-white transition hover:bg-[#b82424] active:scale-[0.98]"
                                            >
                                                Đăng nhập
                                            </Link>
                                            <Link
                                                href="/register"
                                                id="navbar-register-link"
                                                onClick={() => setIsProfileOpen(false)}
                                                className="flex w-full items-center justify-center gap-2 border border-white/30 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
                                            >
                                                Đăng ký
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="mx-auto hidden lg:flex h-12 max-w-[1440px] items-center gap-6 overflow-x-auto px-4 no-scrollbar">
                    {navItems.map(({ href, label, icon: Icon }) => {
                        const isActive = pathname === href || (label === 'MeNews' && ['/sportme', '/starboom', '/menews', '/menewsList'].includes(pathname));

                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`flex items-center gap-2 whitespace-nowrap rounded-sm px-4 py-1.5 text-sm transition-colors ${isActive
                                        ? 'bg-red-600 font-semibold text-white hover:bg-red-700'
                                        : 'font-medium text-white/90 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
