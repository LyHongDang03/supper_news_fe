"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginSchema, type LoginFormData } from "@/schemas/auth.schema";
import { useAuthStore } from "@/stores/authStore";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setApiError("");
    const result = await login(data.phone, data.password);
    if (!result.success) {
      setApiError(result.message ?? "Đăng nhập thất bại, vui lòng thử lại");
      return;
    }
    router.push("/");
  };

  return (
    <div className="w-full max-w-[420px] mx-auto px-6 py-10 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[2rem] font-extrabold tracking-tight text-gray-950 leading-none mb-1">
          Super News
        </h1>
        <p className="text-sm font-semibold text-gray-700">Đăng nhập với</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Phone */}
        <div>
          <div className="relative border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900">
            <input
              id="login-phone"
              type="tel"
              placeholder="Số điện thoại"
              autoComplete="tel"
              className="w-full py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900 flex items-center">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              autoComplete="current-password"
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
              : "Mật khẩu bao gồm tối thiểu 8 kí tự và tối đa là 15 kí tự"}
          </p>
        </div>

        {/* Forgot / OTP row */}
        <div className="flex items-center justify-between">
          <Link
            href="/forgot-password"
            id="login-forgot-password"
            className="text-sm font-semibold text-gray-900 hover:text-[#D42B2B] transition-colors"
          >
            Quên mật khẩu
          </Link>
          <Link
            href="/login/otp"
            id="login-otp-link"
            className="text-sm font-semibold text-gray-900 hover:text-[#D42B2B] transition-colors"
          >
            Đăng nhập bằng OTP
          </Link>
        </div>

        {/* API Error */}
        {apiError && (
          <p className="text-xs text-red-600 text-center">{apiError}</p>
        )}

        {/* Submit */}
        <button
          id="login-submit"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#D42B2B] text-white font-semibold text-sm py-3.5 transition-all duration-150 active:scale-[0.98] hover:bg-[#b82424] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng nhập"}
        </button>
      </form>

      {/* Register link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Chưa có tài khoản?{" "}
        <Link
          href="/register"
          id="login-register-link"
          className="font-bold text-gray-900 underline underline-offset-2 hover:text-[#D42B2B] transition-colors"
        >
          Đăng ký
        </Link>
      </p>
    </div>
  );
}
