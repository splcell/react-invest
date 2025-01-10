import { useGetBlockchainNewsQuery } from "../../../../redux/newsApi";
import { ContentWrapper } from "../../../ContentWrapper/ui/ContentWrapper";
import { NewsList } from "../NewsList/NewsList";

export const BlockchainNews = () => {
  const { data, isLoading, isError } = useGetBlockchainNewsQuery();

  return (
    <ContentWrapper
      isLoading={isLoading}
      isError={isError || !data?.feed}
      errorText='News not Found'
    >
      <NewsList feedArr={data?.feed} />
    </ContentWrapper>
  );
};
