import { api } from "../api/index";

export const expenseApi = api.injectEndpoints({
    endpoints: (build) => ({
        createExpense: build.mutation({
            query: (body) => ({
                url: `/create/expense`,
                method: "POST",
                body
            }),
            invalidatesTags: ["Expense", "Seller"],
        }),
    }),
});

export const {
    useCreateExpenseMutation
} = expenseApi;
