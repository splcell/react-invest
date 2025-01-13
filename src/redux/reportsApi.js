import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const reportsUrl = process.env.REACT_APP_REPORTS_API_URL;
const reportsKey = process.env.REACT_APP_REPORTS_API_KEY;

console.log(reportsUrl, 'url')
console.log(reportsKey, 'key')

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
  }),
});

export const { useGetReportsQuery } = reportsApi;
