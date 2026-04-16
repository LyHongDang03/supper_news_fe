"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import {
  forgotPhoneSchema,
  newPasswordSchema,
  otpSchema,
  type ForgotPhoneData,
  type NewPasswordData,
  type OtpData,
} from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";

// ── Types ─────────────────────────────────────────────────────────────────
type Step = "phone" | "otp" | "new-password";

// ── Sub-step: Enter phone ─────────────────────────────────────────────────
interface StepPhoneProps {
  onSuccess: (phone: string) => void;
}

function StepPhone({ onSuccess }: StepPhoneProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPhoneData>({ resolver: zodResolver(forgotPhoneSchema) });

  const onSubmit = async (data: ForgotPhoneData) => {
    const phoneExists = await authService.checkPhoneExists(data.phone);
    if (!phoneExists) {
      setError("phone", { message: "Số điện thoại chưa được đăng ký" });
      return;
    }
    onSuccess(data.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <div className="border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900">
          <input
            id="forgot-phone"
            type="tel"
            placeholder="Nhập số điện thoại"
            autoComplete="tel"
            className="w-full py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <SubmitButton loading={isSubmitting} label="Xác nhận" />
    </form>
  );
}

// ── Sub-step: OTP ─────────────────────────────────────────────────────────
interface StepOtpProps {
  phone: string;
  onSuccess: () => void;
  onBack: () => void;
}

function StepOtp({ phone, onSuccess, onBack }: StepOtpProps) {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  // Validate full OTP via schema
  const getFullOtp = () => digits.join("");

  const handleChange = (idx: number, value: string) => {
    const char = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[idx] = char;
    setDigits(next);
    setError("");
    if (char && idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setDigits(pasted.split(""));
      inputsRef.current[5]?.focus();
    }
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = getFullOtp();
    const parsed = otpSchema.safeParse({ otp });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const isValid = await authService.verifyOtp(phone, otp);
    setLoading(false);
    if (!isValid) {
      setError("Mã OTP không đúng, vui lòng thử lại");
      return;
    }
    onSuccess();
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    // TODO: call API to resend OTP
    setResendCooldown(60);
    const timer = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) { clearInterval(timer); return 0; }
        return c - 1;
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p className="text-xs text-gray-500">
        Mã OTP đã được gửi đến{" "}
        <span className="font-semibold text-gray-800">{phone}</span>
      </p>

      {/* 6-digit OTP boxes */}
      <div className="flex gap-2.5 justify-between" onPaste={handlePaste}>
        {digits.map((d, i) => (
          <input
            key={i}
            id={`otp-digit-${i}`}
            ref={(el) => { inputsRef.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            aria-label={`Chữ số OTP thứ ${i + 1}`}
            className={[
              "w-full aspect-square text-center text-lg font-bold border-2 outline-none transition-all duration-150",
              "focus:border-gray-900 bg-white text-gray-900",
              d ? "border-gray-900" : "border-gray-300",
              error ? "border-red-500" : "",
            ].join(" ")}
          />
        ))}
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}

      {/* Resend */}
      <div className="text-xs text-gray-500">
        Không nhận được mã?{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={resendCooldown > 0}
          className="font-semibold text-gray-900 hover:text-[#D42B2B] disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {resendCooldown > 0 ? `Gửi lại (${resendCooldown}s)` : "Gửi lại"}
        </button>
      </div>

      <SubmitButton loading={loading} label="Xác nhận" />

      <BackButton onClick={onBack} />
    </form>
  );
}

// ── Sub-step: New Password ────────────────────────────────────────────────
interface StepNewPasswordProps {
  onSuccess: () => void;
  onBack: () => void;
}

function StepNewPassword({ onSuccess, onBack }: StepNewPasswordProps) {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordData>({ resolver: zodResolver(newPasswordSchema) });

  const onSubmit = async (data: NewPasswordData) => {
    // Note: in a real app, we'd probably pass the phone or a token here
    await authService.updatePassword("mock-phone", data.password);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* New password */}
      <div>
        <div className="flex items-center border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900">
          <input
            id="new-password"
            type={showPw ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
            autoComplete="new-password"
            className="flex-1 py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
            {...register("password")}
          />
          <ToggleVisibility show={showPw} onToggle={() => setShowPw((v) => !v)} />
        </div>
        {errors.password && (
          <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm password */}
      <div>
        <div className="flex items-center border-b-2 border-gray-300 transition-all duration-200 focus-within:border-gray-900">
          <input
            id="confirm-new-password"
            type={showConfirm ? "text" : "password"}
            placeholder="Nhập mật khẩu mới"
            autoComplete="new-password"
            className="flex-1 py-2 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none"
            {...register("confirmPassword")}
          />
          <ToggleVisibility show={showConfirm} onToggle={() => setShowConfirm((v) => !v)} />
        </div>
        <p className="mt-1 text-xs text-gray-500">
          {errors.confirmPassword
            ? errors.confirmPassword.message
            : "Lưu ý: mật khẩu bao gồm tối thiểu 8 kí tự và tối đa là 15 kí tự"}
        </p>
      </div>

      <SubmitButton loading={isSubmitting} label="Xác nhận" />

      <BackButton onClick={onBack} />
    </form>
  );
}

// ── Shared small components ───────────────────────────────────────────────
function SubmitButton({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-[#D42B2B] text-white font-semibold text-sm py-3.5 transition-all duration-150 active:scale-[0.98] hover:bg-[#b82424] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Đang xử lý..." : label}
    </button>
  );
}

function ToggleVisibility({ show, onToggle }: { show: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
      onClick={onToggle}
      className="text-gray-400 hover:text-gray-700 transition-colors duration-150 p-1"
    >
      {show ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors"
    >
      <ArrowLeft className="w-3.5 h-3.5" />
      Quay lại
    </button>
  );
}

// ── Step metadata ─────────────────────────────────────────────────────────
const STEP_META: Record<Step, { subtitle: string }> = {
  phone: { subtitle: "Vui lòng nhập\nsố điện thoại bên dưới" },
  otp: { subtitle: "Nhập mã OTP" },
  "new-password": { subtitle: "Tạo mật khẩu mới" },
};

// ── Main orchestrator component ───────────────────────────────────────────
export default function ForgotPasswordFlow() {
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const { subtitle } = STEP_META[step];

  if (done) {
    return (
      <div className="w-full max-w-[420px] mx-auto px-6 py-10 bg-white text-center space-y-4">
        <h1 className="text-[2rem] font-extrabold tracking-tight text-gray-950 leading-none">
          Super News
        </h1>
        <p className="text-sm text-gray-700 font-semibold">
          Mật khẩu đã được cập nhật thành công!
        </p>
        <a
          href="/login"
          className="inline-block mt-4 w-full bg-[#D42B2B] text-white font-semibold text-sm py-3.5 text-center hover:bg-[#b82424] transition-colors"
        >
          Đăng nhập ngay
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[420px] mx-auto px-6 py-10 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[2rem] font-extrabold tracking-tight text-gray-950 leading-none mb-1">
          Super News
        </h1>
        <p className="text-sm text-gray-500 whitespace-pre-line">{subtitle}</p>
      </div>

      {/* Steps */}
      {step === "phone" && (
        <StepPhone
          onSuccess={(p) => {
            setPhone(p);
            setStep("otp");
          }}
        />
      )}

      {step === "otp" && (
        <StepOtp
          phone={phone}
          onSuccess={() => setStep("new-password")}
          onBack={() => setStep("phone")}
        />
      )}

      {step === "new-password" && (
        <StepNewPassword
          onSuccess={() => setDone(true)}
          onBack={() => setStep("otp")}
        />
      )}
    </div>
  );
}
