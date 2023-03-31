import { FC, useContext } from "react";
import { FilterContext, OptionsAmountOfTransfers } from "providers";
import { Checkbox } from "components";
import "./amountOfTransfersFilter.scss";

const options: OptionsAmountOfTransfers = [
  {
    id: 0,
    value: 0,
    title: "Без пересадок",
  },
  {
    id: 1,
    value: 1,
    title: "1 пересадка",
  },
  {
    id: 2,
    value: 2,
    title: "2 пересадки",
  },
  {
    id: 3,
    value: 3,
    title: "3 пересадки",
  },
];

const AmountOfTransfersFilter: FC = () => {
  const { amountOfTransfers, changeAmountOfTransfers } = useContext(FilterContext);

  return (
    <div className="amount-of-transfers-filter">
      <div className="amount-of-transfers-filter__title">Количество Пересадок</div>

      <div className="amount-of-transfers-filter__conditions-wrapper">
        <Checkbox
          rightLabel="Все"
          id="amountOfTransfersAll"
          checked={amountOfTransfers.length === options.length}
          onChange={() => changeAmountOfTransfers(options)}
        />

        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={`amountOfTransfers-${option.id}`}
            rightLabel={option.title}
            value={option.value}
            checked={amountOfTransfers.includes(option)}
            onChange={() => changeAmountOfTransfers(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default AmountOfTransfersFilter;
