import { ContentBox } from "../../ContentBox";
import styles from "./Reports.module.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoChevronDownOutline } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AnnualBalanceChart } from "./AnnualReports/AnnualBalanceChart/AnnualBalanceChart";
import { AnnualBalanceTable } from "./AnnualReports/AnnualBalanceTable/AnnualBalanceTable";
import { QuarterlyBalanceChart } from "./QuarterlyReports/QuarterlyBalanceChart/QuarterlyBalanceChart";
import { QuarterlyBalanceTable } from "./QuarterlyReports/QuarterlyBalanceTable/QuarterlyBalanceTable";
import { useGetReportsQuery } from "../../../redux/reportsApi";
import { AnnualIncomeChart } from "./AnnualReports/AnnualIncomeChart/AnnualIncomeChart";
import { AnnualIncomeTable } from "./AnnualReports/AnnualIncomeTable/AnnualIncomeTable";
import { QuarterlyIncomeChart } from "./QuarterlyReports/QuarterlyIncomeChart/QuarterlyIncomeChart";
import { QuarterlyIncomeTable } from "./QuarterlyReports/QuarterlyIncomeTable/QuarterlyIncomeTable";
import { AnnualCashFlowChart } from "./AnnualReports/AnnualCashFlowChart/AnnualCashFlowChart";
import { AnnualCashFlowTable } from "./AnnualReports/AnnualCashFlowTable/AnnualCashFlowTable";
import { QuarterlyCashFlowChart } from "./QuarterlyReports/QuarterlyCashFlowChart/QuarterlyCashFlowChart";
import { QuarterlyCashFlowTable } from "./QuarterlyReports/QuarterlyCashFlowTable/QuarterlyCashFlowTable";

export const Reports = ({ ticker, profile }) => {
  const { data: annualData } = useGetReportsQuery({ ticker, period: "annual" });
  const { data: quarterlyData } = useGetReportsQuery({
    ticker,
    period: "quarterly",
  });

  console.log(annualData, "reportsData");

  return (
    <ContentBox title="Financial Results" className={styles.reportsWrapper}>
      <Accordion>
        <AccordionItem
          header={
            <>
              Balance Sheet
              <IoChevronDownOutline />
            </>
          }
          className={styles.header}
          initialEntered
        >
          <Tabs>
            <TabList className={styles.tabsList}>
              <Tab className={styles.reportsTab}>Annual</Tab>
              <Tab className={styles.reportsTab}>Quarterly</Tab>
            </TabList>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <AnnualBalanceChart
                  balance={annualData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <AnnualBalanceTable balance={annualData} profile={profile} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <QuarterlyBalanceChart
                  balance={quarterlyData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <QuarterlyBalanceTable
                  balance={quarterlyData}
                  profile={profile}
                />
              </div>
            </TabPanel>
          </Tabs>
        </AccordionItem>
        <AccordionItem
          header={
            <>
              Income Statement
              <IoChevronDownOutline />
            </>
          }
          className={styles.header}
        >
          <Tabs>
            <TabList className={styles.tabsList}>
              <Tab className={styles.reportsTab}>Annual</Tab>
              <Tab className={styles.reportsTab}>Quarterly</Tab>
            </TabList>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <AnnualIncomeChart
                  income={annualData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <AnnualIncomeTable profile={profile} income={annualData} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <QuarterlyIncomeChart
                  income={quarterlyData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <QuarterlyIncomeTable
                  income={quarterlyData}
                  profile={profile}
                />
              </div>
            </TabPanel>
          </Tabs>
        </AccordionItem>
        <AccordionItem
          header={
            <>
              CashFlow Statement
              <IoChevronDownOutline />
            </>
          }
          className={styles.header}
        >
          <Tabs>
            <TabList className={styles.tabsList}>
              <Tab className={styles.reportsTab}>Annual</Tab>
              <Tab className={styles.reportsTab}>Quarterly</Tab>
            </TabList>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <AnnualCashFlowChart
                  cashFlow={annualData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <AnnualCashFlowTable cashFlow={annualData} profile={profile} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <QuarterlyCashFlowChart
                  cashFlow={quarterlyData?.results}
                  profile={profile}
                />
              </div>
              <div className={styles.tableWrapper}>
                <QuarterlyCashFlowTable
                  cashFlow={quarterlyData}
                  profile={profile}
                />
              </div>
            </TabPanel>
          </Tabs>
        </AccordionItem>
      </Accordion>
    </ContentBox>
  );
};
