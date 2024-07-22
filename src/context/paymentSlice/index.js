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
    }),
});

export const {
    useCreatePaymentMutation,
} = paymentApi;
