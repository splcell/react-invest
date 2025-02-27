import { useState, useEffect } from "react";
import { Chart } from "../../../Chart";

export const DividendsChart = ({ dividends, profile }) => {
  const chartColor = ["#434348", "#EFAF0A"];
  const [history, setHistory] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (dividends.length > 0) {
      const newChartData = [];
      const newCategories = [];

      for (let i = 0; i < dividends.length; i++) {
        const dividendsInfo = dividends[i].cash_amount;
        newChartData.unshift(dividendsInfo);
        newCategories.unshift(new Date(dividends[i].pay_date).getFullYear());
      }

      setHistory(newChartData);
      setCategories(newCategories);
    }
  }, [dividends]);

  console.log(dividends)

  return (
    <Chart
      chartData={history}
      categories={categories}
      color={chartColor}
      text={`Dividend ${profile.currency}`}
      type="column"
      width={590}
      height={400}
      pointWidth={4}
      data-testid="dividendsHistory"
      rangeSelectorStatus={false}
      navigatorStatus={false}
      scrollBarStatus={false}
      legend={false}
    />
  );
};
