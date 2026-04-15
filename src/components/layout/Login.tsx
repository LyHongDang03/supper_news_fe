'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!phone) newErrors.phone = 'Vui lòng nhập số điện thoại';
        if (!password) newErrors.password = 'Vui lòng nhập mật khẩu';

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            console.log('Login:', { phone, password });
        }
    };

    return (
        <div className="min-h-screen flex items-start justify-center bg-white px-4 py-12">
            <div className="w-full max-w-[420px]">
                {/* Title */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    Super News
                </h1>
                <p className="text-sm text-gray-500 mb-7">Đăng nhập với</p>

                <form onSubmit={handleSubmit} noValidate>
                    {/* Phone */}
                    <div className="mb-4">
                        <div className="border-b border-gray-300 focus-within:border-red-600 transition-colors">
                            <input
                                type="tel"
                                placeholder="Số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full py-2.5 px-0 text-sm bg-transparent outline-none placeholder-gray-400 text-gray-900"
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-1">
                        <div className="border-b border-gray-300 focus-within:border-red-600 transition-colors flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-1 py-2.5 px-0 text-sm bg-transparent outline-none placeholder-gray-400 text-gray-900"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="text-gray-400 hover:text-gray-600 ml-2"
                            >
                                {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-xs text-red-500 mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <p className="text-xs text-gray-400 mb-4">
                        Mật khẩu bao gồm tối thiểu 8 kí tự và tối đa là 15 kí tự
                    </p>

                    {/* Forgot + OTP */}
                    <div className="flex justify-between text-sm mb-6">
                        <a
                            href="/forgot-password"
                            className="text-gray-600 hover:text-red-600 transition-colors"
                        >
                            Quên mật khẩu
                        </a>
                        <a
                            href="/otp-login"
                            className="text-gray-600 hover:text-red-600 transition-colors"
                        >
                            Đăng nhập bằng OTP
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-medium rounded-md text-base transition-all"
                    >
                        Đăng nhập
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-sm text-gray-400">
                        Hoặc đăng nhập với
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Social login */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 active:scale-[0.98] transition-all">
                        <GoogleIcon />
                        Google
                    </button>

                    <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 active:scale-[0.98] transition-all">
                        <FacebookIcon />
                        Facebook
                    </button>
                </div>

                {/* Register */}
                <p className="text-center text-sm text-gray-500">
                    Bạn chưa có tài khoản{' '}
                    <a
                        href="/register"
                        className="font-semibold text-gray-900 underline hover:text-red-600"
                    >
                        Đăng ký
                    </a>
                </p>
            </div>
        </div>
    );
}

/* Icons */

function EyeOffIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.8"
        >
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
    );
}

function EyeIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.8"
        >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25H12v4.26h5.92..." />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12..." />
        </svg>
    );
}
