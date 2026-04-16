import type { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Đăng ký | Super News",
  description:
    "Tạo tài khoản Super News để mua và theo dõi nội dung yêu thích của bạn.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <RegisterForm />
    </div>
  );
}
