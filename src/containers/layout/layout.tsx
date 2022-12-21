import React, { FC, useContext, useEffect } from "react";
import { TicketsContext } from "../../providers";
import "./layout.scss";

type Props = React.HTMLProps<HTMLDivElement>;

const Layout: FC<Props> = ({ children }) => {
  const { loadTickets } = useContext(TicketsContext);

  useEffect(() => {
    loadTickets();
  }, []);

  return <div className="layout">{children}</div>;
};

export default Layout;
