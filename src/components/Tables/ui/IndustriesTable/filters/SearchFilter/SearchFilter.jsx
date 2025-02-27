import styles from "./SearchFilter.module.scss";
import { memo } from "react";

export const SearchFilter = memo(({ value, setValue, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={styles.searchFilter}
    />
  );
});
