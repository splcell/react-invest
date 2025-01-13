import {useState, useEffect} from 'react';
import { Chart } from "../../../../Chart";

export const AnnualIncomeChart = ({income, profile}) => {
  const [annualRevenue, setAnnualRevenue] = useState([])
  const [annualIncome, setAnnualIncome] = useState([])
  const [categories, setCategories] = useState([]);
  const chartColor = ["#434348", "#EFAF0A"];

  useEffect(() => {
    if (income?.length) {
        const newChartData = [];
        const newChartData2 = [];
        const newCategories = [];
        for (let i = 0; i < income.length; i++) {
            const revenue = Number(Number(income[i].financials?.income_statement?.revenue) / 1000000);
            const netIncome = Number(income[i].financials?.income_statement?.net_income_loss) / 1000000;
            newChartData.unshift(revenue);
            newChartData2.unshift(netIncome);
            newCategories.unshift(new Date(income[i].calendarYear).getFullYear());
        }

        setAnnualRevenue(newChartData);
        setAnnualIncome(newChartData2);
        setCategories(newCategories);
    }
}, [income]);


  return(
    <Chart
      chartData={annualRevenue}
      chartData2={annualIncome}
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
      data-testid="annualIncome"
    />
  )
}