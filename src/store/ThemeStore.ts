import { create } from 'zustand'

type ThemeState = {
    isDarkMode: boolean
    toggleDarkMode: () => void
    setDarkMode: (value: boolean) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: localStorage.getItem('theme') === 'dark',
    toggleDarkMode: () =>
        set((state) => {
            const newTheme = !state.isDarkMode
            localStorage.setItem('theme', newTheme ? 'dark' : 'light')
            document.documentElement.classList.toggle('dark', newTheme)
            return { isDarkMode: newTheme }
        }),
    setDarkMode: (value) => {
        localStorage.setItem('theme', value ? 'dark' : 'light')
        document.documentElement.classList.toggle('dark', value)
        set({ isDarkMode: value })
    },
}))
