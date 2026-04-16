import type { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Đăng nhập | Super News",
  description:
    "Đăng nhập vào tài khoản Super News để mua và theo dõi nội dung yêu thích.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <LoginForm />
    </div>
  );
}
