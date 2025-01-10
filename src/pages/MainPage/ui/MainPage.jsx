import { Container } from "../../../components/Container/ui/Container";
import { NewsComponent } from "../../../components/News/ui/NewsComponent/NewsComponent";
import { MostActive, TopGainers, TopLoosers } from "../../../components/Tops";
import { useGetGainersLoosersQuery } from "../../../redux/newsApi";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const { data, isLoading, isError } = useGetGainersLoosersQuery();

  return (
    <Container>
      <div className={styles.containerInner}>
        <div>
          <NewsComponent />
        </div>
        <div className={styles.containerInfo}>
          <TopGainers
            topArr={data?.top_gainers}
            isLoading={isLoading}
            isError={isError || !data?.top_gainers}
          />
          <TopLoosers 
            topArr={data?.top_losers}
            isLoading={isLoading}
            isError={isError || !data?.top_losers}
          />
          <MostActive 
            topArr={data?.most_actively_traded}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </Container>
  );
};
