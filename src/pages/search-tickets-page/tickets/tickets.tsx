import { useSelector } from 'react-redux'

import { ticketsSelector } from '../../../store/search-tickets-slice'

import { Ticket } from './ticket'
import css from './tickets.module.css'

export const Tickets = () => {
    const tickets = useSelector(ticketsSelector)

    return (
        <section className={css.tickets}>
            {tickets.map((item, index) => (
                <Ticket ticket={item} key={index} />
            ))}
        </section>
    )
}
