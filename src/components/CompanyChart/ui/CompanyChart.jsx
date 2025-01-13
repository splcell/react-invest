import { useState, useEffect, memo } from "react";
import { useLazyGetChartDataQuery } from "../../../redux/investmentsApi";
import Highcharts from "highcharts/highstock.src.js";
import HighchartsReact from "highcharts-react-official";

export const CompanyChart = ({ profile, ticker }) => {
  const [getChartData] = useLazyGetChartDataQuery();
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const options = {
    chart: {
      width: 640,
      height: 400,
    },

    title: {},

    subtitle: {},

    rangeSelector: {
      selected: 0,
    },

    xAxis: {
      min: null,
      max: null,
    },

    series: [
      {
        name: `${profile?.companyName} Stock Price`,
        data: chartData,
        type: "area",
        threshold: null,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],

    colors: ["#4e4e4e"],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: 300,
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
    if (ticker) {
      setIsLoading(true);
      getChartData({ ticker })
        .then((data) => {
          console.log(data, 'resp data')
          let historicalPrices = [];
          for (let i = 0; i < data?.data?.historical?.length; i++) {
            if (data?.data?.historical[i]?.close > 0) {
              historicalPrices.unshift([
                new Date(data?.data?.historical[i]?.date).getTime(),
                data?.data?.historical[i]?.close,
              ]);
            }
          }

          setChartData(historicalPrices);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [ticker]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"stockChart"}
    />
  );
};
