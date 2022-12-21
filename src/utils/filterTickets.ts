import * as R from "ramda";
import { OptionsAmountOfTransfers } from "../providers";
import { Tickets } from "../types";

interface FilterTicketsParams {
  tickets: Tickets;
  filters: {
    amountOfTransfers?: OptionsAmountOfTransfers;
  };
}

type FilterTickets = (params: FilterTicketsParams) => Tickets;

export const filterTickets: FilterTickets = ({ tickets, filters }) => {
  let filteredTickets: Tickets = [];

  if (filters.amountOfTransfers?.length) {
    const conditions = R.map((el) => el.value, filters.amountOfTransfers);

    filteredTickets = R.filter((ticket) => R.includes(ticket.stops, conditions), tickets);
  }

  return filteredTickets;
};
