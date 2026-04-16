import { z } from "zod";

export const registerSchema = z
  .object({
    phone: z
      .string()
      .min(1, "Số điện thoại không được để trống")
      .regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
    password: z
      .string()
      .min(6, "Mật khẩu bao gồm ít nhất 6 kí tự")
      .max(15, "Mật khẩu tối đa 15 kí tự"),
    confirmPassword: z
      .string()
      .min(8, "Mật khẩu bao gồm tối thiểu 8 kí tự")
      .max(15, "Mật khẩu tối đa 15 kí tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

// ── Login ──────────────────────────────────────────────────────────────────
export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, "Số điện thoại không được để trống")
    .regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
  password: z
    .string()
    .min(8, "Mật khẩu bao gồm tối thiểu 8 kí tự")
    .max(15, "Mật khẩu bao gồm tối đa 15 kí tự"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// ── Forgot Password ─────────────────────────────────────────────────────────
export const forgotPhoneSchema = z.object({
  phone: z
    .string()
    .min(1, "Số điện thoại không được để trống")
    .regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, "Số điện thoại không hợp lệ"),
});

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, "Mã OTP gồm 6 chữ số")
    .regex(/^\d+$/, "Mã OTP chỉ gồm chữ số"),
});

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Mật khẩu tối thiểu 8 kí tự")
      .max(15, "Mật khẩu tối đa 15 kí tự"),
    confirmPassword: z
      .string()
      .min(8, "Mật khẩu tối thiểu 8 kí tự")
      .max(15, "Mật khẩu tối đa 15 kí tự"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export type ForgotPhoneData = z.infer<typeof forgotPhoneSchema>;
export type OtpData = z.infer<typeof otpSchema>;
export type NewPasswordData = z.infer<typeof newPasswordSchema>;
