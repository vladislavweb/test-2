import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import * as R from "ramda";
import { AmountOfTransfers, Tickets } from "types";
import { filterTickets } from "utils";
import { TicketsContext } from "providers";

type Props = FC<{ children?: ReactNode }>;

export type OptionsAmountOfTransfers = AmountOfTransfers[];

interface FilterProviderInterface {
  filteredTickets: Tickets;
  amountOfTransfers: OptionsAmountOfTransfers;
  changeAmountOfTransfers: (value: AmountOfTransfers | OptionsAmountOfTransfers) => void;
}

export const Context = createContext<FilterProviderInterface>({
  filteredTickets: [],
  amountOfTransfers: [],
  changeAmountOfTransfers: () => undefined,
});

export const FilterProvider: Props = ({ children }) => {
  const { tickets } = useContext(TicketsContext);
  const [filteredTickets, setFilteredTickets] = useState<Tickets>([]);
  const [amountOfTransfers, setAmountOfTransfers] = useState<OptionsAmountOfTransfers>([]);

  const changeAmountOfTransfers = (condition: AmountOfTransfers | OptionsAmountOfTransfers) => {
    if (Array.isArray(condition)) {
      if (condition.length === amountOfTransfers.length) {
        setAmountOfTransfers([]);
      } else {
        setAmountOfTransfers(condition);
      }
    } else {
      const valueIndex = R.findIndex(R.propEq("value", condition.value), amountOfTransfers);

      if (valueIndex >= 0) {
        setAmountOfTransfers((prevValue) => [
          ...prevValue.slice(0, valueIndex),
          ...prevValue.slice(valueIndex + 1),
        ]);
      } else {
        setAmountOfTransfers((prevValue) => [...prevValue, condition]);
      }
    }
  };

  useEffect(() => {
    if (tickets) {
      setFilteredTickets(filterTickets({ tickets, filters: { amountOfTransfers } }));
    }
  }, [tickets, amountOfTransfers]);

  return (
    <Context.Provider value={{ filteredTickets, amountOfTransfers, changeAmountOfTransfers }}>
      {children}
    </Context.Provider>
  );
};
