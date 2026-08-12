import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
      className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-cyan-400 border border-neutral-700/80 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md hover:scale-105"
    >
      <span className="material-symbols-outlined text-lg">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
