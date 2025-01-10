import styles from "./NewsComponent.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BsBarChartFill } from "react-icons/bs";
import { CgSmartphoneChip } from "react-icons/cg";
import { SiBitcoinsv } from "react-icons/si";
import { EarningsNews } from "../EarningsNews/EarningsNews";
import { BlockchainNews } from "../BlockchainNews/BlockchainNews";
import { IpoNews } from "../IpoNews/IpoNews";
import { TechnologyNews } from "../TechnologyNews/TechnologyNews";

export const NewsComponent = () => {
  return (
    <div className={styles.newsInner}>
      <Tabs>
        <TabList className={styles.newsTabs}>
          <Tab className={styles.newsTab}>
            <HiOutlineDocumentReport />
            Earnings News
          </Tab>
          <Tab className={styles.newsTab}>
            <SiBitcoinsv />
            Blockchain News
          </Tab>
          <Tab className={styles.newsTab}>
            <BsBarChartFill />
            IPO News
          </Tab>
          <Tab className={styles.newsTab}>
            <CgSmartphoneChip />
            Technology News
          </Tab>
        </TabList>

        <TabPanel className={styles.newsContent}>
          <EarningsNews />
        </TabPanel>
        <TabPanel className={styles.newsContent}>
          <BlockchainNews />
        </TabPanel>
        <TabPanel className={styles.newsContent}>
          <IpoNews />
        </TabPanel>
        <TabPanel className={styles.newsContent}>
          <TechnologyNews />
        </TabPanel>
      </Tabs>
    </div>
  );
};
