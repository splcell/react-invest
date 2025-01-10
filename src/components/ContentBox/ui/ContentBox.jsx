import styles from "./ContentBox.module.scss";
import cn from "classnames";

export const ContentBox = ({
  title,
  children,
  variant = "border",
  className
}) => {

  

  return (
    <div className={cn(styles.contentBox, className, {
      [styles.noBorder]: variant === 'no-border'
    })}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {children}
    </div>
  );
};
