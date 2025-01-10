import { Search } from "../../Search/ui/Search";
import { ThemeSwitcher } from "../../ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to={"/"} className={styles.headerLink}>
          Investments
        </Link>
        <Search />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
