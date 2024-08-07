import { api } from "../api";

export const customerApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCustomers: build.query({
      query: (params) => ({
        url: "/get/customers",
        params,
      }),
      providesTags: ["Customer"],
    }),
    getSingleCustomer: build.query({
      query: (id) => ({
        url: `/get/customer/${id}`,
      }),
      providesTags: ["Customer"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/admin/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Customer"],
    }),
    registerCustomer: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Customer"],
    }),
    createCustomer: build.mutation({
      query: (body) => ({
        url: "/create/customer",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Customer"],
    }),
    pinCustomer: build.mutation({
      query: ({ data }) => ({
        url: `/update/customer/${data._id}`,
        method: "PATCH",
        body: { ...data, pin: !data.pin },
      }),
      invalidatesTags: ["Customer"],
    }),
    updateCustomer: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/update/customer/${id}`,
        method: "PATCH",
        body
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const {
  useRegisterCustomerMutation,
  useSignInMutation,
  useGetCustomersQuery,
  useCreateCustomerMutation,
  usePinCustomerMutation,
  useGetSingleCustomerQuery,
  useUpdateCustomerMutation,
} = customerApi;
