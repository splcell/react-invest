import { Link } from "react-router-dom";
import styles from "./NewsItem.module.scss";
import { GiBearFace } from "react-icons/gi";
import { GiBull } from "react-icons/gi";
import { formatDate } from "../../../../helpers/formatDate";

export const NewsItem = ({ feed }) => {
  return (
    <div className={styles.newsWrapper}>
      <div>
        <Link to={feed.url} target='blank' className={styles.newsItemLink}>
          {feed.title.length < 150
            ? feed.title
            : feed.title.slice(0, 150) + "..."}
        </Link>
      </div>
      <div className={styles.newsTickers}>
        {feed?.ticker_sentiment?.slice(0, 9).map((item, index) => (
          <Link
            to={`/profile/${item.ticker}`}
            key={index}
            className={styles.newsTicker}
          >
            {item.ticker}
          </Link>
        ))}
      </div>
      <div className={styles.sentimentBox}>
        <span className={styles.sentimentTitle}>News Sentiment:</span>
        {feed.overall_sentiment_label === "Somewhat-Bullish" ||
        feed.overall_sentiment_label === "Bullish" ? (
          <>
            <GiBull style={{ color: "#037b66" }} />
            <span
              className={styles.sentimentLabel}
              style={{ color: "#037b66" }}
            >
              {feed.overall_sentiment_label}
            </span>
          </>
        ) : feed.overall_sentiment_label === "Neutral" ? (
          <span className={styles.sentimentNeutral}>Neutral</span>
        ) : (
          <>
            <GiBearFace
              className={styles.bearIcon}
              style={{ color: "#d60a22" }}
            />
            <span
              className={styles.sentimentLabel}
              style={{ color: "#037b66" }}
            >
              {feed.overall_sentiment_label}
            </span>
          </>
        )}
      </div>
      <span className={styles.newsDate}>Published: {formatDate(feed?.time_published)}</span>
    </div>
  );
};
