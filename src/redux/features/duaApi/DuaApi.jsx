import { baseApi } from "@/redux/baseApi/baseApi";

const DuaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDua: builder.mutation({
      query: (addDua) => ({
        url: "/api/add-dua",
        method: "POST",
        body: addDua,
      }),
      providesTags: ["dua"],
    }),
    getDua: builder.query({
      query: () => ({
        url: "/api/add-dua",
        method: "GET",
      }),
      providesTags: ["dua"],
    }),
  }),
});
export const { useAddDuaMutation, useGetDuaQuery } = DuaApi;
