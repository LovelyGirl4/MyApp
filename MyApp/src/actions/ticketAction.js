import * as ActionTypes from '../constants/ActionTypes'

export const fetchTickets = (pagination) => ({
    type: ActionTypes.FETCH_TICKETS,
    pagination
})