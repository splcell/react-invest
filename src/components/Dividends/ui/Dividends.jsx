import { useLazyGetDividendsQuery } from "../../../redux/reportsApi";
import { ContentBox } from "../../ContentBox";
import { ContentWrapper } from "../../ContentWrapper/ui/ContentWrapper";
import styles from "./Dividends.module.scss";
import { useState, useEffect, useCallback } from "react";
import { InfiniteScrollComponent } from "../../InfiniteScroll";
import { DividendsTable } from "./DividendsTable/DividendsTable";


export const Dividends = ({ ticker, profile }) => {
  const [getDividends, { data, isLoading, isError }] =
    useLazyGetDividendsQuery();
  const [dividends, setDividends] = useState([]);
  const [cursor, setCursor] = useState(null);

  const getDividendsHandler = useCallback(() => {
    if (ticker) {
      getDividends({
        ticker,
        cursor: cursor || undefined, // передаем cursor только если он существует
      });
    }
  }, [ticker, cursor]);

  useEffect(() => {
    if(ticker){
      getDividendsHandler();
    }
  }, [ticker]);

  useEffect(() => {
    if (data && data.results) {
      setDividends((prevDividends) => [...prevDividends, ...data.results]); // добавляем новые данные к существующим
    }
    if (data && data.next_url) {
      const newCursor = data.next_url.split("cursor=")[1];
      setCursor(newCursor);
    }
  }, [data]);

  console.log(cursor, "curaor");

  return (
    <ContentBox title="Dividends" variant="no-border">
      <ContentWrapper
        isLoading={isLoading}
        isError={isError || dividends.length === 0}
        errorText="Dividends Info not Found"
      >
        <InfiniteScrollComponent
          arr={dividends}
          resp={getDividendsHandler}
          hasMore={cursor !== null || cursor !== ''}
          endMessage="No more Dividends"
          height={500}
        >
          <DividendsTable dividends={dividends} profile={profile} />
        </InfiniteScrollComponent>
      </ContentWrapper>
    </ContentBox>
  );
};
