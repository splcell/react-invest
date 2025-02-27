import { Link } from "react-router-dom";
import { useGetCompanyNewsQuery } from "../../../../redux/reportsApi";
import { ContentBox } from "../../../ContentBox";
import { ContentWrapper } from "../../../ContentWrapper/ui/ContentWrapper";
import styles from "./CompanyNews.module.scss";
import { GiBearFace } from "react-icons/gi";
import { GiBull } from "react-icons/gi";
import { Tooltip } from "../../../Tooltip/ui/Tooltip";

export const CompanyNews = ({ ticker }) => {
  const { data, isLoading, isError } = useGetCompanyNewsQuery({ ticker });

  console.log(data, "news");

  return (
    <ContentBox title="News" variant="no-border" className={styles.newsWrapper}>
      <ContentWrapper
        isLoading={isLoading}
        isError={isError || data?.results?.length === 0}
        errorText="Company News not Found"
      >
        <div className={styles.newsBox}>
          {data?.results?.map((news) => (
            <Link
              key={news?.id}
              to={news?.publisher?.homepage_url}
              className={styles.newsLink}
            >
              <div className={styles.newsInner}>
                <img
                  src={
                    news?.image_url
                      ? news.image_url
                      : `https://dummyimage.com/160x107/fff/aaa`
                  }
                  alt={""}
                  className={styles.newsImg}
                />
                <div>
                  <h3
                    className={styles.newsTitle}
                    title={news.title.length > 50 ? news.title : ""}
                  >
                    {news.title.length < 50
                      ? news.title
                      : news.title.slice(0, 50) + "..."}
                  </h3>
                  <span className={styles.publisher}>
                    <span>Publisher: {news?.publisher?.name}</span>
                    <span>{news?.published_utc.split("T")[0]}</span>
                  </span>
                  <span className={styles.sentiment}>
                    Sentiment:{" "}
                    {
                      news?.insights?.find(
                        (item) =>
                          String(item?.ticker.toUpperCase()) ===
                          ticker.toUpperCase()
                      )?.sentiment
                    }
                    {news?.insights?.find(
                      (item) =>
                        String(item?.ticker.toUpperCase()) ===
                        ticker.toUpperCase()
                    )?.sentiment_reasoning && (
                      <Tooltip
                        id={news.id}
                        text={
                          news?.insights?.find(
                            (item) =>
                              String(item?.ticker.toUpperCase()) ===
                              ticker.toUpperCase()
                          )?.sentiment_reasoning
                        }
                      />
                    )}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContentWrapper>
    </ContentBox>
  );
};

//sentiment_reasoning
