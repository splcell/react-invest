import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsUrl = process.env.REACT_APP_NEWS_URL
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: newsUrl
  }),
  endpoints: (build) => ({
    getEarningsNews: build.query({
      query: () => `query?function=NEWS_SENTIMENT&topics=earnings&sort=LATEST&apikey=${newsApiKey}`
    }),
    getBlockchainNews: build.query({
      query: () => `query?function=NEWS_SENTIMENT&topics=blockchain&sort=LATEST&apikey=${newsApiKey}`
    }),
    getIpoNews: build.query({
      query: () => `query?function=NEWS_SENTIMENT&topics=ipo&sort=LATEST&apikey=${newsApiKey}`
    }),
    getTechnologyNews: build.query({
      query: () => `query?function=NEWS_SENTIMENT&topics=technology&sort=LATEST&apikey=${newsApiKey}`
    }),
    getGainersLoosers: build.query({
      query: () => `query?function=TOP_GAINERS_LOSERS&apikey=${newsApiKey}`
    }),
    getCompanyNews: build.query({
      query: (ticker) => `query?function=NEWS_SENTIMENT&tickers=${ticker.toUpperCase()}&apikey=${newsApiKey}`
    })
  })
})

export const {
  useGetEarningsNewsQuery,
  useGetBlockchainNewsQuery,
  useGetIpoNewsQuery,
  useGetTechnologyNewsQuery,
  useGetGainersLoosersQuery,
  useGetCompanyNewsQuery
} = newsApi