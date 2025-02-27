import styles from './DividendsTable.module.scss'

export const DividendsTable = ({ dividends, profile }) => {
  return (
    <table className={styles.dividendsTable}>
      <thead>
        <tr>
          <th>Declaration Date</th>
          <th>Record Date</th>
          <th>Ex-Dividend Date</th>
          <th>Pay Date</th>
          <th>Cash Amount</th>
        </tr>
      </thead>
      <tbody>{dividends.map(dividend => (
        <tr key={dividend?.id}>
          <td>{dividend?.declaration_date}</td>
          <td>{dividend?.record_date}</td>
          <td>{dividend?.ex_dividend_date}</td>
          <td>{dividend?.pay_date}</td>
          <td>{dividend?.cash_amount}  {profile?.currency}</td>
        </tr>
      ))}</tbody>
    </table>
  );
};
