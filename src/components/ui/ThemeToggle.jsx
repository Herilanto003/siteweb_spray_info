import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-600 text-white dark:bg-yellow-400 dark:text-black"
    >
      {theme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre"}
    </button>
  );
}
