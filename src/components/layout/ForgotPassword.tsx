'use client';

import React, { useState } from 'react';

export default function PasswordResetFlow() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // Xử lý xác nhận số điện thoại (Bước 1)
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Regex cơ bản kiểm tra số điện thoại VN (10 số, bắt đầu bằng 0)
        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        if (!phone) {
            setError('Vui lòng nhập số điện thoại');
            return;
        }

        if (!phoneRegex.test(phone)) {
            setError('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
            return;
        }

        // Nếu đúng định dạng, chuyển sang bước 2
        setStep(2);
    };

    // Xử lý xác nhận mật khẩu mới (Bước 2)
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password.length < 8 || password.length > 15) {
            setError('Mật khẩu phải từ 8 đến 15 kí tự.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Mật khẩu không khớp.');
            return;
        }

        // Xử lý logic gọi API đổi mật khẩu ở đây
        alert('Tạo mật khẩu thành công!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="bg-white w-full max-w-[400px] p-8 border border-gray-200 shadow-sm">
                <h1 className="text-4xl font-bold mb-4 tracking-tight">
                    Super News
                </h1>

                {step === 1 && (
                    <form onSubmit={handlePhoneSubmit}>
                        <div className="mb-10">
                            <p className="text-gray-500 text-lg leading-tight">
                                Vui lòng nhập
                            </p>
                            <p className="text-gray-500 text-lg leading-tight">
                                số điện thoại bên dưới
                            </p>
                        </div>

                        <div className="mb-8 relative">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Nhập số điện thoại"
                                className="w-full pb-2 text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-400"
                            />
                            {error && (
                                <p className="text-red-500 text-xs mt-2 absolute">
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#db4343] hover:bg-red-600 text-white font-medium py-3 rounded transition-colors mt-4"
                        >
                            Xác nhận
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="mb-10">
                            <p className="text-gray-500 text-lg">
                                Tạo mật khẩu mới
                            </p>
                        </div>

                        <div className="mb-6">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Nhập mật khẩu mới"
                                className="w-full pb-2 text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-400"
                            />
                        </div>

                        <div className="mb-2 relative">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                placeholder="Nhập mật khẩu mới"
                                className="w-full pb-2 text-gray-700 bg-transparent border-b border-gray-300 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-400"
                            />
                            {error && (
                                <p className="text-red-500 text-xs mt-2 absolute">
                                    {error}
                                </p>
                            )}
                        </div>

                        <p className="text-[11px] text-gray-500 mt-2 mb-8">
                            Lưu ý: mật khẩu bao gồm tối thiểu 8 kí tự và tối đa
                            là 15 kí tự
                        </p>

                        <button
                            type="submit"
                            className="w-full bg-[#db4343] hover:bg-red-600 text-white font-medium py-3 rounded transition-colors"
                        >
                            Xác nhận
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
