import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Planets from "./components/Planets";
import People from "./components/People";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  const [page, setPage] = useState("planets");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>StarWarz!</h1>
        <NavBar setPage={setPage}></NavBar>
        <div className="content"></div>
        {page === "planets" ? <Planets></Planets> : <People></People>}
      </div>
    </QueryClientProvider>
  );
}

export default App;
