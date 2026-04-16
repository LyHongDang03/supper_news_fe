import { LoginFormData } from "@/schemas/auth.schema";

// ── Fake account (demo) ───────────────────────────────────────────────────
const FAKE_ACCOUNT = {
  phone: "0329267283",
  password: "lyhongdang",
  displayName: "Lý Hồng Đăng",
  initial: "L",
};

export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    phone: string;
    displayName: string;
    initial: string;
  };
}

export const authService = {
  login: async (phone: string, password: string): Promise<AuthResponse> => {
    // Simulate API latency
    await new Promise((r) => setTimeout(r, 600));

    if (phone === FAKE_ACCOUNT.phone && password === FAKE_ACCOUNT.password) {
      return {
        success: true,
        user: {
          phone: FAKE_ACCOUNT.phone,
          displayName: FAKE_ACCOUNT.displayName,
          initial: FAKE_ACCOUNT.initial,
        },
      };
    }

    return { 
      success: false, 
      message: "Số điện thoại hoặc mật khẩu không đúng" 
    };
  },

  // Add more auth-related services here (forgot password, register, etc.)
  checkPhoneExists: async (phone: string) => {
    await new Promise((r) => setTimeout(r, 600));
    // Simulate check: phone exists if it's not empty (mock)
    return !!phone;
  },

  verifyOtp: async (phone: string, otp: string) => {
    await new Promise((r) => setTimeout(r, 600));
    return otp === "123456";
  },
  
  updatePassword: async (phone: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    return true;
  }
};
