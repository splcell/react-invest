import { useNavigate } from "react-router-dom";
import { Container } from "../../../components/Container/ui/Container";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { useGetAllSectorsQuery } from "../../../redux/investmentsApi";
import styles from "./MarketPage.module.scss";

export const MarketPage = () => {
  const { data, isLoading, isError } = useGetAllSectorsQuery();
  const navigate = useNavigate();

  return (
    <Container>
      <h3 className={styles.marketTitle}>All Market Sectors</h3>
      <ContentWrapper
        isLoading={isLoading}
        isError={isError || data?.length === 0}
        errorText="Sectors Info not Found"
      >
        <div className={styles.sectorsWrapper}>
          {data?.map((sector, index) => (
            <span
              key={index}
              className={styles.sector}
              onClick={() => navigate(`/market/${sector}/industries`)}
            >
              {sector}
            </span>
          ))}
        </div>
      </ContentWrapper>
    </Container>
  );
};
