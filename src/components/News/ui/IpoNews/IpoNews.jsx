import { useGetIpoNewsQuery } from "../../../../redux/newsApi";
import { ContentWrapper } from "../../../ContentWrapper/ui/ContentWrapper";
import { NewsList } from "../NewsList/NewsList";

export const IpoNews = () => {
  const { data, isLoading, isError } = useGetIpoNewsQuery();

  return(
    <ContentWrapper 
      isLoading={isLoading}
      isError={isError || !data?.feed}
      errorText='News not Found'
    >
      <NewsList feedArr={data?.feed} />
    </ContentWrapper>
  );
};
