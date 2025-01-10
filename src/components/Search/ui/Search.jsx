import { memo, useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { useLazyCompanySearchQuery } from "../../../redux/investmentsApi";
import { useDebouncedCallback } from "use-debounce";
import { SearchResults } from "./SearchResults/SearchResults";

export const Search = memo(() => {
  const [value, setValue] = useState("");
  const [searchTickers, {data, isLoading, isError}] = useLazyCompanySearchQuery();
  

  const debounceResponse = useDebouncedCallback((value) => {
    searchTickers({
      ticker: value
    })
  }, 500);

  

  useEffect(() => {
    if(value !== ''){
      debounceResponse(value)
    }
  }, [value])

  return (
    <div className={styles.searchWrapper}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.search}
        placeholder='Search company name or ticker. Example: MSFT'
      />
      {data?.length > 0 && value.length > 0 && <SearchResults data={data} setValue={setValue}/>}
    </div>
  );
});
