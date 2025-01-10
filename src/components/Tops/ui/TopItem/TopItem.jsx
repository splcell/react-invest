import { useNavigate } from "react-router-dom";
import styles from "./TopItem.module.scss";
import cn from 'classnames'

export const TopItem = ({ topArr }) => {
  const navigate = useNavigate()

  return (
    <ul>
      <li className={styles.topList}>
        <span>Symbol</span>
        <span>Price</span>
        <span>Change%</span>
      </li>
      {topArr?.map((top, index) => (
        <li key={index} className={styles.list} onClick={() => navigate(`/profile/${top.symbol}`)}>
        <span className={styles.ticker}>{top.ticker}</span>
        <span>{Number(top.price).toFixed(1)}</span>
        <span className={cn(styles.change, {
          [styles.positive]: top.change_amount > 0,
          [styles.negative]: top.change_amount < 0
        })}>{Number(top.change_percentage.replace('%', '')).toFixed(1)}</span>
      </li>
      ))}
    </ul>
  );
};
