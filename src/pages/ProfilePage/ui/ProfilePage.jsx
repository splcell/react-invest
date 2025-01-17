import { useParams } from "react-router-dom";
import { Container } from "../../../components/Container/ui/Container";
import styles from "./ProfilePage.module.scss";
import { useGetProfileQuery } from "../../../redux/investmentsApi";
import { MarketInfo } from "../../../components/MarketInfo/ui/MarketInfo";
import { CompanyChart } from "../../../components/CompanyChart/ui/CompanyChart";
import { useGetCurrentQuoteQuery } from "../../../redux/investmentsApi";
import { Minmax } from "../../../components/Minmax/ui/Minmax";
import { Description } from "../../../components/Description/ui/Description";
import { Reports } from "../../../components/Reports";
import { Ratios } from "../../../components/Ratios/ui/Ratios";

export const ProfilePage = () => {
  const { ticker } = useParams();
  const { data, isLoading, isError } = useGetProfileQuery({ ticker });
  const { data: quotedata } = useGetCurrentQuoteQuery({ ticker });
  const profile = data?.[0] || {};
  const metrics = quotedata?.[0] || {};

  return (
    <Container>
      <div className={styles.profileInner}>
        <div className={styles.profileWrapper}>
          <MarketInfo profile={profile} data={quotedata} />
          <CompanyChart profile={profile} ticker={ticker} />
          <Minmax profile={profile} metrics={metrics} />
          <Reports ticker={ticker} profile={profile} />
        </div>
        <div className={styles.infoWrapper}>
          <Description
            profile={profile}
            isLoading={isLoading}
            isError={isError}
          />
          <Ratios ticker={ticker}/>
        </div>
      </div>
    </Container>
  );
};
