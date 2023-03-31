import { FC } from "react";
import { Ticket } from "types";
import { Button } from "components";
import "./flightElement.scss";

interface Props {
  ticket: Ticket;
}

const FlightElement: FC<Props> = ({ ticket }) => {
  return (
    <div className="flight-element">
      <div className="flight-element__pay">
        <div className="flight-element__logo">{ticket.carrier}</div>
        <div className="flight-element__button">
          <Button>
            Купить за
            <br />
            {ticket.price}
          </Button>
        </div>
      </div>

      <div className="flight-element__info">
        <div className="flight-element__departure card-info">
          <div className="card-info__time">{ticket.departure_time}</div>
          <div>{`${ticket.origin}, ${ticket.origin_name}`}</div>
          <div className="card-info__date">{ticket.departure_date}</div>
        </div>

        <div className="flight-element__amount-of-transfers">Пересадки: {ticket.stops}</div>

        <div className="flight-element__arrival card-info">
          <div className="card-info__time">{ticket.departure_time}</div>
          <div>{`${ticket.origin}, ${ticket.origin_name}`}</div>
          <div className="card-info__date">{ticket.departure_date}</div>
        </div>
      </div>
    </div>
  );
};

export default FlightElement;
