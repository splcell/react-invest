
import styles from "./MarketInfo.module.scss";
import cn from "classnames";

export const MarketInfo = ({ profile, data }) => {
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <img
          src={profile.image}
          alt={profile.companyName}
          className={styles.logo}
        />
        <span
          className={cn(styles.companyName, {
            [styles.textHidden]: profile.companyName?.length > 15,
          })}
        >
          {profile.companyName?.length <= 15 ? (
            profile.companyName
          ) : (
            <abbr title={profile.companyName}>{profile.companyName}</abbr>
          )}
        </span>
      </div>
      <div className={styles.changes}>
        {data?.map((item, index) => (
          <div key={index}>
            <span
              className={cn(styles.price, {
                [styles.positivePrice]: profile.price > item?.previousClose,
                [styles.negativePrice]: profile.price < item?.previousClose,
              })}
            >
              {Number(profile.price).toFixed(2)} {profile.currency}
            </span>
            <span
              className={cn(styles.changePercantage, {
                [styles.negative]: profile.price < item?.previousClose,
                [styles.positive]: profile.price > item?.previousClose,
              })}
            >
              {item?.changesPercentage.toFixed(2) + "%"}
            </span>
            <span
              className={cn(styles.change, {
                [styles.positivePrice]: profile.price > data[0]?.previousClose,
                [styles.negativePrice]: profile.price < data[0]?.previousClose,
              })}
            >
              {item?.change.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
