"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { registerSchema, type RegisterFormData } from "@/schemas/auth.schema";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // TODO: connect to auth service
    console.log("Register payload:", data);
    await new Promise((r) => setTimeout(r, 800));
  };

  return (
    <div className="w-full max-w-[420px] mx-auto px-6 py-10 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[2rem] font-extrabold tracking-tight text-gray-950 leading-none mb-1">
          Super News
        </h1>
        <p className="text-sm font-semibold text-gray-700">
          Đăng ký để mua và theo dõi
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Phone */}
        <div className="group">
          <div className="relative border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900">
            <input
              id="register-phone"
              type="tel"
              placeholder="Số điện thoại"
              autoComplete="tel"
              className="w-full py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none peer"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="group">
          <div className="relative border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900 flex items-center">
            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              autoComplete="new-password"
              className="flex-1 py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
              {...register("password")}
            />
            <button
              type="button"
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              onClick={() => setShowPassword((v) => !v)}
              className="text-gray-400 hover:text-gray-700 transition-colors duration-150 p-1"
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {errors.password
              ? errors.password.message
              : "Mật khẩu bao gồm ít nhất 6 kí tự"}
          </p>
        </div>

        {/* Confirm Password */}
        <div className="group">
          <div className="relative border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900 flex items-center">
            <input
              id="register-confirm-password"
              type={showConfirm ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              autoComplete="new-password"
              className="flex-1 py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              aria-label={showConfirm ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              onClick={() => setShowConfirm((v) => !v)}
              className="text-gray-400 hover:text-gray-700 transition-colors duration-150 p-1"
            >
              {showConfirm ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {errors.confirmPassword
              ? errors.confirmPassword.message
              : "Mật khẩu bao gồm tối thiểu 8 kí tự và tối đa là 15 kí tự"}
          </p>
        </div>

        {/* Submit */}
        <button
          id="register-submit"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#D42B2B] text-white font-semibold text-sm py-3.5 transition-all duration-150 active:scale-[0.98] hover:bg-[#b82424] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
        </button>
      </form>

      {/* Divider */}
      <div className="mt-6 mb-4 text-sm text-gray-700 font-semibold">
        Hoặc đăng ký với
      </div>

      {/* Social Buttons */}
      <div className="flex gap-3">
        <button
          id="register-google"
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-150 active:scale-[0.98]"
        >
          <GoogleIcon />
          Google
        </button>
        <button
          id="register-facebook"
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-150 active:scale-[0.98]"
        >
          <FacebookIcon />
          Facebook
        </button>
      </div>

      {/* Login link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Bạn đã có tài khoản{" "}
        <Link
          href="/login"
          id="register-login-link"
          className="font-bold text-gray-900 underline underline-offset-2 hover:text-[#D42B2B] transition-colors"
        >
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}

// ── Inline SVG icons (no extra deps) ──────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
      />
    </svg>
  );
}
