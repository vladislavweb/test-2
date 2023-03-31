import { FC, useContext } from "react";
import { FilterContext } from "providers";
import { FlightElement } from "./flightElement";
import "./flightList.scss";

const FlightList: FC = () => {
  const { filteredTickets } = useContext(FilterContext);

  return (
    <div className="flight-list">
      {filteredTickets.map((ticket, i) => (
        <FlightElement key={i} ticket={ticket} />
      ))}
    </div>
  );
};

export default FlightList;
