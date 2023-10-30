import { create } from 'zustand'

interface jwtState {
  token: string
  store: (token: string) => void
}

export const useJwtStore = create<jwtState>()((set) => ({
  token: '',
  store: (token) => set({token}),
}))