import { FC } from "react";
import { FilterPanel, FlightList } from "components";
import { Layout } from "containers";
import { FilterProvider, TicketsProvider } from "providers";

const App: FC = () => (
  <TicketsProvider>
    <FilterProvider>
      <Layout>
        <FilterPanel />
        <FlightList />
      </Layout>
    </FilterProvider>
  </TicketsProvider>
);

export default App;
