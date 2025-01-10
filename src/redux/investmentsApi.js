import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const investmentsUrl = process.env.REACT_APP_INVESTMENTS_URL
const investmentsKey = process.env.REACT_APP_INVESTMENTS_API_KEY


export const investmentsApi = createApi({
  reducerPath: 'investmentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: investmentsUrl
  }),
  endpoints: (build) => ({
    companySearch: build.query({
      query: ({ticker}) => `search?query=${ticker}&apikey=${investmentsKey}`
    }),
    getProfile: build.query({
      query: ({ticker}) => `profile/${ticker}?apikey=${investmentsKey}`
    }),
    getCurrentQuote: build.query({
      query: ({ticker}) => `quote/${ticker}?apikey=${investmentsKey}`
    }),
    getChartData: build.query({
      query: ({ticker}) => `historical-price-full/${ticker}?serietype=line&apikey=${investmentsKey}`
    })
  })
})

export const {
  useLazyCompanySearchQuery,
  useLazyGetChartDataQuery,
  useGetProfileQuery,
  useGetCurrentQuoteQuery
} = investmentsApi