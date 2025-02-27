import { useNavigate } from "react-router-dom";
import { convertData } from "../../../../helpers/convertData";
import styles from "./IndustriesTable.module.scss";

export const IndustriesTable = ({ companies }) => {
  const navigate = useNavigate()

  return (
    <div>
      <table className={styles.table}>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Company Name</th>
          <th>Mkt Cap</th>
          <th>Industry</th>
          <th>Price</th>
          <th>Last Dividend</th>
          <th>Volume</th>
          <th>Exchange</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {companies?.map((company, index) => (
          <tr key={index}>
            <td onClick={() => navigate(`/profile/${company?.symbol}`)}>{company?.symbol}</td>
            <td onClick={() => navigate(`/profile/${company?.symbol}`)}>{company?.companyName}</td>
            <td>{convertData(company?.marketCap)} M</td>
            <td>{company?.industry}</td>
            <td>{company?.price}</td>
            <td>{company?.lastAnnualDividend.toFixed(2)}</td>
            <td>{convertData(company?.volume)} M</td>
            <td>{company?.exchangeShortName}</td>
            <td>{company?.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
