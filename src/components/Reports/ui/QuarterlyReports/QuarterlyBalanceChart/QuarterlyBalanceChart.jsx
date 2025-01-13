import { useState, useEffect } from "react";
import { Chart } from "../../../../Chart";

export const QuarterlyBalanceChart = ({ balance, profile }) => {
  const [quarterlyAssets, setAnnualAssets] = useState([]);
  const [quarterlyDebt, setAnnualDebt] = useState([]);
  const [categories, setCategories] = useState([]);
  const chartColor = ["#434348", "#EFAF0A"];

  useEffect(() => {
    if (balance?.length) {
      const newChartData = [];
      const newChartData2 = [];
      const newCategories = [];
      for (let i = 0; i < balance.length; i++) {
        const assets = Number(Number(balance[i]?.financials?.balance_sheet?.assets?.value) / 1000000);
        const debt = Number(balance[i]?.financials?.balance_sheet?.liabilities?.value) / 1000000;
        newChartData.unshift(assets);
        newChartData2.unshift(debt);
        newCategories.unshift(
          balance[i]?.fiscal_period +
            " " +
            new Date(balance[i]?.fiscal_year).getFullYear().toString()
        );
      }

      setAnnualAssets(newChartData);
      setAnnualDebt(newChartData2);
      setCategories(newCategories);
    }
  }, [balance]);

  return (
    <Chart
      chartData={quarterlyAssets}
      chartData2={quarterlyDebt}
      categories={categories}
      text={`Assets (mln ${profile.currency})`}
      text2={`Liabilities (mln ${profile.currency})`}
      type="column"
      color={chartColor}
      rangeSelectorStatus={false}
      navigatorStatus={false}
      scrollBarStatus={false}
      width={590}
      height={300}
      pointWidth={20}
      data-testid="quarterlyBalance"
    />
  );
};
