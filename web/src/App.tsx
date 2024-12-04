import React from "react";

import "./App.css";

// Import components
import Header from "./components/header";
import GenerationSection from "./components/generation-section";

// Import classes
import { API } from "./classes/api";

const api = new API();

function App() {
  // React.useEffect(() => {
  //   // Setup response interceptor
  //   api.hook("response", null, function () {});
  // }, []);

  return (
    <>
      <Header />
      <GenerationSection />
    </>
  );
}

export default App;
