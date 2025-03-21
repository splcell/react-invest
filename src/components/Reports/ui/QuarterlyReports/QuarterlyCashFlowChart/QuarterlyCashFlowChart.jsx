import { useState, useEffect } from "react";
import { Chart } from "../../../../Chart";

export const QuarterlyCashFlowChart = ({ cashFlow, profile }) => {
  const [categories, setCategories] = useState([]);
  const [changeCash, setChangeCash] = useState([]);
  const chartColor = ["#434348"];

  useEffect(() => {
    if (cashFlow?.length) {
      const newChartData = [];
      const newCategories = [];

      for (let i = 0; i < cashFlow.length; i++) {
        const changeCash = Number(
          Number(
            cashFlow[i]?.financials?.cash_flow_statement?.net_cash_flow?.value
          ) / 1000000
        );
        newChartData.unshift(changeCash);
        newCategories.unshift(
          cashFlow[i].fiscal_period +
            " " +
            new Date(cashFlow[i].fiscal_year).getFullYear().toString()
        );
      }

      setChangeCash(newChartData);
      setCategories(newCategories);
    }
  }, [cashFlow]);

  return (
    <Chart
      chartData={changeCash}
      categories={categories}
      text={`Net Cash Flow (mln ${profile.currency})`}
      type="column"
      color={chartColor}
      rangeSelectorStatus={false}
      navigatorStatus={false}
      scrollBarStatus={false}
      width={590}
      height={300}
      pointWidth={20}
      // legend={false}
      data-testid="quarterlyCashFlow"
    />
  );
};
