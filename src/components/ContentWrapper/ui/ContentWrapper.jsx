import { Preloader } from "../../Preloader/ui/Preloader";
import { Error } from "../../Error";
import styles from './ContentWrapper.module.scss'

export const ContentWrapper = ({
  isLoading,
  isError,
  errorText,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <Preloader className={styles.preloader}/>
      ) : isError ? (
        <Error errorText={errorText} className={styles.error}/>
      ) : (
        children
      )}
    </>
  );
};
