import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reportsUrl = process.env.REACT_APP_REPORTS_API_URL;
const reportsKey = process.env.REACT_APP_REPORTS_API_KEY;

console.log(reportsUrl, "url");
console.log(reportsKey, "key");

export const reportsApi = createApi({
  reducerPath: "reportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: reportsUrl,
  }),
  endpoints: (build) => ({
    getReports: build.query({
      query: ({ ticker, period }) =>
        `vX/reference/financials?ticker=${String(
          ticker
        ).toUpperCase()}&timeframe=${period}&limit=5&apiKey=${reportsKey}`,
    }),
    getDividends: build.query({
      query: ({ ticker, cursor }) => {
        const params = new URLSearchParams();

        if (cursor) {
          params.append("cursor", cursor);
        }

        return `v3/reference/dividends?ticker=${String(
          ticker
        ).toUpperCase()}&${params}&limit=30&apiKey=${reportsKey}`;
      },
    }),
    getCompanyNews: build.query({
      query: ({ ticker }) =>
        `v2/reference/news?ticker=${String(
          ticker
        ).toUpperCase()}&limit=10&apiKey=${reportsKey}`,
    }),
  }),
});

export const { useGetReportsQuery, useLazyGetDividendsQuery, useGetCompanyNewsQuery } = reportsApi;
