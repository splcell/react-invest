import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import styles from "./IndustriesPage.module.scss";
import { useLazyGetAllSectorCompaniesQuery } from "../../../redux/investmentsApi";
import { ContentBox } from "../../../components/ContentBox";
import { IndustriesTable } from "../../../components/Tables/ui/IndustriesTable/IndustriesTable";
import { ContentWrapper } from "../../../components/ContentWrapper";
import { Pagination } from "../../../components/Pagination";
import { useDebounce } from "use-debounce";
import { FilterWrapper } from "../../../components/Tables/ui/IndustriesTable/filters/FilterWrapper/FilterWrapper";

export const IndustriesPage = () => {
  const { sector } = useParams();
  const [companies, setCompanies] = useState([]);
  const [page, setPage] = useState(1);
  const totalResults = 30;
  const indexOfLastPage = page * totalResults;
  const indexOfFirstPage = indexOfLastPage - totalResults;
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 500);
  const [getCompanies, { data, isLoading, isError }] =
    useLazyGetAllSectorCompaniesQuery();

  const filteredCompanies = (debouncedValue) => {
    if (debouncedValue !== "") {
      const newCompanies = companies.filter(
        (company) =>
          company.symbol.toLowerCase().includes(debouncedValue.toLowerCase())
      );

      setCompanies(newCompanies);
    } else {
      setCompanies(data);
    }
  };

  useEffect(() => {
    if (sector) {
      getCompanies({
        sector: sector.toLowerCase().replace(" ", "_"),
      });
    }
  }, [sector]);

  useEffect(() => {
    if (data?.length > 0) {
      setCompanies(data);
    }
  }, [data]);

  useEffect(() => {
    filteredCompanies(debouncedValue);
  }, [debouncedValue]);

  return (
    <ContentBox
      title={sector.replace(" ", "-") + " " + "Industries"}
      variant="no-border"
      className={styles.industryContent}
    >
      <ContentWrapper
        isLoading={isLoading}
        isError={isError || companies?.length === 0}
        errorText="Info not Found"
      >
        <FilterWrapper value={value} setValue={setValue} />
        <IndustriesTable
          companies={companies?.slice(indexOfFirstPage, indexOfLastPage)}
        />
        <Pagination
          data={companies}
          page={page}
          setPage={setPage}
          totalResults={totalResults}
        />
      </ContentWrapper>
    </ContentBox>
  );
};
