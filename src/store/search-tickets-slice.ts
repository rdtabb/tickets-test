import { createSlice, createSelector, type PayloadAction } from '@reduxjs/toolkit'

import data from '../data/tickets.json'
import type { TicketPriced } from '../utils/types'
import { filterTickets, quickSort, normalizeTickets } from '../utils/functions'

import { type RootState } from './store'

type CurrencyFilter = 'rub' | 'usd' | 'eur'
export type TransferFilter = 'all' | 0 | 1 | 2 | 3

interface SearchTicketsState {
    tickets: TicketPriced[]
    currencyFilter: CurrencyFilter
    transferFilter: TransferFilter[]
}

const normalizedTickets = normalizeTickets(data.tickets)
const initialState: SearchTicketsState = {
    tickets: normalizedTickets,
    currencyFilter: 'rub',
    transferFilter: []
}

export const {
    actions: { setCurrencyFilter, setTransferFilter, setExclusiveFilter },
    reducer: searchTicketsReducer
} = createSlice({
    name: 'search-tickets',
    initialState,
    reducers: {
        setCurrencyFilter(state, { payload }: PayloadAction<CurrencyFilter>) {
            state.currencyFilter = payload
        },
        setTransferFilter(state, { payload }: PayloadAction<TransferFilter>) {
            if (payload === 'all') {
                if (state.transferFilter.includes(payload)) {
                    state.transferFilter = []
                } else {
                    state.transferFilter = [payload]
                }
                state.tickets = normalizedTickets
                return
            }

            state.transferFilter = state.transferFilter.filter((item) => item !== 'all')

            if (!state.transferFilter.includes(payload)) {
                state.transferFilter.push(payload)
            } else {
                state.transferFilter = state.transferFilter.filter((item) => item !== payload)
            }

            if (state.transferFilter.length === 0) {
                state.tickets = normalizedTickets
                return
            }

            state.tickets = filterTickets(normalizedTickets, state.transferFilter)
        },
        setExclusiveFilter(state, { payload }: PayloadAction<TransferFilter>) {
            state.transferFilter = [payload]
            if (payload === 'all') {
                state.tickets = normalizedTickets
                return
            }
            state.tickets = filterTickets(normalizedTickets, payload)
        }
    }
})

export const ticketsSelector = createSelector(
    (state: RootState) => state.searchTickets.tickets,
    (tickets) => quickSort(tickets)
)

export const currencyFilterSelector = (state: RootState) => state.searchTickets.currencyFilter

export const transferFilterSelector = (state: RootState) => state.searchTickets.transferFilter
