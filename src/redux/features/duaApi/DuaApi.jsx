import { baseApi } from "@/redux/baseApi/baseApi";

const DuaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDua: builder.mutation({
      query: (addDua) => ({
        url: "/api/add-dua",
        method: "POST",
        body: addDua,
      }),
    }),
    getDua: builder.query({
      query: () => ({
        url: "/api/add-dua",
        method: "GET",
      }),
    }),
  }),
});
export const { useAddDuaMutation, useGetDuaQuery } = DuaApi;
