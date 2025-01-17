import { useState, useEffect } from "react";
import { Chart } from "../../../../Chart";

export const QuarterlyIncomeChart = ({ income, profile }) => {
  const [quarterlyRevenue, setQuarterlyRevenue] = useState([]);
  const [quarterlyIncome, setQuarterlyIncome] = useState([]);
  const [categories, setCategories] = useState([]);
  const chartColor = ["#434348", "#EFAF0A"];

  useEffect(() => {
    if (income?.length) {
      const newChartData = [];
      const newChartData2 = [];
      const newCategories = [];
      for (let i = 0; i < income.length; i++) {
        const revenue = Number(
          Number(income[i].financials?.income_statement?.revenues?.value) /
            1000000
        );
        const netIncome =
          Number(
            income[i]?.financials?.income_statement?.net_income_loss?.value
          ) / 1000000;
        newChartData.unshift(revenue);
        newChartData2.unshift(netIncome);
        newCategories.unshift(
          income[i].fiscal_period +
            " " +
            new Date(income[i].fiscal_year).getFullYear().toString()
        );
      }

      setQuarterlyRevenue(newChartData);
      setQuarterlyIncome(newChartData2);
      setCategories(newCategories);
    }
  }, [income]);

  return (
    <Chart
      chartData={quarterlyRevenue}
      chartData2={quarterlyIncome}
      categories={categories}
      text={`Revenue (mln ${profile.currency})`}
      text2={`Net Income (mln ${profile.currency})`}
      type="column"
      color={chartColor}
      rangeSelectorStatus={false}
      navigatorStatus={false}
      scrollBarStatus={false}
      width={590}
      height={300}
      pointWidth={20}
      data-testid="quarterlyIncome"
    />
  );
};
