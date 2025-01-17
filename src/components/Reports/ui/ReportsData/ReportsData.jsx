import { memo, useMemo, useCallback } from "react";
import { convertData } from "../../../../helpers/convertData";
import styles from "./ReportsData.module.scss";

export const ReportsData = memo(({ report, reportType, period, profile }) => {
  // const tableData = useMemo(() => {
  //   let newData;

  //   switch (reportType) {
  //     case "Balance":
  //       newData = {
  //         "Cash and Cash Equivalents": [],
  //         "Short Term Investments": [],
  //         "Cash and Short Term Investments": [],
  //         "Net Receivables": [],
  //         Inventory: [],
  //         "Other Current Assets": [],
  //         "Total Current Assets": [],
  //         "Property Plant EquipmentNet": [],
  //         "Intangible Assets": [],
  //         Goodwill: [],
  //         "Long Term Investments": [],
  //         "Other Non Current Assets": [],
  //         "Tax Assets": [],
  //         "Total Non Current Assets": [],
  //         "Other Assets": [],
  //         "Account Payables": [],
  //         "Total Assets": [],
  //         "Short Term Debt": [],
  //         "Tax Payables": [],
  //         "Other Current Liabilities": [],
  //         "Total Current Liabilities": [],
  //         "Long Term Debt": [],
  //         "Other non Current Liabilities": [],
  //         "Total non Current Liabilities": [],
  //         "Other Liabilities": [],
  //         "Total Liabilities": [],
  //         "Total Equity": [],
  //         "Other Total Stockholders Equity": [],
  //         "Total Stockholders Equity": [],
  //         "Minority Interest": [],
  //         "Total Debt": [],
  //         "Net Debt": [],
  //         "Common Stock (mln stocks)": [],
  //       };

  //       report?.forEach((item) => {
  //         newData["Cash and Cash Equivalents"].push(
  //           item.cashAndCashEquivalents
  //         );
  //         newData["Short Term Investments"].push(item.shortTermInvestments);
  //         newData["Cash and Short Term Investments"].push(
  //           item.cashAndShortTermInvestments
  //         );
  //         newData["Net Receivables"].push(item.netReceivables);
  //         newData["Inventory"].push(item.inventory);
  //         newData["Total Assets"].push(item.totalAssets);
  //         newData["Short Term Debt"].push(item.shortTermDebt);
  //         newData["Tax Payables"].push(item.taxPayables);
  //         newData["Other Current Liabilities"].push(
  //           item.otherCurrentLiabilities
  //         );
  //         newData["Total Current Liabilities"].push(
  //           item.totalCurrentLiabilities
  //         );
  //         newData["Long Term Debt"].push(item.longTermDebt);
  //         newData["Other non Current Liabilities"].push(
  //           item.otherNonCurrentLiabilities
  //         );
  //         newData["Total non Current Liabilities"].push(
  //           item.totalNonCurrentLiabilities
  //         );
  //         newData["Other Liabilities"].push(item.otherLiabilities);
  //         newData["Total Liabilities"].push(item.totalLiabilities);
  //         newData["Total Equity"].push(item.totalEquity);
  //         newData["Other Total Stockholders Equity"].push(
  //           item.othertotalStockholdersEquity
  //         );
  //         newData["Total Stockholders Equity"].push(
  //           item.totalStockholdersEquity
  //         );
  //         newData["Minority Interest"].push(item.minorityInterest);
  //         newData["Total Debt"].push(item.totalDebt);
  //         newData["Net Debt"].push(item.netDebt);
  //         newData["Common Stock (mln stocks)"].push(item.commonStock);
  //       });

  //       Object.keys(newData).map((key) => {
  //         newData[key].unshift(key);
  //       });

  //       return newData;
  //     case "Income":
  //       newData = {
  //         Revenue: [],
  //         "Cost of Revenue": [],
  //         "Gross Profit": [],
  //         "Gross Profit Ratio %": [],
  //         "Research and Development Expenses": [],
  //         "General and Administrative Expenses": [],
  //         "Selling and Marketing Expenses": [],
  //         "Selling General and Administrative Expenses": [],
  //         "Other Expenses": [],
  //         "Operating Expenses": [],
  //         "Interest Income": [],
  //         "Interest Expense": [],
  //         "Depreciation and Amortization": [],
  //         EBITDA: [],
  //         "EBITDA Ratio %": [],
  //         "Operating Income": [],
  //         "Operating Income Ratio %": [],
  //         "Income Before Tax": [],
  //         "Income Before Tax Ratio %": [],
  //         "Income Tax Expense": [],
  //         "Net Income": [],
  //         "Net Income Ratio %": [],
  //         EPS: [],
  //         "EPS Diluted": [],
  //       };

  //       report?.forEach((item) => {
  //         newData["Revenue"].push(item.revenue);
  //         newData["Cost of Revenue"].push(item.costOfRevenue);
  //         newData["Gross Profit"].push(item.grossProfit);
  //         newData["Gross Profit Ratio %"].push(+item.grossProfitRatio);
  //         newData["Research and Development Expenses"].push(
  //           item.researchAndDevelopmentExpenses
  //         );
  //         newData["General and Administrative Expenses"].push(
  //           item.generalAndAdministrativeExpenses
  //         );
  //         newData["Selling and Marketing Expenses"].push(
  //           item.sellingAndMarketingExpenses
  //         );
  //         newData["Selling General and Administrative Expenses"].push(
  //           item.sellingGeneralAndAdministrativeExpenses
  //         );
  //         newData["Other Expenses"].push(item.otherExpenses);
  //         newData["Operating Expenses"].push(item.operatingExpenses);
  //         newData["Interest Income"].push(item.interestIncome);
  //         newData["Interest Expense"].push(item.interestExpense);
  //         newData["Depreciation and Amortization"].push(
  //           item.depreciationAndAmortization
  //         );
  //         newData["EBITDA"].push(item.ebitda);
  //         newData["EBITDA Ratio %"].push(item.ebitdaratio);
  //         newData["Operating Income"].push(item.operatingIncome);
  //         newData["Operating Income Ratio %"].push(item.operatingIncomeRatio);
  //         newData["Income Before Tax"].push(item.incomeBeforeTax);
  //         newData["Income Before Tax Ratio %"].push(item.incomeBeforeTaxRatio);
  //         newData["Net Income"].push(item.netIncome);
  //         newData["Net Income Ratio %"].push(item.netIncomeRatio);
  //         newData["EPS"].push(item.eps);
  //         newData["EPS Diluted"].push(item.epsdiluted);
  //       });

  //       Object.keys(newData).map((key) => {
  //         newData[key].unshift(key);
  //       });

  //       return newData;

  //     case "CashFlow":
  //       newData = {
  //         "Net Income": [],
  //         "Depreciation and Amortization": [],
  //         "Deffered Income Tax": [],
  //         "Stock Based Compensation": [],
  //         "Change in Working Capital": [],
  //         "Accounts Receivables": [],
  //         Inventory: [],
  //         "Accounts Payables": [],
  //         "Other Working Capital": [],
  //         "Othen non Cash Items": [],
  //         "Net Cash Provided By Operating Activities": [],
  //         "Investments in Property Plant and Equipment": [],
  //         "Acquisitions Net": [],
  //         "Purchases of Investments": [],
  //         "Sales Maturities of Investments": [],
  //         "Other Investing Activites": [],
  //         "Net Cash Used for Investing Activites": [],
  //         "Debt Repayment": [],
  //         "Common Stock Issued": [],
  //         "Common Stock Repurchased": [],
  //         "Dividends Paid": [],
  //         "Other Financing Activities": [],
  //         "Net Cash Used Provided by Financing Activities": [],
  //         "Operating Cash Flow": [],
  //         "Capital Expenditure": [],
  //         "Free Cash Flow": [],
  //       };

  //       report?.forEach((item) => {
  //         newData["Net Income"].push(item.netIncome);
  //         newData["Depreciation and Amortization"].push(
  //           item.depreciationAndAmortization
  //         );
  //         newData["Deffered Income Tax"].push(item.deferredIncomeTax);
  //         newData["Stock Based Compensation"].push(item.stockBasedCompensation);
  //         newData["Change in Working Capital"].push(
  //           item.changeInWorkingCapital
  //         );
  //         newData["Accounts Receivables"].push(item.accountsReceivables);
  //         newData["Inventory"].push(item.inventory);
  //         newData["Accounts Payables"].push(item.accountsPayables);
  //         newData["Other Working Capital"].push(item.otherWorkingCapital);
  //         newData["Othen non Cash Items"].push(item.otherNonCashItems);
  //         newData["Net Cash Provided By Operating Activities"].push(
  //           item.netCashProvidedByOperatingActivities
  //         );
  //         newData["Investments in Property Plant and Equipment"].push(
  //           item.investmentsInPropertyPlantAndEquipment
  //         );
  //         newData["Acquisitions Net"].push(item.acquisitionsNet);
  //         newData["Purchases of Investments"].push(item.purchasesOfInvestments);
  //         newData["Sales Maturities of Investments"].push(
  //           item.salesMaturitiesOfInvestments
  //         );
  //         newData["Other Investing Activites"].push(
  //           item.otherInvestingActivites
  //         );
  //         newData["Net Cash Used for Investing Activites"].push(
  //           item.netCashUsedForInvestingActivites
  //         );
  //         newData["Debt Repayment"].push(item.debtRepayment);
  //         newData["Common Stock Issued"].push(item.commonStockIssued);
  //         newData["Common Stock Repurchased"].push(item.commonStockRepurchased);
  //         newData["Dividends Paid"].push(item.dividendsPaid);
  //         newData["Other Financing Activities"].push(
  //           item.otherFinancingActivities
  //         );
  //         newData["Net Cash Used Provided by Financing Activities"].push(
  //           item.netCashUsedProvidedByFinancingActivities
  //         );
  //         newData["Operating Cash Flow"].push(item.operatingCashFlow);
  //         newData["Capital Expenditure"].push(item.capitalExpenditure);
  //         newData["Free Cash Flow"].push(item.freeCashFlow);
  //       });

  //       Object.keys(newData).map((key) => {
  //         newData[key].unshift(key);
  //       });

  //       return newData;
  //   }

  //   return null;
  // }, [report, reportType]);

  const renderItem = useCallback((item, key) => {
    if (typeof item !== "string") {
      if (typeof item === "number" && item.toString().includes(".")) {
        if (typeof key[0] === "string" && key[0].indexOf("EPS") === -1) {
          return (item * 100).toFixed(1);
        }
      } else {
        return convertData(item);
      }
    }

    if (
      typeof key[0] === "string" &&
      key[0].indexOf("EPS") !== -1 &&
      typeof item !== "number"
    ) {
      return (
        <>
          {item} ({profile?.currency})
        </>
      );
    }

    return item;
  }, []);

  const tableData = useMemo(() => {
    let newData = {};
    switch (reportType) {
      case "Balance":
        report.forEach((item) => {
          if (item?.financials?.balance_sheet) {
            Object.keys(item.financials.balance_sheet).forEach((key) => {
              const balanceItem = item.financials.balance_sheet[key];
              const label = balanceItem?.label;
              const value =
                balanceItem?.value !== undefined ? balanceItem.value : "-";

              // Инициализируем массив, если он еще не создан
              if (!newData[label]) {
                newData[label] = [];
              }

              newData[label].push(value);
            });
          }
        });
        break;
      case "Income":
        report.forEach((item) => {
          if (item?.financials?.income_statement) {
            Object.keys(item.financials.income_statement).forEach((key) => {
              const incomeItem = item.financials.income_statement[key];
              const label = incomeItem?.label;
              const value =
                incomeItem?.value !== undefined ? incomeItem.value : "-";

              // Инициализируем массив, если он еще не создан
              if (!newData[label]) {
                newData[label] = [];
              }

              newData[label].push(value);
            });
          }
        });
        break;
      case "Cash Flow":
        report.forEach((item) => {
          if (item?.financials?.cash_flow_statement) {
            Object.keys(item.financials.cash_flow_statement).forEach((key) => {
              const cashFlowItem = item.financials.cash_flow_statement[key];
              const label = cashFlowItem?.label;
              const value =
                cashFlowItem?.value !== undefined ? cashFlowItem.value : "-";

              if (!newData[label]) {
                newData[label] = [];
              }

              newData[label].push(value);
            });
          }
        });
        break;
    }
    return newData;
  }, [report, reportType]);

  if (period === "quarterly") {
    return (
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>
              {reportType} Quarterly (mln {profile?.currency})
            </th>
            {report?.map((item) => (
              <th key={item.date}>{`${item.fiscal_period} ${
                item.fiscal_year.split("0")[1]
              }`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(tableData).map((key) => (
            <>
              {tableData[key] && tableData[key].length > 1 ? (
                <tr key={key}>
                  <td title={key.length > 30 && key}>
                    {key.length > 30 ? key.slice(0, 30) + "..." : key}
                  </td>
                  {tableData[key].map((item, index) => (
                    <>
                      <td align="center" key={index}>
                        {renderItem(item, tableData[key])}
                      </td>
                    </>
                  ))}
                </tr>
              ) : null}
            </>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th>
            {reportType} Annual (mln {profile?.currency})
          </th>
          {report?.map((item) => (
            <th key={item.date}>{item.fiscal_year}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((key) => (
          <>
            {tableData[key] && tableData[key].length > 1 ? (
              <tr key={key}>
                <td title={key.length > 30 && key}>
                  {key.length > 30 ? key.slice(0, 30) + "..." : key}
                </td>
                {tableData[key].map((item, index) => (
                  <>
                    <td align="center" key={index}>
                      {renderItem(item, tableData[key])}
                    </td>
                  </>
                ))}
              </tr>
            ) : null}
          </>
        ))}
      </tbody>
    </table>
  );
});
