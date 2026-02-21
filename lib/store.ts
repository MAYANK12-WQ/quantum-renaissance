import { create } from 'zustand'

export type SiteState =
  | 'DEFAULT'
  | 'SERVICES_FOCUS'
  | 'CONCIERGE_FOCUS'
  | 'FOUNDER_FOCUS'
  | 'RAG_DEMO'
  | 'SEARCHING'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

interface QRStore {
  siteState: SiteState
  setSiteState: (state: SiteState) => void
  ragAnimationActive: boolean
  setRAGAnimation: (active: boolean) => void
  voiceTranscript: string
  setVoiceTranscript: (t: string) => void
  chatMessages: ChatMessage[]
  addChatMessage: (msg: ChatMessage) => void
}

export const useQRStore = create<QRStore>((set) => ({
  siteState: 'DEFAULT',
  setSiteState: (siteState) => set({ siteState }),
  ragAnimationActive: false,
  setRAGAnimation: (ragAnimationActive) => set({ ragAnimationActive }),
  voiceTranscript: '',
  setVoiceTranscript: (voiceTranscript) => set({ voiceTranscript }),
  chatMessages: [],
  addChatMessage: (msg) =>
    set((state) => ({ chatMessages: [...state.chatMessages, msg] })),
}))
