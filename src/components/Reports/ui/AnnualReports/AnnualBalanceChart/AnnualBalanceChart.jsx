import { useState, useEffect } from "react";
import { Chart } from "../../../../Chart";

export const AnnualBalanceChart = ({ balance, profile }) => {
  const [annualAssets, setAnnualAssets] = useState([]);
  const [annualDebt, setAnnualDebt] = useState([]);
  const [categories, setCategories] = useState([]);
  const chartColor = ["#434348", "#EFAF0A"];

  useEffect(() => {
    if (balance?.length) {
      const newChartData = [];
      const newChartData2 = [];
      const newCategories = [];
      for (let i = 0; i < balance?.length; i++) {
        const assets = Number(balance[i]?.financials?.balance_sheet?.assets?.value / 1000000);
        const debt = Number(balance[i]?.financials?.balance_sheet?.liabilities?.value) / 1000000;
        newChartData.unshift(assets);
        newChartData2.unshift(debt);
        newCategories.unshift(new Date(balance[i]?.fiscal_year).getFullYear());
      }

      setAnnualAssets(newChartData);
      setAnnualDebt(newChartData2);
      setCategories(newCategories);
    }
  }, [balance]);

  return (
    <Chart
      chartData={annualAssets}
      chartData2={annualDebt}
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
      data-testid="annualBalance"
    />
  );
};
