
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

export const Reports = ({ ticker, profile }) => {
  const {data: annualData} = useGetReportsQuery({ticker, period: 'annual'})
  const {data: quarterlyData} = useGetReportsQuery({ticker, period: 'quarterly'})

  console.log(annualData, 'reportsData')

  return (
    <ContentBox title="Financials Results" className={styles.reportsWrapper}>
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
                <AnnualBalanceChart balance={annualData?.results} profile={profile} />
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
                  balance={quarterlyData?.results}
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
                <AnnualIncomeChart income={annualData?.results} profile={profile}/>
              </div>
              {/* <div className={styles.tableWrapper}>
                <AnnualIncomeTable />
              </div> */}
            </TabPanel>
            <TabPanel>
              {/* <div className={styles.chartWrapper}>
                <QuarterlyIncomeChart />
              </div> */}
              <div className={styles.tableWrapper}></div>
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
            {/* <TabPanel>
              <div className={styles.chartWrapper}>
                <AnnualCashFlowChart />
              </div>
              <div className={styles.tableWrapper}>
                <AnnualCashFlowTable />
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.chartWrapper}>
                <QuarterlyCashFlowChart />
              </div>
              <div className={styles.tableWrapper}>
                <QuarterlyCashFlowTable />
              </div>
            </TabPanel> */}
          </Tabs>
        </AccordionItem>
      </Accordion>
    </ContentBox>
  );
};
