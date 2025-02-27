import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const investmentsUrl = process.env.REACT_APP_INVESTMENTS_URL;
const investmentsKey = process.env.REACT_APP_INVESTMENTS_API_KEY;

export const investmentsApi = createApi({
  reducerPath: "investmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: investmentsUrl,
  }),
  endpoints: (build) => ({
    companySearch: build.query({
      query: ({ ticker }) => `search?query=${ticker}&apikey=${investmentsKey}`,
    }),
    getProfile: build.query({
      query: ({ ticker }) => `profile/${ticker}?apikey=${investmentsKey}`,
    }),
    getCurrentQuote: build.query({
      query: ({ ticker }) => `quote/${ticker}?apikey=${investmentsKey}`,
    }),
    getChartData: build.query({
      query: ({ ticker }) =>
        `historical-price-full/${ticker}?serietype=line&apikey=${investmentsKey}`,
    }),
    getKeyRatios: build.query({
      query: ({ticker}) => `ratios-ttm/${ticker}?apikey=${investmentsKey}`
    }),
    getCompanyRating: build.query({
      query: ({ticker}) => `rating/${ticker}?apikey=${investmentsKey}`
    }),
    getAllSectors: build.query({
      query: () => `sectors-list?apikey=${investmentsKey}`
    }),
    getAllSectorCompanies: build.query({
      query: ({sector}) => `stock-screener?sector=${sector}&apikey=${investmentsKey}`
    })
  }),
});

export const {
  useLazyCompanySearchQuery,
  useLazyGetChartDataQuery,
  useLazyGetAllSectorCompaniesQuery,
  useGetProfileQuery,
  useGetCompanyRatingQuery,
  useGetAllSectorsQuery,
  useGetCurrentQuoteQuery,
  useGetKeyRatiosQuery,
} = investmentsApi;

