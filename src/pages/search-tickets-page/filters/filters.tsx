import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
    setTransferFilter,
    setCurrencyFilter,
    transferFilterSelector,
    currencyFilterSelector,
    setExclusiveFilter
} from '../../../store/search-tickets-slice'
import { Checkbox } from '../../../ui/checkbox/checkbox'

import css from './filters.module.css'

interface PropsWithClassname {
    className?: string
}

export const Filters = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleIsOpen = (): void => {
        setIsOpen((prev) => !prev)
    }

    return (
        <>
            <header className={css.filtersMobile}>
                <h2>Фильтры</h2>
                <button onClick={toggleIsOpen}>{isOpen ? 'свернуть' : 'показать'}</button>
            </header>
            <aside
                className={`${css.filtersContainer} ${isOpen ? css.filtersContainerVisible : undefined}`}
            >
                <CurrencyFilters className={isOpen ? css.groupVisible : undefined} />
                <TransferFilters className={isOpen ? css.groupVisible : undefined} />
            </aside>
        </>
    )
}

const TransferFilters = ({ className }: PropsWithClassname) => {
    const transferFilter = useSelector(transferFilterSelector)
    const dispatch = useDispatch()

    return (
        <div className={`${css.group} ${className}`}>
            <h3 className={css.groupTitle} style={{ paddingInline: '15px' }}>
                Количество пересадок
            </h3>
            <div className={css.checkboxGroup}>
                <div className={css.checkboxHoverGroup}>
                    <Checkbox
                        id="all"
                        checked={transferFilter.includes('all')}
                        onChange={() => dispatch(setTransferFilter('all'))}
                        label="Все"
                    />
                    <p className={css.only} onClick={() => dispatch(setExclusiveFilter('all'))}>
                        Только
                    </p>
                </div>
                <div className={css.checkboxHoverGroup}>
                    <Checkbox
                        id="noTransfer"
                        checked={transferFilter.includes(0)}
                        onChange={() => dispatch(setTransferFilter(0))}
                        label="Без пересадок"
                    />
                    <p className={css.only} onClick={() => dispatch(setExclusiveFilter(0))}>
                        Только
                    </p>
                </div>
                <div className={css.checkboxHoverGroup}>
                    <Checkbox
                        id="oneTransfer"
                        checked={transferFilter.includes(1)}
                        onChange={() => dispatch(setTransferFilter(1))}
                        label="Одна пересадка"
                    />
                    <p className={css.only} onClick={() => dispatch(setExclusiveFilter(1))}>
                        Только
                    </p>
                </div>
                <div className={css.checkboxHoverGroup}>
                    <Checkbox
                        id="twoTransfers"
                        checked={transferFilter.includes(2)}
                        onChange={() => dispatch(setTransferFilter(2))}
                        label="Две пересадки"
                    />
                    <p className={css.only} onClick={() => dispatch(setExclusiveFilter(2))}>
                        Только
                    </p>
                </div>
                <div className={css.checkboxHoverGroup}>
                    <Checkbox
                        id="threeTransfers"
                        checked={transferFilter.includes(3)}
                        onChange={() => dispatch(setTransferFilter(3))}
                        label="Три пересадки"
                    />
                    <p className={css.only} onClick={() => dispatch(setExclusiveFilter(3))}>
                        Только
                    </p>
                </div>
            </div>
        </div>
    )
}

const CurrencyFilters = ({ className }: PropsWithClassname) => {
    const currencyFilter = useSelector(currencyFilterSelector)
    const dispatch = useDispatch()

    return (
        <div className={`${css.group} ${className}`}>
            <h3 className={css.groupTitle}>Валюта</h3>
            <div className={css.buttons}>
                <button
                    className={`${css.button} ${currencyFilter === 'rub' ? css.buttonActive : ''}`}
                    onClick={() => dispatch(setCurrencyFilter('rub'))}
                >
                    RUB
                </button>
                <button
                    className={`${css.button} ${currencyFilter === 'usd' ? css.buttonActive : ''}`}
                    onClick={() => dispatch(setCurrencyFilter('usd'))}
                >
                    USD
                </button>
                <button
                    className={`${css.button} ${currencyFilter === 'eur' ? css.buttonActive : ''}`}
                    onClick={() => dispatch(setCurrencyFilter('eur'))}
                >
                    EUR
                </button>
            </div>
        </div>
    )
}
