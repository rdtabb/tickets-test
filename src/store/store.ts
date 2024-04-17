import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { searchTicketsReducer } from './search-tickets-slice'

export const store = configureStore({
    reducer: combineReducers({
        searchTickets: searchTicketsReducer
    })
})

export type RootState = ReturnType<typeof store.getState>
