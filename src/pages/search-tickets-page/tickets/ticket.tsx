import { TicketPriced } from '../../../utils/types'

import { TicketPrice } from './ticket-price'
import css from './ticket.module.css'

interface TicketProps {
    ticket: TicketPriced
}

const getTransferEnding = (transfersNumber: number): string => {
    const remainder = transfersNumber % 10

    if (remainder === 1) {
        return 'пересадка'
    }

    if (remainder >= 2 && remainder <= 4) {
        return 'пересадки'
    }
    return 'пересадок'
}

export const Ticket = ({ ticket }: TicketProps) => (
    <article className={css.ticket}>
        <div className={css.ticketSection}>
            <img src={ticket.companyLogo} width={250} height={60} className={css.image} />
            <button className={css.button}>
                Купить <TicketPrice ticket={ticket} />
            </button>
        </div>
        <div className={css.ticketSection}>
            <article>
                <p className={css.time}>{ticket.departureInfo.time}</p>
                <p className={css.airport}>{ticket.departureInfo.airport}</p>
                <p>{ticket.departureInfo.date}</p>
            </article>
            <p>
                {ticket.transfersNumber} {getTransferEnding(ticket.transfersNumber)}
            </p>
            <article>
                <p className={css.time}>{ticket.arrivalInfo.time}</p>
                <p className={css.airport}>{ticket.arrivalInfo.airport}</p>
                <p>{ticket.arrivalInfo.date}</p>
            </article>
        </div>
    </article>
)
