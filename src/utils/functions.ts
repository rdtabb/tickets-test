import { type TransferFilter } from '../store/search-tickets-slice'

import type { Ticket, TicketPriced } from './types'
import { USD_RUB_CONVERSION_RATE, EUR_RUB_CONVERSION_RATE } from './constants'

export const quickSort = (array: TicketPriced[]): TicketPriced[] => {
    if (array.length <= 1) {
        return array
    }
    const pivot: TicketPriced = array[0]
    const left: TicketPriced[] = []
    const right: TicketPriced[] = []

    for (var i = 1; i < array.length; i++) {
        array[i].price < pivot.price ? left.push(array[i]) : right.push(array[i])
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

export const convertRubToUsd = (rub: number): string => {
    return Math.round(rub / USD_RUB_CONVERSION_RATE) + '$'
}

export const convertRubToEur = (rub: number): string => {
    return Math.round(rub / EUR_RUB_CONVERSION_RATE) + '€'
}

export const filterTickets = (
    tickets: TicketPriced[],
    transferFilter: TransferFilter[] | TransferFilter
): TicketPriced[] => {
    const filteredValues: TicketPriced[] = []

    if (Array.isArray(transferFilter)) {
        for (let i = 0; i < tickets.length; i++) {
            const ticket = tickets[i]
            for (let j = 0; j < transferFilter.length; j++) {
                const filterItem = transferFilter[j]
                if (typeof filterItem === 'number' && ticket.transfersNumber === filterItem) {
                    filteredValues.push(ticket)
                }
            }
        }
    } else {
        for (let i = 0; i < tickets.length; i++) {
            const ticket = tickets[i]
            if (ticket.transfersNumber === transferFilter) {
                filteredValues.push(ticket)
            }
        }
    }

    return filteredValues
}

export const normalizeTickets = (tickets: Ticket[]): TicketPriced[] => {
    return tickets.map((ticket) => ({
        ...ticket,
        rubPrice: ticket.price + '₽',
        eurPrice: convertRubToEur(ticket.price),
        dollarPrice: convertRubToUsd(ticket.price)
    }))
}
