import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { SearchTicketsPage } from './pages/search-tickets-page/search-tickets'
import { store } from './store/store'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <SearchTicketsPage />
        </Provider>
    </React.StrictMode>
)
