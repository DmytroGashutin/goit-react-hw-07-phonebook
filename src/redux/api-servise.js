import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62d567b415ad24cbf2c65a0e.mockapi.io/phonebook',
    }),
    tagTypes: ['contacts'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['contacts'],
        }),
        createContact: builder.mutation({
            query: ({ name, number }) => ({
                url: '/contacts',
                method: 'POST',
                body: { name, number },
            }),
            invalidatesTags: ['contacts'],
            
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;