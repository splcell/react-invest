import styles from "./Rating.module.scss";
import { ContentBox } from "../../ContentBox";
import { ContentWrapper } from "../../ContentWrapper";
import { ProfileList } from "../../ProfileList";
import { useGetCompanyRatingQuery } from "../../../redux/investmentsApi";

export const Rating = ({ ticker }) => {
  const { data, isLoading, isError } = useGetCompanyRatingQuery({ ticker });

  console.log(data, 'rating')

  return (
    <ContentBox title="Company Rating" className={styles.rating}>
      <ContentWrapper
        isLoading={isLoading}
        isError={isError || data?.length === 0}
        errorText="Rating not Found"
      >
        <ProfileList rating={data?.[0]}/>
      </ContentWrapper>
    </ContentBox>
  );
};
