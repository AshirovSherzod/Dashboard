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
    signIn: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
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
      query: (body) => ({
        url: "/update/customer",
        method: "POST",
        body,
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
} = customerApi;
