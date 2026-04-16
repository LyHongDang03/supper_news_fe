import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "@/services/auth.service";

// ── Types ─────────────────────────────────────────────────────────────────
interface AuthUser {
  phone: string;
  displayName: string;
  initial: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (phone: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

// ── Store ─────────────────────────────────────────────────────────────────
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (phone, password) => {
        const response = await authService.login(phone, password);

        if (response.success && response.user) {
          set({
            isAuthenticated: true,
            user: response.user,
          });
          return { success: true };
        }

        return { success: false, message: response.message };
      },

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
