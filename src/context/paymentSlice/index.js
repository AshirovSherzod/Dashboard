import { api } from "../api/index";

export const paymentApi = api.injectEndpoints({
    endpoints: (build) => ({
        createPayment: build.mutation({
            query: (body) => ({
                url: `/create/payment`,
                method: "POST",
                body
            }),
            invalidatesTags: ["Payment"],
        }),
        historyPaymentCustomer: build.query({
            query: (id) => ({
                url: `/get/payments/${id}`,
            }),
            providesTags: ["Payment"],
        }),
    }),
});

export const {
    useCreatePaymentMutation,
    useHistoryPaymentCustomerQuery

} = paymentApi;
