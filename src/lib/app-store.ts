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
  isModalUserOpen: boolean;
  userToEdit: User | null;

  addUser: (user: Omit<User, "id">) => void;
  removeUser: (id: string) => void;
  clearUsers: () => void;
  setIsHydrated: (value: boolean) => void;

  openForm: (user?: User) => void;
  closeForm: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      isHydrated: false,
      isModalUserOpen: false,
      userToEdit: null,

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

      openForm: (user) =>
        set({
          isModalUserOpen: true,
          userToEdit: user,
        }),

      closeForm: () =>
        set({
          isModalUserOpen: false,
          userToEdit: null,
        }),
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
