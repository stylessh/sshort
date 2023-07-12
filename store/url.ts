import { create } from "zustand"

interface UrlStore {
  storedUrls: Url[]
  addUrl: (url: Url) => void

  getUrls: () => void
}

export const useUrlStore = create<UrlStore>((set) => ({
  storedUrls: [],
  addUrl: (url: Url) =>
    set((state) => ({ storedUrls: [...state.storedUrls, url] })),

  getUrls: () => {
    const urls = localStorage.getItem("sshorten-urls")

    if (urls) {
      set((state) => ({ storedUrls: JSON.parse(urls) }))
    }
  },
}))
