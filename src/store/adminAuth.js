import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create Zustand store
const useAuthStore = create(
  persist(
    (set) => ({
      user: null, // Store user details
      token: null, // Store auth token
      isAuthenticated: false, // Login status
      // Login function
      login: (token) => set({ token:token }),
      // Logout function (clears data)
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage", // Local storage key
      getStorage: () => localStorage, // Persist in localStorage
    }
  )
);

export default useAuthStore;
