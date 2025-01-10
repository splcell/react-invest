import { useGetTechnologyNewsQuery } from "../../../../redux/newsApi"
import { ContentWrapper } from "../../../ContentWrapper/ui/ContentWrapper"
import { NewsList } from "../NewsList/NewsList"

export const TechnologyNews = () => {
  const {data, isLoading, isError} = useGetTechnologyNewsQuery()


  return(
    <ContentWrapper 
      isLoading={isLoading}
      isError={isError || !data?.feed}
      errorText='News not Found'
    >
      <NewsList feedArr={data?.feed}/>
    </ContentWrapper>
  )
}