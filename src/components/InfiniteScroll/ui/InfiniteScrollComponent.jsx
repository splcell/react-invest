import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./InfiniteScrollComponent.module.scss";
import { Preloader } from "../../Preloader/ui/Preloader";

export const InfiniteScrollComponent = ({
  children,
  endMessage,
  arr,
  resp,
  hasMore,
  height
}) => {
  return (
    <InfiniteScroll
      dataLength={arr.length}
      next={resp}
      hasMore={hasMore}
      loader={<Preloader />}
      endMessage={endMessage}
      scrollThreshold={0.95}
      height={height}
      className={styles.scroll}
    >
      {children}
    </InfiniteScroll>
  );
};
