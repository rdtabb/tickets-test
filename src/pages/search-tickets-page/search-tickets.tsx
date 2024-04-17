import { Filters } from './filters/filters'
import css from './search-tickets.module.css'
import { Tickets } from './tickets/tickets'

export const SearchTicketsPage = () => (
    <main className={css.main}>
        <Filters />
        <Tickets />
    </main>
)
