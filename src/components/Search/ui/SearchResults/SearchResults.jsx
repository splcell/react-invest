import styles from "./SearchResults.module.scss";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const SearchResults = ({ data, setValue }) => {
  const navigate = useNavigate();

  const goToProfileHandler = useCallback((ticker) => {
    navigate(`/profile/${ticker}`);
    setValue("");
  }, []);

  return (
    <div className={styles.resultsWrapper}>
      <table className={styles.results}>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Name</th>
            <th>Exchange</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data?.slice(0, 10).map((result) => (
            <tr
              key={result.symbol}
              onClick={() => goToProfileHandler(result.symbol)}
            >
              <td>{result.symbol}</td>
              <td>{result.name}</td>
              <td>{result.exchangeShortName}</td>
              <td>{result.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length > 10 && <span>All results</span>}
    </div>
  );
};
