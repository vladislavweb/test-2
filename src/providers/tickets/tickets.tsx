import { createContext, FC, ReactNode, useState } from "react";
import { Tickets } from "types";

type Props = FC<{ children?: ReactNode }>;

interface TicketsProviderInterface {
  tickets?: Tickets;
  loadTickets: () => Promise<void>;
}

export const Context = createContext<TicketsProviderInterface>({
  loadTickets: async () => undefined,
});

export const TicketsProvider: Props = ({ children }) => {
  const [tickets, setTickets] = useState<Tickets>();

  const loadTickets = async () => {
    const localData = await import("../../assets/tickets.json");
    setTickets(localData.tickets);
  };

  return <Context.Provider value={{ tickets, loadTickets }}>{children}</Context.Provider>;
};
