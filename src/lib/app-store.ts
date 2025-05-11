import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Gerador simples de ID
const generateId = () => crypto.randomUUID();

export type User = {
  id: string;
  rg: string;
  cpf: string;
  nome: string;
  email: string;
  ativo: boolean;
  telefone: string;
  isWhatsapp: boolean;
};

interface UserStore {
  users: User[];
  isHydrated: boolean;
  addUser: (user: Omit<User, "id">) => void;
  removeUser: (id: string) => void;
  clearUsers: () => void;
  setIsHydrated: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      users: [],
      isHydrated: false,
      addUser: (userData) =>
        set((state) => ({
          users: [...state.users, { id: generateId(), ...userData }],
        })),
      removeUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
      clearUsers: () => set({ users: [] }),
      setIsHydrated: (value) => set({ isHydrated: value }),
    }),
    {
      name: "pixelboom-users-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setIsHydrated(true);
      },
    }
  )
);
