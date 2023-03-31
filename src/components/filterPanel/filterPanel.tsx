import { FC } from "react";
import { AmountOfTransfersFilter } from "./amountOfTransfersFilter";
import "./filterPanel.scss";

const FilterPanel: FC = () => (
  <div className="filter-panel">
    <AmountOfTransfersFilter />
  </div>
);

export default FilterPanel;
