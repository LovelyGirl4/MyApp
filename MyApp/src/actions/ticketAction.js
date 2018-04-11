import { FETCH_TICKETS } from '../constants/ActionTypes'

export const fetchTickets = (pagination) => ({
    type: FETCH_TICKETS,
    pagination
})