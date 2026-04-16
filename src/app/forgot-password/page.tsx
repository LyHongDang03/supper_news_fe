import type { Metadata } from "next";
import ForgotPasswordFlow from "@/components/auth/ForgotPasswordFlow";

export const metadata: Metadata = {
  title: "Quên mật khẩu | Super News",
  description: "Đặt lại mật khẩu tài khoản Super News của bạn qua mã OTP.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <ForgotPasswordFlow />
    </div>
  );
}
