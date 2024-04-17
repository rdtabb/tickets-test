export interface Ticket {
    price: number
    companyLogo: string
    departureInfo: {
        airport: string
        time: string
        date: string
    }
    arrivalInfo: {
        airport: string
        time: string
        date: string
    }
    transfersNumber: number
}

export interface TicketPriced {
    price: number
    rubPrice: string
    dollarPrice: string
    eurPrice: string
    companyLogo: string
    departureInfo: {
        airport: string
        time: string
        date: string
    }
    arrivalInfo: {
        airport: string
        time: string
        date: string
    }
    transfersNumber: number
}
