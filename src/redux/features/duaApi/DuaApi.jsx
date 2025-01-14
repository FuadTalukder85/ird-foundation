import { baseApi } from "@/redux/baseApi/baseApi";

const DuaApi = baseApi.injectEndpoints({
  overrideExisting: true,
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
        url: "/api/get-dua",
        method: "GET",
        cache: "force-cache",
      }),
    }),
  }),
});
export const { useAddDuaMutation, useGetDuaQuery } = DuaApi;
