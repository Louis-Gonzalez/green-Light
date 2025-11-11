export function useTheme() {
    const theme = useState<'light' | 'dark'>('theme', () => 'light');

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme.value);
        localStorage.setItem('theme', theme.value);
    };

    const initTheme = () => {
        const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (saved) {
            theme.value = saved;
            document.documentElement.setAttribute('data-theme', saved);
        }
    };

    return { theme, toggleTheme, initTheme };
}
