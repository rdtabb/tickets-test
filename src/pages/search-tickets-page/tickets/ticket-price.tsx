import { useSelector } from 'react-redux'

import { currencyFilterSelector } from '../../../store/search-tickets-slice'
import { TicketPriced } from '../../../utils/types'

import css from './ticket.module.css'

interface TicketPriceProps {
    ticket: TicketPriced
}

export const TicketPrice = ({ ticket }: TicketPriceProps) => {
    const currencyFilter = useSelector(currencyFilterSelector)

    const getTicketPrice = (): string => {
        if (currencyFilter === 'eur') {
            return ticket.eurPrice
        }

        if (currencyFilter === 'usd') {
            return ticket.dollarPrice
        }

        return ticket.rubPrice
    }

    return <span className={css.buttonPrice}>за {getTicketPrice()}</span>
}
