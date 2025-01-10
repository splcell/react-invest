import { ContentBox } from "../../../ContentBox";
import { ContentWrapper } from "../../../ContentWrapper/ui/ContentWrapper";
import { TopItem } from "../TopItem/TopItem";
import styles from "./TopGainers.module.scss";

export const TopGainers = ({ topArr, isLoading, isError }) => {
  

  return (
    <ContentBox title="Top Gainers" className={styles.gainersBox}>
      <ContentWrapper
        isLoading={isLoading}
        isError={isError}
        errorText="Tickers not Found"
      >
        <TopItem topArr={topArr} />
      </ContentWrapper>
    </ContentBox>
  );
};
