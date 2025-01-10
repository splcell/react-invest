import styles from "./ThemeSwitcher.module.scss";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeSwitcher = () => {
  const currentTheme = localStorage.getItem("currentTheme") === "true";
  const [isDark, setIsDark] = useState(currentTheme);
  const ThemeIcon = isDark ? FiSun : FiMoon;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("currentTheme", isDark);
  }, [isDark]);


  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
