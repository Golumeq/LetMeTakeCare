import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const trailsAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = trailsAdapter.getInitialState()

export const trailsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTrails: builder.query({
            query: () => '/trails',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedTrails = responseData.map(trail => {
                    trail.id = trail._id
                    return trail
                });
                return trailsAdapter.setAll(initialState, loadedTrails)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Trail', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Trail', id }))
                    ]
                } else return [{ type: 'Trail', id: 'LIST' }]
            }
        }),
        addNewTrail: builder.mutation({
            query: initialTrail => ({
                url: '/trails',
                method: 'POST',
                body: {
                    ...initialTrail,
                }
            }),
            invalidatesTags: [
                { type: 'Trail', id: "LIST" }
            ]
        }),
        updateTrail: builder.mutation({
            query: initialTrail => ({
                url: '/trails',
                method: 'PATCH',
                body: {
                    ...initialTrail,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Trail', id: arg.id }
            ]
        }),
        deleteTrail: builder.mutation({
            query: ({ id }) => ({
                url: `/trails`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Trail', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetTrailsQuery,
    useAddNewTrailMutation,
    useUpdateTrailMutation,
    useDeleteTrailMutation,
} = trailsApiSlice

// returns the query result object
export const selectTrailsResult = trailsApiSlice.endpoints.getTrails.select()

// creates memoized selector
const selectTrailsData = createSelector(
    selectTrailsResult,
    trailsResult => trailsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllTrails,
    selectById: selectTrailById,
    selectIds: selectTrailIds
    // Pass in a selector that returns the trails slice of state
} = trailsAdapter.getSelectors(state => selectTrailsData(state) ?? initialState)