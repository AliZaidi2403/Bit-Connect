import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "eed24e8515msh1aa2e6184d84288p14a14fjsn78863968a921",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";

const createRequest = (url) => {
  return { url, headers: cryptoNewsHeaders };
};

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
